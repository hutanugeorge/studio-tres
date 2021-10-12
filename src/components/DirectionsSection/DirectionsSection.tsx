import React, { FC } from 'react'

import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api'

import mapStyles from '../../../utils/mapStyles'
import { GOOGLE_API_KEY } from '../../../keys'


const DirectionsSection: FC = (): JSX.Element => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GOOGLE_API_KEY,
    libraries
  })
  if (loadError) return (<div>Error loading maps</div>)
  if (!isLoaded) return (<div>Loading Maps</div>)
  return (
    <section id="directions" className="direction-section--wrap">
      <div className="direction-section">
        <h1 className="direction-section__title">Tres Studio</h1>
        <GoogleMap mapContainerStyle={mapContainerStyle}
                   zoom={13}
                   center={center}
                   options={options}>
          <Marker position={center}
                  onClick={() => window.open('https://www.google.com/maps/place/45°43\'41.6%22N+21°16\'16.3%22E/')}/>
        </GoogleMap>
      </div>
    </section>
  )

}

const libraries = [ 'places' ]
const mapContainerStyle = {
  width: '100%',
  height: '100%'
}
const center = {
  lat: 45.728248,
  lng: 21.271184
}
const options = {
  styles: mapStyles,
  disableDefaultUI: true
}


export default DirectionsSection
