import {MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import './map.scss'
import "leaflet/dist/leaflet.css"
import Pin from '../../pin/pin'
const Map = ({items}) => {
  return (
    <MapContainer center={[23.00,72.00]} zoom={7} scrollWheelZoom={false} className='mapp'>
    <TileLayer 
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
   {items.map(item => (
    <Pin item={item} key={item.id} />
   ))}
  </MapContainer>
  )
}

export default Map