/**
 * MapContainer – World map for the landing page.
 *
 * Features (easy to explain in interview):
 * 1. Map background: world map via Leaflet tile layer
 * 2. Zoom & scroll: built-in Leaflet interaction
 * 3. Geographic points: at least 2 city markers (Mumbai, Delhi)
 * 4. Data tooltip: on hover, show city name + metrics from mock data
 * 5. Initial animation: smooth zoom-in on first load
 */

import { useEffect } from "react";
import {
  MapContainer as LeafletMapContainer,
  TileLayer,
  Marker,
  Tooltip,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { cities } from "../data/mockCities";
import type { City } from "../types/cities";

// ---------------------------------------------------------------------------
// Step 1: Custom circle markers to match dashboard theme (dark + green/red accents).
// No external images – simple divs so they always show and fit the theme.
// ---------------------------------------------------------------------------
const MARKER_COLORS = ["#22c55e", "#ef4444"] as const; // green, red (same as card trends)

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
    iconAnchor: [10, 10],
  });
}

// ---------------------------------------------------------------------------
// Step 2: Map city config – which cities appear on the map and their coordinates.
// We show at least 2 cities (requirement). Using first 2 from mock data.
// [lat, lng] for Mumbai and Delhi.
// ---------------------------------------------------------------------------
const MAP_CITIES: { id: number; position: [number, number] }[] = [
  { id: 1, position: [19.076, 72.8777] }, // Mumbai
  { id: 2, position: [28.7041, 77.1025] }, // Delhi
];

// Helper: get city from mock data by id
function getCityById(id: number): City | undefined {
  return cities.find((c) => c.id === id);
}

// ---------------------------------------------------------------------------
// Step 3: Inner component that runs the initial zoom-in animation.
// useMap() gives us the Leaflet map instance once the map is ready.
// ---------------------------------------------------------------------------
function InitialZoomAnimation() {
  const map = useMap();

  useEffect(() => {
    // Start zoomed out (zoom 3 = world view), then smoothly zoom in to level 4
    const startZoom = 3;
    const endZoom = 4;
    const center: [number, number] = [22.5, 75]; // Center over India

    map.setView(center, startZoom);

    // Smooth zoom-in after a short delay so the user sees the animation
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

// ---------------------------------------------------------------------------
// Step 4: Single city marker with tooltip. Uses theme-colored circle + dark tooltip.
// ---------------------------------------------------------------------------
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
      {/* Tooltip: dark theme to match dashboard (dark bg, light text) */}
      <Tooltip
        direction="top"
        offset={[0, -12]}
        className="map-tooltip-theme"
        opacity={1}
      >
        <div style={{
          padding: "8px 10px",
          minWidth: 160,
          background: "rgba(11, 30, 38, 0.95)",
          color: "#e2e8f0",
          borderRadius: 8,
          border: "1px solid rgba(255,255,255,0.2)",
          fontSize: 13,
        }}>
          <strong style={{ color: "#fff", fontSize: 14 }}>{city.city}</strong>
          <div style={{ marginTop: 8, opacity: 0.95 }}>
            <div>Sales: {sales.value}{sales.unit} {sales.trend === "up" ? "↑" : sales.trend === "down" ? "↓" : "→"}</div>
            <div>Efficiency: {efficiency.value}{efficiency.unit} {efficiency.trend === "up" ? "↑" : efficiency.trend === "down" ? "↓" : "→"}</div>
          </div>
        </div>
      </Tooltip>
    </Marker>
  );
}

// ---------------------------------------------------------------------------
// Step 5: Main map. z-index 0 so map receives pointer events; overlay uses pointer-events: none on empty areas.
// ---------------------------------------------------------------------------
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
        center={[22.5, 75]}
        zoom={3}
        style={{ height: "100%", width: "100%", background: "#0B1E26" }}
        scrollWheelZoom={true}
        zoomControl={false}
        attributionControl={false}
        doubleClickZoom={true}
        dragging={true}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          subdomains="abcd"
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
