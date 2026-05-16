import { motion } from "framer-motion";
import { Link } from "react-router";
import { Globe, Shield, Zap, BarChart3, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Landing = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-oppo-sans-4 overflow-x-hidden relative">
      {/* Background illumination gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,#e2e8f0_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-[0.2] pointer-events-none" />
      <div className="scan-line pointer-events-none opacity-10" />
      
      {/* Nav */}
      <nav className="fixed top-0 left-0 w-full p-6 z-50 flex justify-between items-center backdrop-blur-md bg-white/30 border-b border-slate-200/50">
        <div className="flex items-center gap-2">
          <Globe className="w-6 h-6 text-slate-900" />
          <span className="text-xl font-bold tracking-tighter uppercase">HELIOS</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500 uppercase tracking-widest">
          <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
          <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
          <Link to="/app">
            <Button variant="default" className="rounded-full px-6">Launch App</Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-500 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-500"></span>
          </span>
          V3.0 Orbital Nexus is Live
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1]"
        >
          Orbital Intelligence <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500">
            For A Connected World
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-500 max-w-2xl mb-12 leading-relaxed"
        >
          HELIOS redefines global strategic awareness. We synthesize satellite telemetry, 
          economic indicators, and geopolitical data into a seamless 3D orbital interface 
          for decisive action.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center gap-8 mb-20 w-full"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <Link to="/app">
              <Button size="lg" className="rounded-full px-10 py-7 text-lg group">
                Explore Global Nexus
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="#features">
              <Button variant="outline" size="lg" className="rounded-full px-10 py-7 text-lg bg-transparent border-slate-300">
                View Enterprise Specs
              </Button>
            </a>
          </div>

          {/* Interactive Coloured Graphic */}
          <div className="relative w-full max-w-lg h-12 flex items-center justify-center gap-1.5 overflow-hidden">
             {[...Array(12)].map((_, i) => (
               <motion.div
                 key={i}
                 initial={{ height: 4, opacity: 0.3 }}
                 animate={{ 
                   height: [4, 24, 8, 32, 4],
                   opacity: [0.3, 0.8, 0.4, 1, 0.3]
                 }}
                 transition={{
                   duration: 2 + Math.random() * 2,
                   repeat: Infinity,
                   ease: "easeInOut",
                   delay: i * 0.1
                 }}
                 className="w-1.5 rounded-full"
                 style={{ 
                   backgroundColor: i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#10b981' : '#f59e0b',
                   boxShadow: `0 0 15px ${i % 3 === 0 ? '#3b82f644' : i % 3 === 1 ? '#10b98144' : '#f59e0b44'}`
                 }}
               />
             ))}
             <div className="absolute inset-0 bg-gradient-to-r from-[#f8fafc] via-transparent to-[#f8fafc] pointer-events-none" />
          </div>
        </motion.div>

        {/* Hero Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden border border-slate-200 shadow-[0_0_50px_rgba(0,0,0,0.05)] bg-white/50 backdrop-blur-sm p-4"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0.03)_0%,transparent_50%)]" />
          <div className="w-full h-full bg-slate-50 rounded-lg flex items-center justify-center overflow-hidden">
             {/* Mock visual of the globe app */}
             <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute w-[400px] h-[400px] rounded-full bg-blue-100 blur-[80px] opacity-50" />
                <Globe className="w-64 h-64 text-slate-200/50 animate-[spin_20s_linear_infinite]" strokeWidth={0.5} />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                   {/* Spinning HUD Rings */}
                   <div className="absolute w-[320px] h-[320px] rounded-full border border-blue-500/20 animate-[spin_10s_linear_infinite]" />
                   <div className="absolute w-[360px] h-[360px] rounded-full border border-dashed border-slate-300/30 animate-[spin_20s_linear_infinite_reverse]" />
                   <div className="absolute w-[280px] h-[280px] rounded-full border border-slate-200 animate-[ping_4s_ease-in-out_infinite] opacity-20" />
                   
                   {/* Tactical HUD Markers */}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                      {[0, 90, 180, 270].map((deg) => (
                        <div 
                          key={deg} 
                          className="absolute top-1/2 left-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-slate-300/50 to-transparent origin-left"
                          style={{ transform: `rotate(${deg}deg) translateX(140px)` }}
                        />
                      ))}
                   </div>

                   {/* Floating Data Nodes */}
                   {[...Array(6)].map((_, i) => (
                     <motion.div
                       key={i}
                       animate={{ 
                         y: [0, -10, 0],
                         opacity: [0.3, 0.6, 0.3]
                       }}
                       transition={{ 
                         duration: 3 + i, 
                         repeat: Infinity,
                         delay: i * 0.5
                       }}
                       className="absolute flex items-center gap-2 px-2 py-1 bg-white/40 backdrop-blur-md border border-slate-200 rounded-md shadow-sm"
                       style={{ 
                         top: `${20 + i * 12}%`, 
                         left: i % 2 === 0 ? '15%' : '75%' 
                       }}
                     >
                       <div className="w-1 h-1 rounded-full bg-blue-500 animate-pulse" />
                       <span className="text-[8px] font-mono font-bold text-slate-500">NODE_{1024 + i}</span>
                     </motion.div>
                   ))}
                </div>
             </div>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-slate-400 mb-4">Core Capabilities</h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight">The Future of Strategic Awareness</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Shield,
                title: "Geopolitical Resilience",
                desc: "Monitor shifting international policies and security frameworks with real-time risk assessment."
              },
              {
                icon: BarChart3,
                title: "Economic Intelligence",
                desc: "Synthesize global market indices and currency fluctuations into actionable visual intelligence."
              },
              {
                icon: Zap,
                title: "AI Synthesis",
                desc: "Automated country briefings powered by our proprietary insight models for rapid decision making."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group"
              >
                <div className="mb-6 p-4 w-fit rounded-2xl bg-slate-50 border border-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section id="about" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] rounded-full bg-blue-50/50 blur-[120px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-slate-400 mb-4">Orbital Intelligence</h2>
              <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">Seeing the World from Every Angle</h3>
              <p className="text-lg text-slate-500 leading-relaxed mb-8">
                Orbital Intelligence is not just about data points; it's about the connections between them. 
                By positioning information in a 3D spatial context, HELIOS allows you to visualize the 
                ripples of impact across borders, oceans, and markets.
              </p>
              <ul className="space-y-4">
                {["Spatial Data Visualization", "Real-time Telemetry Synthesis", "Predictive Geopolitical Modeling"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-slate-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-square">
               <div className="absolute inset-0 bg-white rounded-3xl shadow-xl border border-slate-200 p-8 flex flex-col justify-center items-center">
                  <div className="text-9xl font-bold text-slate-100 absolute select-none pointer-events-none uppercase">Nexus</div>
                  <Globe className="w-48 h-48 text-slate-900 relative z-10" />
                  <div className="mt-8 text-center relative z-10">
                    <p className="text-xs font-mono text-slate-400 uppercase tracking-widest">Active Satellite Link</p>
                    <p className="text-xl font-bold uppercase tracking-[0.2em] mt-2">HELIOS CORE</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5" />
            <span className="font-bold tracking-tighter uppercase">HELIOS</span>
          </div>
          <p className="text-sm text-slate-400 uppercase tracking-widest font-mono">
            © 2026 Nexus Core Systems // Tactical Awareness Unit
          </p>
          <div className="flex gap-6 text-sm font-bold uppercase tracking-widest text-slate-500">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms</a>
            <a href="#" className="hover:text-slate-900 transition-colors">API</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
