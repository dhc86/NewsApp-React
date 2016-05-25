var React = require('react');

var Photo = React.createClass({
  render: function(){
    return (
      <div>
        <img src={this.props.url} alt="" />
      </div>
    );
  }
});

module.exports = Photo;
