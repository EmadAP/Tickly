"use client";

import React, { useState } from "react";
import L from "leaflet";
import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function LocationMarker({
  onSelect,
  defaultPosition,
}: {
  onSelect: (latlng: [number, number]) => void;
  defaultPosition?: [number, number];
}) {
  const [position, setPosition] = useState<[number, number] | null>(
    defaultPosition || null
  );

  useMapEvents({
    click(e) {
      const coords: [number, number] = [e.latlng.lat, e.latlng.lng];
      setPosition(coords);
      onSelect(coords);
    },
  });

  return position ? <Marker position={position} icon={markerIcon} /> : null;
}

function LocationPicker({
  onLocationSelect,
  defaultCenter = [51.505, -0.09],
  defaultZoom = 13,
  defaultPosition,
}: {
  onLocationSelect: (latlng: [number, number]) => void;
  defaultCenter?: [number, number];
  defaultZoom?: number;
  defaultPosition?: [number, number];
}) {
  return (
    <MapContainer
      center={defaultPosition || defaultCenter}
      zoom={defaultZoom}
      scrollWheelZoom
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker
        onSelect={onLocationSelect}
        defaultPosition={defaultPosition}
      />
    </MapContainer>
  );
}
// function LocationPicker({
//   onLocationSelect,
//   defaultCenter = [51.505, -0.09],
//   defaultZoom = 13,
// }: {
//   onLocationSelect: (latlng: [number, number]) => void;
//   defaultCenter?: [number, number];
//   defaultZoom?: number;
// }) {
//   return (
//     <MapContainer
//       center={defaultCenter}
//       zoom={defaultZoom}
//       scrollWheelZoom
//       style={{ height: "400px", width: "100%" }}
//     >
//       <TileLayer
//         attribution="&copy; OpenStreetMap contributors"
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <LocationMarker onSelect={onLocationSelect} />
//     </MapContainer>
//   );
// }

export default LocationPicker;
