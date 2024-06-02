import styles from './Map.module.css'
import {useNavigate, useSearchParams} from "react-router-dom";
import {MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents} from "react-leaflet";
import {useContext, useEffect, useState} from "react";
import useCities from "../../Hooks/useCities.jsx";
import {useGeolocation} from "../../Hooks/useGeolocation.js";
import Button from "../Button/Button.jsx";

const Map = () => {

    const {cities} = useCities()
    const [mapPosition, setMapPosition] = useState([40,0])
    const {isLoading:isLoadingPosition,position:geolocationPosition,getPosition}=useGeolocation()

    const [searchParams,setSearchParams]= useSearchParams()
        const mapLat=searchParams.get('lat')
        const mapLng=searchParams.get('lng')

    useEffect(() => {
        if(mapLat && mapLng) setMapPosition([mapLat,mapLng])
    }, [mapLat,mapLng]);

    useEffect(() => {
if (geolocationPosition) setMapPosition([geolocationPosition.lat,geolocationPosition.lng])
    }, [geolocationPosition]);

    return (
        <div className={styles.mapContainer}>
            {!geolocationPosition && (<Button type='position' onClick={getPosition}>
                {isLoadingPositi on ? 'Loading ...' : 'Use your position'}
            </Button>)}
            <MapContainer center={mapPosition} zoom={6} scrollWheelZoom={true} className={styles.map}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
                />
                {cities.map(city=><Marker position={[city.position.lat,city.position.lng]} key={city.id}>
                    <Popup>
                        <span>{city.cityName}</span>
                    </Popup>
                </Marker>)}
                <ChangeCenter position={mapPosition}/>
                <DetectClick/>
            </MapContainer>
        </div>
    );
};

function ChangeCenter({position}){
    const map= useMap()
    map.setView(position)
    return null
}

function DetectClick(){
    const navigate=useNavigate()

    useMapEvents({
        click:e=>navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`)
    })
}

export default Map;