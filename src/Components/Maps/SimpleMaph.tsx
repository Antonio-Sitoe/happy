import React from "react";
import styled from "styled-components";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const SimpleMapStyle = styled.div`
height: 600px;

`;

const SimpleMaph = () => {
  return (
    <SimpleMapStyle>
      <MapContainer  center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </SimpleMapStyle>
  );
};

export default SimpleMaph;
