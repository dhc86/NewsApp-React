var React = require('react');

var Summary = React.createClass({
  render: function(){
    return (
      <div>
        {this.props.summary}
      </div>
    );
  }
});

module.exports = Summary;
