var React = require('react');

var Summary = React.createClass({
  render: function(){
    return (
      <p>{this.props.summary}</p>
    );
  }
});

module.exports = Summary;
