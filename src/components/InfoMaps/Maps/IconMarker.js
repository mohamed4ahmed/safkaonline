import L from "leaflet";
import iconUrl from "../../../assets/img/logo-web-white.png";

const iconSafka = new L.Icon({
  iconUrl: iconUrl,
  iconSize: [75, 75],
  iconAnchor: [75, 75],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
});

export { iconSafka };
