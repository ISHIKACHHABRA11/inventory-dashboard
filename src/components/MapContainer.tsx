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

// React hook for running side effects (e.g. after mount)
import { useEffect } from "react";
// Leaflet React bindings: MapContainer is renamed to avoid clashing with our component name
import {
  MapContainer as LeafletMapContainer,
  Marker,
  TileLayer,
  Tooltip,
  useMap,
} from "react-leaflet";
// Leaflet core – used to create custom div-based markers (L.divIcon)
import L from "leaflet";
// Leaflet’s default map and marker styles (required for correct rendering)
import "leaflet/dist/leaflet.css";
// Mock city list – we look up city details by id for tooltips
import { cities } from "../data/mockCities";
// Type for a single city (used by getCityById)
import type { City } from "../types/cities";

// ---------------------------------------------------------------------------
// Step 1: Custom circle markers to match dashboard theme (dark + green/red accents).
// No external images – simple divs so they always show and fit the theme.
// ---------------------------------------------------------------------------
// Green = positive trend, red = negative (aligned with dashboard card trend colors)
const MARKER_COLORS = ["#22c55e", "#ef4444"] as const;

/**
 * Creates a Leaflet icon that is a colored circle (no image URL).
 * Uses L.divIcon so the marker is a styled div – reliable and themeable.
 */
function createCircleIcon(color: string) {
  return L.divIcon({
    // CSS class for optional global overrides
    className: "city-marker",
    // Inline HTML for the circle: 20px, rounded, colored fill, white border, shadow
    html: `<div style="
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: ${color};
      border: 3px solid rgba(255,255,255,0.9);
      box-shadow: 0 2px 6px rgba(0,0,0,0.4);
    "></div>`,
    // Size of the icon in pixels [width, height]
    iconSize: [20, 20],
    // Point that is “anchored” to the lat/lng (center of 20x20 = 10, 10)
    iconAnchor: [10, 10],
  });
}

// ---------------------------------------------------------------------------
// Step 2: Map city config – which cities appear on the map and their coordinates.
// We show at least 2 cities (requirement). Using first 2 from mock data.
// [lat, lng] for Mumbai and Delhi.
// ---------------------------------------------------------------------------
const MAP_CITIES: { id: number; position: [number, number] }[] = [
  { id: 1, position: [19.076, 72.8777] }, // Mumbai [lat, lng]
  { id: 2, position: [28.35, 77.12] },   // Delhi [lat, lng]
];

/** Returns the city object from mock data that has the given id, or undefined. */
function getCityById(id: number): City | undefined {
  return cities.find((c) => c.id === id);
}

// ---------------------------------------------------------------------------
// Step 3: Inner component that runs the initial zoom-in animation.
// useMap() gives us the Leaflet map instance once the map is ready.
// Must be rendered *inside* LeafletMapContainer to use useMap().
// ---------------------------------------------------------------------------
function InitialZoomAnimation() {
  // Hook that returns the Leaflet map instance (only valid inside LeafletMapContainer)
  const map = useMap();

  useEffect(() => {
    // Start zoomed out (zoom 3 = world view), then smoothly zoom in to level 4
    const startZoom = 3;
    const endZoom = 4;
    // Center of the map – roughly India so both Mumbai and Delhi are visible
    const center: [number, number] = [22.5, 75];

    // Set initial view immediately (no animation)
    map.setView(center, startZoom);

    // After 300ms, run a smooth “fly” animation to zoom in (so user sees the effect)
    const timer = setTimeout(() => {
      map.flyTo(center, endZoom, {
        duration: 1.5,      // Animation length in seconds
        easeLinearity: 0.25, // Easing for the fly (lower = more ease-in-out)
      });
    }, 300);

    // Cleanup: cancel the timeout if the component unmounts before it fires
    return () => clearTimeout(timer);
  }, [map]); // Only run when map instance is available

  // This component doesn’t render any DOM – it only runs the effect
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
  position: [number, number]; // [lat, lng]
  cityId: number;
  markerColor: string;
}) {
  // Look up full city data for tooltip content
  const city = getCityById(cityId);
  if (!city) return null;

  // Metrics to show in the tooltip (from mock city data)
  const sales = city.metrics.sales_forecast;
  const efficiency = city.metrics.efficiency_rate;

  return (
    <Marker position={position} icon={createCircleIcon(markerColor)}>
      {/* Tooltip appears on hover; styled to match dashboard (dark bg, light text) */}
      <Tooltip
        direction="top"       // Tooltip opens above the marker
        offset={[0, -12]}     // Slight vertical offset so it doesn’t cover the marker
        className="map-tooltip-theme"
        opacity={1}           // Fully opaque (overrides Leaflet’s default transparent tooltip)
      >
        <div
          style={{
            padding: "8px 10px",
            minWidth: 160,
            background: "rgba(11, 30, 38, 0.95)", // Dark teal to match dashboard
            color: "#e2e8f0",
            borderRadius: 8,
            border: "1px solid rgba(255,255,255,0.2)",
            fontSize: 13,
          }}
        >
          {/* City name in bold */}
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

// ---------------------------------------------------------------------------
// Step 5: Main map. z-index 0 so map receives pointer events; overlay uses pointer-events: none on empty areas.
// ---------------------------------------------------------------------------
const MapContainer = () => {
  return (
    // Wrapper fills the parent (absolute, full size) and sits at z-index 0 so overlays can sit on top
    <div
      style={{
        position: "absolute",
        inset: 0,           // shorthand for top/right/bottom/left: 0
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    >
      <LeafletMapContainer
        center={[20.59, 78.96]}  // Initial map center (roughly India)
        zoom={3}              // Initial zoom level (world view; animation will zoom to 4)
        style={{ height: "100%", width: "100%", background: "#0B1E26" }}
        scrollWheelZoom={true}   // Allow zoom with mouse wheel
        zoomControl={false}      // Hide default +/- buttons (cleaner UI)
        attributionControl={false} // Hide “Powered by” text
        doubleClickZoom={true}   // Double-click to zoom in
        dragging={true}         // Click-and-drag to pan
      >
        {/* CartoDB dark theme tiles – {s},{z},{x},{y} are replaced by Leaflet for each tile request */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          subdomains="abcd"  // Requests go to a,b,c,d subdomains for parallel loading
          maxZoom={19}
        />
        {/* Runs the initial fly-to zoom animation once the map is ready */}
        <InitialZoomAnimation />
        {/* Render one CityMarker per city in MAP_CITIES; cycle through MARKER_COLORS by index */}
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
