var React = require('react');
var Photo = require('./Photo.jsx');

var Photos = React.createClass({
  render: function(){
  var images = [{image:"http://www.uefa.com/MultimediaFiles/Photo/competitions/Comp_Matches/02/35/82/45/2358245_w2.jpg"},
                {image:"http://www.uefa.com/MultimediaFiles/Photo/competitions/General/02/28/03/12/2280312_w2.jpg"},
                {image:"http://www.uefa.com/MultimediaFiles/Photo/competitions/DomesticLeague/02/36/69/05/2366905_w2.jpg"},
                {image:"http://www.uefa.com/MultimediaFiles/Photo/competitions/Comp_Matches/02/36/01/93/2360193_w2.jpg"},
                {image:"http://www.uefa.com/MultimediaFiles/Photo/competitions/General/02/36/78/99/2367899_w2.jpg"}
               ];

    var callPhotos = images.map(function(item){
      return <Photo url={item.image} />;
    });

    return (
      <div className="row">
        <div className="col-sm-12">

            {callPhotos}
        </div>
      </div>
    );
  }
});

module.exports = Photos;
