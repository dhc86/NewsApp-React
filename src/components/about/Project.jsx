var React = require('react');

var Project = React.createClass({
  render: function(){
    return (
      <div>
        <p>{this.props.project.title}</p>
        <p>{this.props.project.url}</p>
      </div>
    );
  }
});

module.exports = Project;
