import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

export default class StoreMap extends React.Component {
  state = {
    lat: 38.904722,
    lng: -77.016389,
    zoom: 13,
  }

  setLocationState = () => {
    if (this.props.mapLocation === 'Washington, DC') {
      return [38.904772, -77.016389]
      // this.setState({lat: 38.904722, lng: -77.016389})
    } else if (this.props.mapLocation === 'Baltimore, MD') {
      return [39.283333, -76.616667]
      // this.setState({lat: 39.283333, lng: -76.616667})
    } else {
      return [38.904772, -77.016389]
      // this.setState({lat: 38.904722, lng: -77.016389})
    }
  }

  render() {
    
    // this.setLocationState();
    // let position = [this.state.lat, this.state.lng]
    let position = this.setLocationState();
    
    return (
      
      <Map center={position} zoom={this.state.zoom} style={{height: '300px'}}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {this.props.stores.map(
          (store) => { return (
            <Marker position={[store.latitude, store.longitude]}>
              <Popup>
              <a href={`/store/${store.id}`}>{store.name}</a>
              </Popup>
            </Marker>
          )}
        )}
      </Map>
      
    )
  }
}