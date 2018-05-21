
import express from 'express';
import exphbs from 'express-handlebars';
import compression from 'compression';
import path from 'path';
import bodyParser from 'body-parser';

import template from './views/template.handlebars';

// Initialize http server
const app = express();

// Include static assets and compress the file before sending to client
app.use(compression())
.use(express.static(path.join(__dirname, '../..', 'build')));

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Read the environement variable to initializate the process
const PORT = process.env.PORT || 4003;

// set up View templates and  engine
app.engine('handlebars', exphbs({ defaultLayout: 'template' }));
app.set('view engine', 'handlebars');


// Routes
app.get('/', (req, res) => {
  const htmlString = 'Welcome';

  res.send(template({
    body: htmlString,
    title: 'React Redux Login app'
  }));
});

// start the server
app.listen(PORT);
console.log('Server is Up and Running at Port : ', PORT);
