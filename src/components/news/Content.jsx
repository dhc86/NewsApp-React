var React =  require('react');

//Here is some content about the news. This will display as a paragraph where all the information is displayed in this text. For more information please google the news title. You will find some articles related to this new. Or for a better user experience use Youtube where you will be able to search this title , find a video and play the video for free!. Good luck
var Content = React.createClass({
  render: function(){
    return (
      <div>
        <p>{this.props.content}</p>
      </div>
    )
  }
});

module.exports = Content;
