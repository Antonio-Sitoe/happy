import React from "react";
import styled from "styled-components";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";


const SimpleMapStyle = styled.div`
  height: 400px;
`;

  // var map = L.map("map").setView([51.505, -0.09], 13);

  // L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  //   attribution:
  //     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  // }).addTo(map);

  // L.marker([51.5, -0.09])
  //   .addTo(map)
  //   .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
  //   .openPopup();

const SimpleMaph = () => {

  return <SimpleMapStyle className="map"></SimpleMapStyle>;

};

export default SimpleMaph;
