import React, {Component, useState} from "react";
import GoogleMapReact from "google-map-react";
import MyMarker from "./MyMarker";

const KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const AnyReactComponent = ({text}: any) => <div>{text}</div>;

const MTAGooglemap = (props: any) => {
  // const centering = () => {
  //   let array = {};
  //   let ref0 = [];
  //   let ref1 = [];
  //   props.directionRef0.map((bus, index) => {
  //     let lati = bus.MonitoredVehicleJourney.VehicleLocation.Latitude;
  //     let long = bus.MonitoredVehicleJourney.VehicleLocation.Longitude;
  //     ref0.push({lat: lati, lng: long, index: index});
  //   });
  //   props.directionRef1.map((bus, index) => {
  //     let lati = bus.MonitoredVehicleJourney.VehicleLocation.Latitude;
  //     let long = bus.MonitoredVehicleJourney.VehicleLocation.Longitude;
  //     ref1.push({lat: lati, lng: long, index: index});
  //   });
  //   array = {ref0: ref0, ref1: ref1};
  //   return array;
  // };

  const [center, setCenter] = useState({
    lat: 40.69879315,
    lng: -73.88767071
  });

  const [zoom, setZoom] = useState(13);

  const renderLatLong0 = () => {
    let array = [];
    props.directionRef0.map((bus, index) => {
      let lati = bus.MonitoredVehicleJourney.VehicleLocation.Latitude;
      let long = bus.MonitoredVehicleJourney.VehicleLocation.Longitude;
      array.push({lat: lati, lng: long, index: index});
    });
    const trst = array.map(({lat, lng, index}) => {
      return <MyMarker key={index} lat={lat} lng={lng} color="blue" />;
    });
    return trst;
  };

  const renderLatLong1 = () => {
    let array = [];
    props.directionRef1.map((bus, index) => {
      let lati = bus.MonitoredVehicleJourney.VehicleLocation.Latitude;
      let long = bus.MonitoredVehicleJourney.VehicleLocation.Longitude;
      array.push({lat: lati, lng: long, index: index});
    });
    const trst = array.map(({lat, lng, index}) => {
      return <MyMarker key={index} lat={lat} lng={lng} color="red" />;
    });
    return trst;
  };

  return (
    <div style={{height: "100vh", width: "100%"}}>
      <GoogleMapReact
        bootstrapURLKeys={{key: KEY}}
        defaultCenter={center}
        defaultZoom={12}
      >
        {renderLatLong0()}
        {renderLatLong1()}
      </GoogleMapReact>
    </div>
  );
};

export default MTAGooglemap;
