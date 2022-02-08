import React from "react";
import {
  TileLayer,
  Marker,
  Popup,
  Tooltip,
  MapContainer as LeafletMap,
} from "react-leaflet";
import "./Maps.css";
import "leaflet/dist/leaflet.css";
import { iconSafka } from "./IconMarker";
import logoImg from "../../../assets/img/logo-web-black.png";
const Map = () => {
  const position = [30.974042, 31.182244];
  const zoom = 18;
  return (
    <div className="map">
      <LeafletMap center={position} zoom={zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={iconSafka}>
          <Popup>
            <div className="info-container">
              <div className="info__logo">
                <img src={logoImg} alt="logo" />
              </div>
              <div className="info__name">صــفـقـة للملابس الجاهزة</div>
              <div className="info__address">
                Address: 2st Taha el-Sawy, Elmahala-Elkoubra, Gharbia, Egypt
              </div>
            </div>
          </Popup>
          <Tooltip>صــفـقـة للملابس الجاهزة</Tooltip>
        </Marker>
      </LeafletMap>
    </div>
  );
};

export default Map;
