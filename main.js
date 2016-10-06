// main.js
var React = require('react');
var Component = React.Component;
var ReactDOM = require('react-dom');

var mapzenMap = require('mapzen.js')

class Map extends Component {
  componentDidMount() {
    // creates a map with basic buble wrap style
    var lon = -74.009;
    var lat = 40.70531;
    var map = L.Mapzen.map('map');
    map.setView([lat, lon], 13);
  }
  render() {
    return (
      <div id = "map" />
    );
  }
}


ReactDOM.render(<Map />, document.getElementById('map-wrapper'));