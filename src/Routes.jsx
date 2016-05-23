var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

//remove the history hash in URL
var CreateHistory = require('history/lib/createHashHistory');
var History = new CreateHistory({
  queryKey: false
});

var Landing = require('./components/Landing.jsx');
var Photos = require('./components/photos.jsx');
var About = require('./components/About.jsx');
var News = require('./components/News.jsx');

var Routes = (
  <Router history={History}>
    <Route path="/" component={Landing}>
      <Route path="/news" component={News} />
      <Route path="/photos" component={Photos} />
      <Route path="/about" component={About} />
    </Route>
  </Router>
);

module.exports = Routes;
