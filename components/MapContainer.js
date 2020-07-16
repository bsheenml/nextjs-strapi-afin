import React, { Component } from 'react'

import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react'



const mapStyles = {
  width: '60%',
  height: '60%',
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
  };
  
  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

onClose = props => {
  if (this.state.showingInfoWindow) {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    });
  }
};

  render() {
    const intl = 'Maps'
    return (
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{ lat: 45.5051, lng: -122.6750 }}
          gestureHandling='greedy'
        >
          <Marker
            onClick={this.onMarkerClick}
            name={'Kenyatta International Convention Centre'}
          />
          
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
          <Marker
            onClick={this.onMarkerClick}
            location={{ lat: 45.480850, lng: -122.643160 }}
          />        
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </Map>     
      
    );
  }
}

const MAPS_API = 'AIzaSyC5AagrwEc8KcpG-k6I60hI10IeO4g-JYM'

export default GoogleApiWrapper({
  apiKey: MAPS_API
})(MapContainer);