import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

// Imports related to Leaflet
import { MapContainer, TileLayer, Circle, Marker, Popup, GeoJSON } from 'react-leaflet'

const center = [51.505, -0.09]

const polyline = [
  [51.505, -0.09],
  [51.51, -0.1],
  [51.51, -0.12],
]

const multiPolyline = [
  [
    [51.5, -0.1],
    [51.5, -0.12],
    [51.52, -0.12],
  ],
  [
    [51.5, -0.05],
    [51.5, -0.06],
    [51.52, -0.06],
  ],
]

const polygon = [
  [51.515, -0.09],
  [51.52, -0.1],
  [51.52, -0.12],
]

const multiPolygon = [
  [
    [51.51, -0.12],
    [51.51, -0.13],
    [51.53, -0.13],
  ],
  [
    [51.51, -0.05],
    [51.51, -0.07],
    [51.53, -0.07],
  ],
]

const rectangle = [
  [51.49, -0.08],
  [51.5, -0.06],
]

const alabama = [[[-87.359296,35.00118],[-85.606675,34.984749],[-85.431413,34.124869],[-85.184951,32.859696],[-85.069935,32.580372],[-84.960397,32.421541],[-85.004212,32.322956],[-84.889196,32.262709],[-85.058981,32.13674],[-85.053504,32.01077],[-85.141136,31.840985],[-85.042551,31.539753],[-85.113751,31.27686],[-85.004212,31.003013],[-85.497137,30.997536],[-87.600282,30.997536],[-87.633143,30.86609],[-87.408589,30.674397],[-87.446927,30.510088],[-87.37025,30.427934],[-87.518128,30.280057],[-87.655051,30.247195],[-87.90699,30.411504],[-87.934375,30.657966],[-88.011052,30.685351],[-88.10416,30.499135],[-88.137022,30.318396],[-88.394438,30.367688],[-88.471115,31.895754],[-88.241084,33.796253],[-88.098683,34.891641],[-88.202745,34.995703],[-87.359296,35.00118]]];

const fillBlueOptions = { fillColor: 'blue' }
const blackOptions = { color: 'black' }
const limeOptions = { color: 'lime' }
const purpleOptions = { color: 'purple' }
const redOptions = { color: 'red' } 

function App() {
  return (
    <MapContainer center={[55.94694653126058, -3.201965195064799]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
      />
      <Circle center={center} pathOptions={fillBlueOptions} radius={200} />

      <Marker position={[55.94694653126058, -3.201965195064799]}>
        <Popup>
          Creating this thing <br></br> took me a while 🧐
        </Popup>
      </Marker>
      <GeoJSON attribution="&copy; credits due..." data={{"type":"Feature","properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":5,"sovereignt":"Bosnia and Herzegovina","sov_a3":"BIH","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Bosnia and Herzegovina","adm0_a3":"BIH","geou_dif":0,"geounit":"Bosnia and Herzegovina","gu_a3":"BIH","su_dif":0,"subunit":"Bosnia and Herzegovina","su_a3":"BIH","brk_diff":0,"name":"Bosnia and Herz.","name_long":"Bosnia and Herzegovina","brk_a3":"BIH","brk_name":"Bosnia and Herz.","brk_group":null,"abbrev":"B.H.","postal":"BiH","formal_en":"Bosnia and Herzegovina","formal_fr":null,"note_adm0":null,"note_brk":null,"name_sort":"Bosnia and Herzegovina","name_alt":null,"mapcolor7":1,"mapcolor8":1,"mapcolor9":1,"mapcolor13":2,"pop_est":4613414,"gdp_md_est":29700,"pop_year":-99,"lastcensus":1991,"gdp_year":-99,"economy":"6. Developing region","income_grp":"3. Upper middle income","wikipedia":-99,"fips_10":null,"iso_a2":"BA","iso_a3":"BIH","iso_n3":"070","un_a3":"070","wb_a2":"BA","wb_a3":"BIH","woe_id":-99,"adm0_a3_is":"BIH","adm0_a3_us":"BIH","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Europe","region_un":"Europe","subregion":"Southern Europe","region_wb":"Europe & Central Asia","name_len":16,"long_len":22,"abbrev_len":4,"tiny":-99,"homepart":1,"filename":"BIH.geojson"},"geometry":{"type":"Polygon","coordinates":[[[19.00548628101012,44.86023366960916],[19.36803,44.863],[19.11761,44.42307000000011],[19.59976,44.03847],[19.454,43.56810000000013],[19.21852,43.52384],[19.03165,43.43253],[18.70648,43.20011],[18.56,42.65],[17.674921502358984,43.02856252702361],[17.297373488034452,43.44634064388736],[16.91615644701733,43.66772247982567],[16.456442905348865,44.04123973243128],[16.23966027188453,44.35114329688571],[15.750026075918981,44.81871165626256],[15.959367303133376,45.233776760430935],[16.318156772535872,45.00412669532591],[16.534939406000206,45.21160757097772],[17.002146030351014,45.233776760430935],[17.861783481526402,45.067740383477144],[18.553214145591653,45.08158966733145],[19.00548628101012,44.86023366960916]]]}}} />

      <GeoJSON attribution="&copy; credits due..." data={{"type":"Feature","properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":6,"sovereignt":"Croatia","sov_a3":"HRV","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Croatia","adm0_a3":"HRV","geou_dif":0,"geounit":"Croatia","gu_a3":"HRV","su_dif":0,"subunit":"Croatia","su_a3":"HRV","brk_diff":0,"name":"Croatia","name_long":"Croatia","brk_a3":"HRV","brk_name":"Croatia","brk_group":null,"abbrev":"Cro.","postal":"HR","formal_en":"Republic of Croatia","formal_fr":null,"note_adm0":null,"note_brk":null,"name_sort":"Croatia","name_alt":null,"mapcolor7":5,"mapcolor8":4,"mapcolor9":5,"mapcolor13":1,"pop_est":4489409,"gdp_md_est":82390,"pop_year":-99,"lastcensus":2011,"gdp_year":-99,"economy":"2. Developed region: nonG7","income_grp":"2. High income: nonOECD","wikipedia":-99,"fips_10":null,"iso_a2":"HR","iso_a3":"HRV","iso_n3":"191","un_a3":"191","wb_a2":"HR","wb_a3":"HRV","woe_id":-99,"adm0_a3_is":"HRV","adm0_a3_us":"HRV","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Europe","region_un":"Europe","subregion":"Southern Europe","region_wb":"Europe & Central Asia","name_len":7,"long_len":7,"abbrev_len":4,"tiny":-99,"homepart":1,"filename":"HRV.geojson"},"geometry":{"type":"Polygon","coordinates":[[[18.829838087650046,45.908877671891844],[19.072768995854176,45.52151113543209],[19.39047570158459,45.236515611342384],[19.00548628101012,44.86023366960916],[18.553214145591653,45.08158966733145],[17.861783481526402,45.067740383477144],[17.002146030351014,45.233776760430935],[16.534939406000206,45.21160757097772],[16.318156772535872,45.00412669532591],[15.959367303133376,45.233776760430935],[15.750026075918981,44.81871165626256],[16.23966027188453,44.35114329688571],[16.456442905348865,44.04123973243128],[16.91615644701733,43.66772247982567],[17.297373488034452,43.44634064388736],[17.674921502358984,43.02856252702361],[18.56,42.65],[18.450016310304818,42.47999136002932],[17.509970330483327,42.849994615239154],[16.930005730871642,43.20999848080038],[16.015384555737683,43.50721548112722],[15.174453973052096,44.243191229827914],[15.376250441151795,44.31791535092208],[14.920309279040508,44.73848399512946],[14.901602410550877,45.07606028907611],[14.258747592839995,45.233776760430935],[13.952254672917034,44.80212352149687],[13.656975538801191,45.13693512631596],[13.67940311041582,45.48414907488501],[13.715059848697251,45.500323798192426],[14.4119682145855,45.46616567644742],[14.595109490627918,45.63494090431282],[14.935243767972963,45.471695054702764],[15.327674594797427,45.452316392593325],[15.323953891672431,45.731782538427694],[15.671529575267641,45.8341535507979],[15.768732944408612,46.23810822202353],[16.564808383864943,46.50375092221981],[16.882515089595415,46.38063182228444],[17.630066359129557,45.9517691106941],[18.45606245288286,45.75948110613615],[18.829838087650046,45.908877671891844]]]}}} />

    </MapContainer>
  )
}

export default App;
