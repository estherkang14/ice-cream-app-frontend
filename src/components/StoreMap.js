import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

export default class StoreMap extends React.Component {
  state = {
    lat: 38.904722,
    lng: -77.016389,
    zoom: 13,
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <Map center={position} zoom={this.state.zoom} style={{height: '250px'}}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {this.props.stores.map(
          (store) => { return (
            <Marker position={[store.latitude, store.longitude]}>
              <Popup>
                {store.name}
              </Popup>
            </Marker>
          )}
        )}
      </Map>
    )
  }
}