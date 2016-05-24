var React =  require('react');
var Image = require('./Image.jsx');

var ImagesList = React.createClass({
  render: function(){

    var createItem = function(item){
      return <Image image={item.image} />
    };

    return (<div>{this.props.imagesArr.map(createItem)}</div>);
  }
});

module.exports = ImagesList;
