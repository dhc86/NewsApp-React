var React =  require('react');

var Location = React.createClass({
  render: function(){
    return (
      <div>
        <p>{this.props.location}</p>
      </div>
    )
  }
});

module.exports = Location;
