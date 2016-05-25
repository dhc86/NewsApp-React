var React = require('react');
var Name = require('./Name.jsx');
var Summary = require('./Summary.jsx');
var ProjectList = require('./ProjectList.jsx');


var About = React.createClass({
  render: function(){

    var developerInfo = [{name: "Diego Herrera",
                          summary: "Engineer with a passion for web application technologies. I am looking to join and grow in a dynamic, innovative and supportive team where I can learn and contribute using my analytical thinking, management experience and web development skills.",
                          projects: [{project:{title:"Savebook", url:"http://savebook.herokuapp.com"}},
                                     {project:{title:"MYMusic", url:"https://mymusic-dhc.herokuapp.com/"}},
                                     {project:{title:"TRAILIX", url:"https://trailix.herokuapp.com/"}},
                                     {project:{title:"Solo Shoppers", url:"http://www.soloshoppers.ca"}}]
                          }];

    var callName = developerInfo.map(function(item){
      return <Name name={item.name} />;
    });

    var callSummary = developerInfo.map(function(item){
      return <Name name={item.summary} />;
    });

    var callProjects = developerInfo.map(function(item){
      return <ProjectList projectsArr={item.projects} />;
    });

    return (
      <div>
          {callName}
          {callSummary}
          {callProjects}
      </div>
    );
  }
});

module.exports = About;
