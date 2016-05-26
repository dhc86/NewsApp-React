var React = require('react');
var Link = require('react-router');

var Landing = React.createClass({
  render: function(){

    return (
      <div>
        <div className="container">
          <h1>UEFA Champions League</h1>
          <h4>Top Football Stories</h4>
          <br />
          <div className="row">
            <div className="col-sm-12">
              <div className="col-sm-4"></div>
              <div className="col-sm-4"></div>
              <div className="col-sm-4">
                <div className="row">
                  <div className="col-sm-4"><a href="/#/news"><p className="text-right">News</p></a></div>
                  <div className="col-sm-4"><a href="/#/photos"><p className="text-right">Photos</p></a></div>
                  <div className="col-sm-4"><a href="/#/about"><p className="text-right">About</p></a></div>
                </div>
              </div>
            </div>
          </div>
          {this.props.children}
          <div class="panel panel-default">
            <div class="panel-footer">
              <h3>This shoud be the footer!!!</h3>
            </div>
          </div>

        </div>
      </div>
    );
  }
});

module.exports = Landing;
