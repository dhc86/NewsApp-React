var React =  require('react');

var Image = React.createClass({
  render: function(){
    return (
      <div className="col-sm-6">
        <img src={this.props.image} className="img-responsive" alt="soccer image" />
      </div>
    )
  }
});

module.exports = Image;
