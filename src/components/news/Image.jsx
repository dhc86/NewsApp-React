var React =  require('react');

var Image = React.createClass({
  render: function(){
    return (
      <div>
        <img src={this.props.image} alt="" />
      </div>
    )
  }
});

module.exports = Image;
