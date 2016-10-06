// main.js
var React = require('react');
var Component = React.Component;
var ReactDOM = require('react-dom');

var L = require('leaflet');

class Map extends Component {
  componentDidMount() {
    // creates a map with basic buble wrap style
    var lon = -74.009;
    var lat = 40.70531;
    var map = L.map('map');
    var layer = Tangram.leafletLayer({
      scene: 'https://mapzen.com/carto/refill-style/refill-style.yaml',
      attribution: '<a href="https://mapzen.com/tangram">Tangram</a> | &copy; OSM contributors | <a href="https://mapzen.com/">Mapzen</a>'
    });
    layer.addTo(map);
    map.setView([lat, lon], 13);
  }
  render() {
    return (
      <div id = "map" />
    );
  }
}


ReactDOM.render(<Map />, document.getElementById('map-wrapper'));