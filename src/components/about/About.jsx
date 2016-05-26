var React = require('react');
var Name = require('./Name.jsx');
var Summary = require('./Summary.jsx');
var ProjectList = require('./ProjectList.jsx');


var About = React.createClass({
  render: function(){

    var developerInfo = [{name: "Diego Herrera",
                          summary: "Engineer with a passion for web application technologies. I am looking to join and grow in a dynamic, innovative and supportive team where I can learn and contribute using my analytical thinking, management experience and web development skills.",
                          projects: [{project:{title:"Savebook", url:"http://savebook.herokuapp.com", file:"http://i.imgur.com/UWrrAWS.png"}},
                                     {project:{title:"MYMusic", url:"https://mymusic-dhc.herokuapp.com/", file:"http://i.imgur.com/tvlsWyt.png"}},
                                     {project:{title:"TRAILIX", url:"https://trailix.herokuapp.com/", file:"http://i.imgur.com/e9f3Ao4.png"}},
                                     {project:{title:"Solo Shoppers", url:"http://www.soloshoppers.ca", file:"http://i.imgur.com/N2QROtF.png"}}]
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
      <div className="row">
        <div className="col-sm-8">
          <div>
            {callProjects}
          </div>
        </div>
        <div className="col-sm-4">
          <div>
            <h3>{callName}</h3>
          </div>
          <div>
            <h4>Summary:</h4>
            <p>{callSummary}</p>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = About;
