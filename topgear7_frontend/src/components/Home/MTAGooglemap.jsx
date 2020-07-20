import React from "react";
import GoogleMapReact from "google-map-react";
import MyMarker from "./MyMarker";

const KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const MTAGooglemap = (props: any) => {
  const renderLatLong = (direction, color) => {
    let array = [];
    direction.map((bus, index) => {
      let lati = bus.MonitoredVehicleJourney.VehicleLocation.Latitude;
      let long = bus.MonitoredVehicleJourney.VehicleLocation.Longitude;
      array.push({lat: lati, lng: long, index: index});
    });
    const latlongmarker = array.map(({lat, lng, index}) => {
      return <MyMarker key={index} lat={lat} lng={lng} color={color} />;
    });
    return latlongmarker;
  };

  const renderCenter = () => {
    let array = [];
    props.directionRef0.map((bus, index) => {
      let lati = bus.MonitoredVehicleJourney.VehicleLocation.Latitude;
      let long = bus.MonitoredVehicleJourney.VehicleLocation.Longitude;
      array.push({lat: lati, lng: long});
    });
    return array[0];
  };

  return (
    <div style={{height: "100vh", width: "100%"}}>
      <GoogleMapReact
        bootstrapURLKeys={{key: KEY}}
        center={
          renderCenter()
            ? renderCenter()
            : {lat: 40.69879315, lng: -73.88767071}
        }
        defaultZoom={12}
      >
        {renderLatLong(props.directionRef0, "blue")}
        {renderLatLong(props.directionRef1, "red")}
      </GoogleMapReact>
    </div>
  );
};

export default MTAGooglemap;
