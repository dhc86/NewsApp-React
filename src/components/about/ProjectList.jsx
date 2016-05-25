var React = require('react');
var Project = require('./Project.jsx');

var ProjectList = React.createClass({
  render: function(){
    // projectsArr = [{project:{title:"Savebook", url:"http://savebook.herokuapp.com"}},
    //                {project:{title:"MYMusic", url:"https://mymusic-dhc.herokuapp.com/"}},
    //                {project:{title:"TRAILIX", url:"https://trailix.herokuapp.com/"}},
    //                {project:{title:"Solo Shoppers", url:"http://www.soloshoppers.ca"}}];

    var callProject = function(item){
      //this will pass an object with params title and url
      return (<Project project={item.project} />);
    }

    return (
      <div>
        {this.props.projectsArr.map(callProject)}
      </div>
    );
  }
});

module.exports = ProjectList;
