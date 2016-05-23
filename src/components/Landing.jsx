var React = require('react');

var Landing = React.createClass({
  render: function(){
    return (
      <div>
        <h1>Welcome to my page! this shoud be the nav bar!</h1>
        {this.props.children}
        <h3>This shoud be the footer!!!</h3>
      </div>
    );
  }
});

module.exports = Landing;
