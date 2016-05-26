var React = require('react');

var Name = React.createClass({
  render: function(){
    return (
      <div>
        {this.props.name}
      </div>
    );
  }
});

module.exports = Name;
