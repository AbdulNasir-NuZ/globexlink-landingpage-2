"use client"
import dynamic from "next/dynamic"

const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
  ssr: false,
})

export default function StudentGlobe() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#0a0a0a", // dark globe
    showAtmosphere: true,
    atmosphereColor: "#14b8a6", // teal atmosphere
    atmosphereAltitude: 0.15,
    emissive: "#000000",
    emissiveIntensity: 0,
    shininess: 0.1,
    polygonColor: "rgba(20,184,166,0.25)", // teal borders
    ambientLight: "#2e2e2e",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1200,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 41.0082, lng: 28.9784 }, // Istanbul
    autoRotate: true,
    autoRotateSpeed: 0.5,
  }

  const colors = ["#14b8a6", "#0ea5a5", "#eab308"] // teal shades + gold

  // Strategic Trade Networks arcs
  const studentConnections = [
    // Turkey ↔ MENA/Africa
    {
      order: 1,
      startLat: 41.0082,
      startLng: 28.9784,
      endLat: 24.7136,
      endLng: 46.6753,
      arcAlt: 0.35,
      color: colors[0],
    }, // Istanbul -> Riyadh
    { order: 1, startLat: 41.0082, startLng: 28.9784, endLat: 30.0444, endLng: 31.2357, arcAlt: 0.3, color: colors[1] }, // Cairo
    { order: 1, startLat: 41.0082, startLng: 28.9784, endLat: 6.5244, endLng: 3.3792, arcAlt: 0.45, color: colors[2] }, // Lagos

    // China ↔ Africa
    {
      order: 2,
      startLat: 39.9042,
      startLng: 116.4074,
      endLat: -1.2921,
      endLng: 36.8219,
      arcAlt: 0.4,
      color: colors[0],
    }, // Beijing -> Nairobi
    {
      order: 2,
      startLat: 31.2304,
      startLng: 121.4737,
      endLat: -26.2041,
      endLng: 28.0473,
      arcAlt: 0.35,
      color: colors[1],
    }, // Shanghai -> Johannesburg

    // India ↔ Africa
    { order: 3, startLat: 28.6139, startLng: 77.209, endLat: 9.0054, endLng: 38.7636, arcAlt: 0.35, color: colors[2] }, // Delhi -> Addis Ababa
    { order: 3, startLat: 19.076, startLng: 72.8777, endLat: 6.4654, endLng: 3.4064, arcAlt: 0.35, color: colors[0] }, // Mumbai -> Lagos

    // Korea ↔ Global
    {
      order: 4,
      startLat: 37.5665,
      startLng: 126.978,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.5,
      color: colors[1],
    }, // Seoul -> LA
    { order: 4, startLat: 37.5665, startLng: 126.978, endLat: 52.52, endLng: 13.405, arcAlt: 0.4, color: colors[2] }, // Seoul -> Berlin

    // Argentina ↔ MENA/Africa
    {
      order: 5,
      startLat: -34.6037,
      startLng: -58.3816,
      endLat: 25.2048,
      endLng: 55.2708,
      arcAlt: 0.45,
      color: colors[0],
    }, // Buenos Aires -> Dubai
    {
      order: 5,
      startLat: -34.6037,
      startLng: -58.3816,
      endLat: -1.2921,
      endLng: 36.8219,
      arcAlt: 0.45,
      color: colors[1],
    }, // BA -> Nairobi
  ]

  return (
    <div className="h-full w-full relative globe-float globe-rotate pointer-events-none">
      <World data={studentConnections} globeConfig={globeConfig} />
    </div>
  )
}
