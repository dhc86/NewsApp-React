var React =  require('react');

var Title = React.createClass({
  render: function(){
    return (
      <div>
        {this.props.title}
      </div>
    )
  }
});

module.exports = Title;
