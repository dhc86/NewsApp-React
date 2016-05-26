var React = require('react');
var SubTitle = require('./Subtitle.jsx');
var Content = require('./Content.jsx');
var ImagesList = require('./ImagesList.jsx');
var Location = require('./Location.jsx');
var Title = require('./Title.jsx');

var News = React.createClass({
  render: function(){

    var news = [{
      title:"Champions League Final",
      subtitle:"Where to watch the 2015/16 Champions League final",
      content:"Fans all over the world will have no need to miss a single minute of the action in the 2015/16 UEFA Champions League final as Real Madrid take on city rivals Atlético. The UEFA Champions League's extensive network of broadcast partners will be bringing the final between Real Madrid and Atlético into millions of homes across the world. An estimated global audience of 180 million watched last season's decider between Barcelona and Juventus, with a second all-Madrid encounter set to captivate the globe once more.",
      images: [{image:"http://www.uefa.com/MultimediaFiles/Photo/competitions/DomesticLeague/02/36/43/83/2364383_w2.jpg"},{image: "http://www.uefa.com/MultimediaFiles/Photo/competitions/General/01/92/20/62/1922062_w2.jpg"}],
      location: "Milan, Italy"
    }];

     var callTitle = news.map(function(item){
       return <Title title={item.title} />
     });

     var callSubtitle = news.map(function(item){
       return <SubTitle subtitle={item.subtitle} />
     });

     var callContent = news.map(function(item){
       return <Content content={item.content} />
     });

     var callLocation = news.map(function(item){
       return <Location location={item.location} />
     });

     var callImagesList = news.map(function(item){
       return <ImagesList imagesArr={item.images} />
     });

     var marginProfileStyle = {
       marginLeft: 40,
       marginRight: 40
     }

    return (
      <div className="media">
        <div className="media-left media-top">
          <a href="/#/photos">
            <img style={marginProfileStyle} className="media-object" src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/7/000/26e/2da/37291da.jpg" alt="..." height="80" width="80" />
          </a>
        </div>

        <div className="media-body">
          <h4 classN="media-heading">{callTitle}</h4>
          <div>
            {callSubtitle}
          </div>
          <div>
            {callContent}
          </div>
          <div>
            <div className="row">
                {callImagesList}
            </div>
          </div>
          <div>
            {callLocation}
          </div>
        </div>

      </div>

    );
  }
});

module.exports = News;
