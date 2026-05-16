import { useState, useCallback } from "react";
import WorldMap from "@/components/WorldMap";
import CountryPanel from "@/components/CountryPanel";
import { countryData } from "@/data/countries";
import { useSpotlight } from "@/hooks/useSpotlight";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ArrowLeft, Activity, Shield, Zap, Database } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  useSpotlight();

  const handleCountryClick = useCallback((geo: any) => {
    // Check various property names that might exist in different TopoJSON files
    const name = geo.properties.name || geo.properties.NAME || geo.properties.name_en;
    const iso_a3 = geo.properties.ISO_A3 || geo.properties.iso_a3;
    const numericId = String(geo.id).padStart(3, '0');
    
    console.log("Clicked:", name, iso_a3, numericId);

    // Check if we have data for this country
    const match = Object.values(countryData).find(
      (c) => 
        (c.name && name && c.name.toLowerCase() === name.toLowerCase()) || 
        (c.id && iso_a3 && c.id.toLowerCase() === String(iso_a3).toLowerCase()) ||
        (c.numericId && numericId && c.numericId === numericId) ||
        (c.alternateNames && name && c.alternateNames.some(alt => alt.toLowerCase() === name.toLowerCase()))
    );
    
    if (match) {
      setSelectedCountry(match.id);
    } else {
      console.log("No data for country:", name, iso_a3, numericId);
    }
  }, []);

  const currentCountryData = selectedCountry ? countryData[selectedCountry] : null;

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 relative flex flex-col font-oppo-sans-4 selection:bg-slate-900 selection:text-white overflow-hidden">
      {/* Background illumination gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#e2e8f0_0%,#f1f5f9_40%,#f8fafc_80%)] pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-[0.4] pointer-events-none" />
      <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(59,130,246,0.02)_0%,transparent_25%,rgba(59,130,246,0.02)_50%,transparent_75%,rgba(59,130,246,0.02)_100%)] animate-[spin_120s_linear_infinite] pointer-events-none" />
      <div className="scan-line pointer-events-none opacity-20" />
      {/* Spotlight effect overlay */}
      <div className="spotlight-overlay" />
      {/* Header */}
      <header className="fixed top-0 left-0 w-full p-6 md:px-12 md:py-8 z-30 pointer-events-none flex justify-between items-start">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 md:gap-6 pointer-events-auto"
        >
          <Link to="/">
             <Button variant="ghost" size="icon" className="rounded-full bg-white/50 shadow-sm hover:bg-white transition-colors border-dotted border-[#e2e9f0] border-[1px] border-[#e2e6f0]">
                <ArrowLeft className="w-4 h-4" />
             </Button>
          </Link>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/50 backdrop-blur-xl rounded-full shadow-lg border-solid border-[#5c88c2] border-[1px] border-[#337cdc]">
              <Globe className="w-5 h-5 text-slate-900" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold tracking-[0.2em] uppercase bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-500">
                HELIOS
              </h1>
              <p className="text-[8px] md:text-[9px] tracking-[0.3em] uppercase text-slate-400 font-mono mt-0.5">
                Orbital Intelligence // Nexus 3.0
              </p>
            </div>
          </div>
        </motion.div>

        <div className="hidden md:flex flex-col items-end gap-1 text-[9px] font-mono text-slate-400 tracking-widest uppercase">
          <div className="flex items-center gap-2 px-3 py-1 bg-white/50 border border-slate-200 rounded-full shadow-sm">
             <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
             <span>System Status: Optimal</span>
          </div>
          <span className="mt-2">Lat: 28.6139° N // Long: 77.2090° E</span>
          <span>Feed: Encrypted_Link_Alpha</span>
        </div>
      </header>
      {/* Main Content */}
      <main className="flex-1 relative flex flex-col items-center justify-center p-4 pt-24 bg-[#ae4d4d00] bg-none">
        <div className="w-full h-full max-w-6xl aspect-video md:aspect-[21/9] relative z-20">
          <WorldMap 
            onCountryClick={handleCountryClick} 
            selectedCountryId={selectedCountry}
          />
        </div>

        {/* Glassmorphism Floating Cards */}
        <div className="absolute inset-0 pointer-events-none z-30">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute top-1/3 left-12 w-48 p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl pointer-events-auto group hover:bg-white/10 transition-colors"
          >
            <div className="flex items-center gap-2 mb-2">
              <Activity className="w-4 h-4 text-blue-400" />
              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Core Flux</span>
            </div>
            <div className="text-2xl font-bold text-white mb-1">2,482<span className="text-xs text-blue-400 ml-1">THz</span></div>
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                animate={{ width: ["20%", "85%", "20%"] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="h-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" 
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute top-1/4 right-12 w-48 p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl pointer-events-auto group hover:bg-white/10 transition-colors"
          >
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Encryption</span>
            </div>
            <div className="text-2xl font-bold text-white mb-1">AES-4096</div>
            <div className="text-[9px] text-emerald-400 font-mono flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-emerald-400 animate-ping" />
              STATUS: SECURE_LINK
            </div>
          </motion.div>
        </div>

        {/* Animated Metrics below globe */}
        <div className="mt-8 grid grid-cols-4 gap-12 text-center relative z-20">
           {[
             { label: 'Global Satellites', val: '4,812', icon: <Globe className="w-3 h-3" /> },
             { label: 'Active Uplinks', val: '1.2M', icon: <Zap className="w-3 h-3" /> },
             { label: 'Intelligence Feed', val: 'LIVE', icon: <Activity className="w-3 h-3" /> },
             { label: 'Secure Storage', val: '4.2PB', icon: <Database className="w-3 h-3" /> },
           ].map((metric, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 * i }}
               className="flex flex-col items-center gap-1"
             >
               <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1">
                 {metric.icon}
                 {metric.label}
               </div>
               <div className="text-xl font-black text-slate-900 tracking-tighter">{metric.val}</div>
             </motion.div>
           ))}
        </div>
        
        {/* Selected Country Name Overlay */}
        <AnimatePresence>
          {selectedCountry && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10 text-center"
            >
              <h2 className="text-8xl md:text-[14rem] font-bold opacity-[0.06] uppercase tracking-tighter whitespace-nowrap select-none">
                {currentCountryData?.name}
              </h2>
              <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full opacity-30" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Selection Hint */}
        {!selectedCountry && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute bottom-24 left-1/2 -translate-x-1/2 text-slate-400 text-[10px] md:text-xs font-light tracking-[0.3em] uppercase animate-pulse pointer-events-none text-center"
          >
            Select a highlighted country to begin analysis
          </motion.div>
        )}
      </main>
      {/* Side Panel */}
      <CountryPanel 
        country={currentCountryData} 
        onClose={() => setSelectedCountry(null)} 
      />
      {/* Footer / Status Bar */}
      <footer className="fixed bottom-0 left-0 w-full p-6 z-30 pointer-events-none flex justify-between items-end">
        <div className="flex flex-col md:flex-row gap-4 md:gap-12 pointer-events-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-2 bg-white/40 backdrop-blur-md p-4 border border-slate-200/50 rounded-xl"
          >
            <div className="flex items-center gap-2 text-[10px] font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              Strategic Nodes // AI Active
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-[9px] font-mono text-slate-500 tracking-tight uppercase">
              {Object.values(countryData).map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCountry(c.id)}
                  className="flex items-center gap-2 hover:text-slate-900 transition-colors text-left group"
                >
                  <span className="opacity-50 group-hover:opacity-100 transition-opacity">[{c.id}]</span>
                  <span className="truncate max-w-[80px]">{c.name}</span>
                </button>
              ))}
            </div>
          </motion.div>

          <div className="flex gap-4 md:gap-8 text-[8px] md:text-[9px] font-mono text-slate-400 tracking-tighter uppercase self-end pb-2">
            <div className="flex flex-col">
              <span className="text-slate-500">Market Indices</span>
              <span className="whitespace-nowrap">NIFTY: +1.24% // SPX: +0.85% // NIKKEI: -0.42%</span>
            </div>
            <div className="hidden md:flex flex-col">
              <span className="text-slate-500">Global Coverage</span>
              <span>10 Advanced Nexus Nodes Active</span>
            </div>
          </div>
        </div>
        
        <div className="text-[8px] md:text-[10px] text-slate-400 font-mono self-end pb-2">
          © 2026 NEXUS CORE SYSTEMS
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
