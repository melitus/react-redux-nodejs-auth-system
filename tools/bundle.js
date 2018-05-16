import webpack from 'webpack';
import webpackConfig from '../webpack.config';

const bundler = webpack(webpackConfig);

bundler.run((err, stats) => {
  if (err) {
    console.log('Failed to run webpack');
    throw err;
  }

  console.log('Webpack executed successfully, see stats below');
  console.log(stats.toString(webpackConfig));
  /* eslint-enable no-console */
});
