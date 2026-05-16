import React, { useState, useRef, useEffect, useMemo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule,
  Marker,
} from "react-simple-maps";
import { motion, AnimatePresence } from "framer-motion";
import { countryData } from "@/data/countries";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Tactical intelligence points for heatmap and nodes
const INTEL_POINTS = [
  { id: 'USA-WEST', coord: [-122, 37], type: 'tech', color: '#06b6d4', size: 8 },
  { id: 'USA-EAST', coord: [-74, 40], type: 'hub', color: '#ffffff', size: 4 },
  { id: 'IND-SOUTH', coord: [77, 12], type: 'tech', color: '#06b6d4', size: 6 },
  { id: 'JPN-CORE', coord: [139, 35], type: 'tech', color: '#06b6d4', size: 8 },
  { id: 'DEU-CORE', coord: [13, 52], type: 'hub', color: '#ffffff', size: 4 },
  { id: 'BRA-SOUTH', coord: [-46, -23], type: 'emerging', color: '#f97316', size: 6 },
  { id: 'CHN-EAST', coord: [121, 31], type: 'tech', color: '#06b6d4', size: 8 },
  { id: 'AUS-EAST', coord: [151, -33], type: 'hub', color: '#ffffff', size: 4 },
  { id: 'SEA-ALERT', coord: [110, 15], type: 'risk', color: '#ef4444', size: 10, pulsing: true },
];

interface WorldMapProps {
  onCountryClick: (geo: any) => void;
  selectedCountryId: string | null;
}

const WorldMap: React.FC<WorldMapProps> = ({ onCountryClick, selectedCountryId }) => {
  const [rotation, setRotation] = useState<[number, number, number]>([0, -20, 0]);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<{ x: number, y: number } | null>(null);
  const [startRotation, setStartRotation] = useState<[number, number, number]>([0, -20, 0]);
  const [hasMoved, setHasMoved] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Holographic Data Metrics for Active Nodes
  const nodeMetrics = useMemo(() => [
    { id: 'USA', val: '98.2%', label: 'AI_LINK' },
    { id: 'IND', val: '0.04ms', label: 'LATENCY' },
    { id: 'JPN', val: '8.4TB/s', label: 'BANDWIDTH' },
    { id: 'DEU', val: 'SAFE', label: 'ENCRYPT' },
    { id: 'CHN', val: 'MAX', label: 'THROUGHPUT' },
  ], []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setHasMoved(false);
    setDragStart({ x: e.clientX, y: e.clientY });
    setStartRotation(rotation);
  };

  // Auto-rotation effect
  useEffect(() => {
    let animationId: number;
    const rotate = () => {
      if (!isDragging) {
        setRotation(prev => [prev[0] + 0.1, prev[1], prev[2]]);
      }
      animationId = requestAnimationFrame(rotate);
    };
    
    animationId = requestAnimationFrame(rotate);
    return () => cancelAnimationFrame(animationId);
  }, [isDragging]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !dragStart) return;
      
      const sensitivity = 0.5;
      const dx = e.clientX - dragStart.x;
      const dy = e.clientY - dragStart.y;
      
      if (Math.abs(dx) > 2 || Math.abs(dy) > 2) {
        setHasMoved(true);
      }
      
      setRotation([
        startRotation[0] + dx * sensitivity,
        startRotation[1] - dy * sensitivity,
        startRotation[2]
      ]);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setDragStart(null);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragStart, startRotation]);

  return (
    <div 
      ref={containerRef}
      className="w-full h-full flex items-center justify-center bg-transparent overflow-hidden relative cursor-grab active:cursor-grabbing select-none"
      onMouseDown={handleMouseDown}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)] pointer-events-none" />
      
      {/* Decorative Glow behind the globe */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-400/10 blur-[100px] pointer-events-none animate-pulse" />
      <div className="absolute w-[560px] h-[560px] rounded-full bg-cyan-500/5 blur-[80px] pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full border border-cyan-500/10 shadow-[0_0_80px_rgba(6,182,212,0.1)] pointer-events-none" />

      {/* Atmospheric Outer Glow */}
      <div className="absolute w-[608px] h-[608px] rounded-full border border-cyan-400/20 opacity-40 blur-[3px] pointer-events-none z-10" />
      <div className="absolute w-[612px] h-[612px] rounded-full border-[0.5px] border-white/10 pointer-events-none z-10" />

      <ComposableMap
        projection="geoOrthographic"
        projectionConfig={{
          rotate: rotation,
          scale: 300,
        }}
        className="w-full h-full max-h-[85vh] drop-shadow-[0_0_30px_rgba(30,58,138,0.2)]"
      >
        <defs>
          <radialGradient id="oceanGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="70%" stopColor="#020617" />
            <stop offset="100%" stopColor="#000000" />
          </radialGradient>
          
          {/* Heatmap/Intel Gradients */}
          <radialGradient id="techGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="emergingGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fb923c" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#fb923c" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="riskGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f87171" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#f87171" stopOpacity="0" />
          </radialGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <Sphere stroke="#1e293b" strokeWidth={0.5} fill="url(#oceanGradient)" id="sphere" />
        <Graticule stroke="rgba(255,255,255,0.03)" strokeWidth={0.5} />
        
        <Geographies geography={geoUrl}>
          {({ geographies }: { geographies: any[] }) =>
            geographies.map((geo: any) => {
              const name = geo.properties.name || geo.properties.NAME;
              const iso_a3 = geo.properties.ISO_A3 || geo.properties.iso_a3;
              const numericId = String(geo.id).padStart(3, '0');
              
              const isSelected = selectedCountryId && (
                (selectedCountryId === iso_a3) || 
                (selectedCountryId === name) ||
                (countryData[selectedCountryId]?.numericId === numericId)
              );
              
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => {
                    if (!hasMoved) onCountryClick(geo);
                  }}
                  style={{
                    default: {
                      fill: isSelected ? "#15803d" : "#064e3b",
                      stroke: isSelected ? "#4ade80" : "#022c22",
                      strokeWidth: isSelected ? 0.8 : 0.3,
                      outline: "none",
                      transition: "all 0.3s ease",
                    },
                    hover: {
                      fill: "#10b981",
                      stroke: "#4ade80",
                      strokeWidth: 0.8,
                      outline: "none",
                      cursor: "pointer",
                      filter: "url(#glow)",
                      transition: "all 0.2s ease",
                    },
                    pressed: {
                      fill: "#059669",
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>

        {/* Dynamic Intel Heatmap Layer */}
        {INTEL_POINTS.map((point) => (
          <Marker key={point.id} coordinates={point.coord as [number, number]}>
            <circle
              r={point.size * 3}
              fill={
                point.type === 'tech' ? 'url(#techGlow)' : 
                point.type === 'emerging' ? 'url(#emergingGlow)' : 
                'url(#riskGlow)'
              }
              className="pointer-events-none mix-blend-screen"
            />
          </Marker>
        ))}

        {/* Tactical Markers for Active Nodes */}
        {Object.entries(countryData).map(([id, data]) => {
          // Approximate coordinates for markers
          const coords: Record<string, [number, number]> = {
            USA: [-100, 40], IND: [78, 20], JPN: [138, 36], DEU: [10, 51], 
            BRA: [-55, -10], GBR: [-2, 54], FRA: [2, 46], CHN: [105, 35], 
            AUS: [133, -25], CAN: [-106, 56]
          };
          
          if (!coords[id]) return null;
          
          return (
            <Marker key={id} coordinates={coords[id]}>
              <g className="pointer-events-none">
                <circle r={2} fill="#ffffff" />
                <circle r={4} fill="none" stroke="#ffffff" strokeWidth={0.5} opacity={0.5}>
                  <animate attributeName="r" from="2" to="8" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.5" to="0" dur="2s" repeatCount="indefinite" />
                </circle>
              </g>
              
              {/* Holographic Data Indicators */}
              {nodeMetrics.find(m => m.id === id) && (
                <g className="pointer-events-none translate-x-3 -translate-y-3">
                  <rect width="45" height="18" rx="4" fill="rgba(15,23,42,0.6)" className="backdrop-blur-md" />
                  <text x="4" y="8" className="text-[6px] fill-slate-400 font-mono font-bold">{nodeMetrics.find(m => m.id === id)?.label}</text>
                  <text x="4" y="15" className="text-[8px] fill-white font-mono font-bold tracking-tighter">{nodeMetrics.find(m => m.id === id)?.val}</text>
                  <line x1="0" y1="18" x2="-8" y2="26" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
                </g>
              )}
            </Marker>
          );
        })}

        {/* Specific Pulse for Selected Country */}
        <AnimatePresence>
          {selectedCountryId && (
            <Marker coordinates={({ USA: [-100, 40], IND: [78, 20], JPN: [138, 36], DEU: [10, 51], BRA: [-55, -10], GBR: [-2, 54], FRA: [2, 46], CHN: [105, 35], AUS: [133, -25], CAN: [-106, 56] } as any)[selectedCountryId]}>
               <motion.circle
                  initial={{ r: 0, opacity: 1 }}
                  animate={{ r: 50, opacity: 0 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "easeOut" }}
                  fill="none"
                  stroke="#22d3ee"
                  strokeWidth={2}
               />
            </Marker>
          )}
        </AnimatePresence>
      </ComposableMap>

      {/* HUD Graphics */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[620px] rounded-full border border-slate-200/20 animate-[spin_40s_linear_infinite]" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full border border-dashed border-slate-200/10 animate-[spin_60s_linear_infinite_reverse]" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border-[0.5px] border-slate-200/5 animate-[spin_100s_linear_infinite]" />
         
         {/* Orbital Line - Aqua Glow */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] border border-cyan-400/10 rounded-[100%] animate-[spin_30s_linear_infinite]" style={{ transform: 'translate(-50%, -50%) rotateX(75deg)' }} />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[350px] border border-white/5 rounded-[100%] animate-[spin_45s_linear_infinite_reverse]" style={{ transform: 'translate(-50%, -50%) rotateX(60deg) rotateY(15deg)' }} />

         {/* Moving Scan Wave */}
         <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-1.5 bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent animate-scan pointer-events-none blur-[1px]" />
         </div>

         {/* Floating particles around the globe */}
         {[...Array(40)].map((_, i) => (
           <motion.div
             key={i}
             initial={{ 
               x: Math.random() * 1000 - 500, 
               y: Math.random() * 1000 - 500,
               opacity: Math.random() * 0.4,
               scale: Math.random() * 0.5 + 0.5
             }}
             animate={{
               y: [null, Math.random() * 60 - 30],
               x: [null, Math.random() * 60 - 30],
               opacity: [0.1, 0.4, 0.1],
               scale: [1, 1.2, 1]
             }}
             transition={{
               duration: 4 + Math.random() * 6,
               repeat: Infinity,
               ease: "easeInOut"
             }}
             className="absolute top-1/2 left-1/2 w-1 h-1 bg-white/40 rounded-full blur-[0.5px]"
           />
         ))}
      </div>
      
      <div className="absolute bottom-8 left-8 text-slate-300 text-[10px] font-mono uppercase tracking-[0.4em] pointer-events-none">
        3D Orbital Nexus // Rotate 360° Enabled
      </div>

      <div className="absolute bottom-8 right-8 text-slate-300 text-[10px] font-mono uppercase tracking-[0.2em] pointer-events-none flex flex-col items-end">
        <span>λ: {rotation[0].toFixed(1)}°</span>
        <span>φ: {rotation[1].toFixed(1)}°</span>
      </div>
    </div>
  );
};

export default WorldMap;
