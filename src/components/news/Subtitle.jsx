var React =  require('react');

var SubTitle = React.createClass({
  render: function(){
    return (
      <div>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
});

module.exports = SubTitle;
