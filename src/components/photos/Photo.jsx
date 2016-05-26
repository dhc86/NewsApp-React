var React = require('react');

var Photo = React.createClass({
  render: function(){
    return (
      <div className="col-sm-4">
        <img src={this.props.url} alt="..." className="img-responsive"/>
        <br />
        <br />
      </div>
    );
  }
});

module.exports = Photo;
