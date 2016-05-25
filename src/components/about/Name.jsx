var React = require('react');

var Name = React.createClass({
  render: function(){
    return (
      <div>
        <p>{this.props.name}</p>
      </div>
    );
  }
});

module.exports = Name;
