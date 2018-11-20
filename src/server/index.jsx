
import express from 'express';
import exphbs from 'express-handlebars';
import compression from 'compression';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import path from 'path';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import bodyParser from 'body-parser';

import template from './views/template.handlebars';
import App from '../client/components/App/App';
import rootReducers from '../client/redux/store/rootReducers';

// Initialize http server
const app = express();

// Include static assets and compress the file before sending to client
app.use(compression())
.use(express.static(path.join(__dirname, '../..', 'build')));

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// create redux store
const store = createStore(rootReducers);

// Read the environement variable to initializate the process
const PORT = process.env.PORT ||3007

// set up View templates and  engine
app.engine('handlebars', exphbs({ defaultLayout: 'template' }));
app.set('view engine', 'handlebars');

// Routes
app.get('/', (req, res) => {
  const htmlString = ReactDOMServer.renderToString(
    <Provider store={store}>
      <App store={store} />
    </Provider>
        );
  res.send(template({
    body: htmlString,
    title: 'React Redux Login app'
  }));
});


// start the server
app.listen(PORT);
console.log(`==> 🌎  Listening on port ${PORT}. Open up http://localhost:${PORT}/ in your browser.`)