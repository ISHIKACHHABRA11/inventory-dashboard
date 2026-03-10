import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import {
  MapContainer as LeafletMapContainer,
  Marker,
  TileLayer,
  Tooltip,
  useMap,
} from "react-leaflet";
import { cities } from "../data/mockCities";
import type { City } from "../types/cities";

const MARKER_COLORS = ["#22c55e", "#ef4444","#d926b5"] as const;

function createCircleIcon(color: string) {
  return L.divIcon({
    className: "city-marker",
    html: `<div style="
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: ${color};
      border: 3px solid rgba(255,255,255,0.9);
      box-shadow: 0 2px 6px rgba(0,0,0,0.4);
    "></div>`,
    iconSize: [20, 20],
  });
}

const MAP_CITIES: { id: number; position: [number, number] }[] = [
  { id: 1, position: [19.076, 72.8777] },   // Mumbai [lat, lng]
  { id: 2, position: [28.35, 77.12] },      // Delhi [lat, lng]
  { id: 3, position: [12.9716, 77.5946] },  // Bengaluru [lat, lng]
];

function getCityById(id: number): City | undefined {
  return cities.find((c) => c.id === id);
}

function InitialZoomAnimation() {
  const map = useMap();

  useEffect(() => {
    const startZoom = 3;
    const endZoom = 4;
    const center: [number, number] = [20.5, 77];

    map.setView(center, startZoom);

    const timer = setTimeout(() => {
      map.flyTo(center, endZoom, {
        duration: 1.5,      
        easeLinearity: 0.25, 
      });
    }, 300);

    return () => clearTimeout(timer);
  }, [map]);
  return null;
}

function CityMarker({
  position,
  cityId,
  markerColor,
}: {
  position: [number, number]; 
  cityId: number;
  markerColor: string;
}) {
  const city = getCityById(cityId);
  if (!city) return null;

  const sales = city.metrics.sales_forecast;
  const efficiency = city.metrics.efficiency_rate;

  return (
    <Marker position={position} icon={createCircleIcon(markerColor)}>
      <Tooltip
        direction="top"       
        offset={[0, -12]}     
        className="map-tooltip-theme"
        opacity={1}
      >
        <div
          style={{
            padding: "8px 10px",
            minWidth: 160,
            background: "rgba(11, 30, 38, 0.95)",
            color: "#e2e8f0",
            borderRadius: 8,
            border: "1px solid rgba(255,255,255,0.2)",
            fontSize: 13,
          }}
        >
          <strong style={{ color: "#fff", fontSize: 14 }}>{city.city}</strong>
          <div style={{ marginTop: 8, opacity: 0.95 }}>
            <div>
              Sales: {sales.value}
              {sales.unit} {sales.trend === "up" ? "↑" : "↓"}
            </div>
            <div>
              Efficiency: {efficiency.value}
              {efficiency.unit} {efficiency.trend === "up" ? "↑" : "↓"}
            </div>
          </div>
        </div>
      </Tooltip>
    </Marker>
  );
}

const MapContainer = () => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,          
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    >
      <LeafletMapContainer
        center={[20.59, 78.96]}  
        zoom={3}              
        style={{ height: "100%", width: "100%"}}
        scrollWheelZoom={true}   
        zoomControl={false}      
        attributionControl={false} 
        doubleClickZoom={true}   
        dragging={true}         
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          maxZoom={19}
        />
        <InitialZoomAnimation />
        {MAP_CITIES.map(({ id, position }, index) => (
          <CityMarker
            key={id}
            cityId={id}
            position={position}
            markerColor={MARKER_COLORS[index % MARKER_COLORS.length]}
          />
        ))}
      </LeafletMapContainer>
    </div>
  );
};

export default MapContainer;
