import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';

const IPAddressLocation = ({ coordinates }) => {
    const map = useMap();
    map.setView(coordinates, map.getZoom());

    return coordinates === null ? null : (
        <Marker position={coordinates}>
            <Popup>IP Address Location</Popup>
        </Marker>
    )
}

const Map = ({ coordinates }) => {

    return (
        <div id="map" className='z-0'>
            <MapContainer center={coordinates} zoom={8} scrollWheelZoom={false} className="h-full">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <IPAddressLocation coordinates={coordinates} />
            </MapContainer>
        </div>
    )
}

export default Map;