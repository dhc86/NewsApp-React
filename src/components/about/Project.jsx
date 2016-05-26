var React = require('react');

var Project = React.createClass({
  render: function(){
    return (
      <div className="col-sm-6">
        <h3>{this.props.project.title}</h3>
        <a href={this.props.project.url}>
          <img className="media-object img-responsive" src={this.props.project.file} alt="..." />

        </a>
      </div>
    );
  }
});

module.exports = Project;
