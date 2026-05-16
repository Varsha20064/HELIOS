import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, TrendingUp, TrendingDown, DollarSign, Sparkles, Loader2, 
  GraduationCap, Cpu, Palmtree, Rocket, Landmark 
} from "lucide-react";
import { CountryData } from "@/data/countries";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface CountryPanelProps {
  country: CountryData | null;
  onClose: () => void;
}

const CountryPanel: React.FC<CountryPanelProps> = ({ country, onClose }) => {
  const [amount, setAmount] = useState<string>("1");
  const [converted, setConverted] = useState<number>(0);
  const [isGeneratingAI, setIsGeneratingAI] = useState(false);
  const [aiBrief, setAiBrief] = useState<string | null>(null);

  useEffect(() => {
    if (country) {
      const val = parseFloat(amount);
      if (!isNaN(val)) {
        setConverted(val * country.economy.rateVsUsd);
      }
      setAiBrief(null); // Reset AI brief when country changes
    }
  }, [country, amount]);

  const handleGenerateAI = () => {
    if (!country) return;
    setIsGeneratingAI(true);
    // Mock AI generation delay
    setTimeout(() => {
      const brief = `Strategic Intelligence Report [${country.id}]:
Economy: ${country.economy.gdp} market cap with ${country.economy.stockTrend === 'up' ? 'positive' : 'volatile'} trajectory.
Education: High focus on ${country.education.policyFocus} ensuring long-term human capital growth.
Tech: Leading in ${country.technology.focusArea} with significant R&D throughput.
Insight: ${country.name} represents a key ${country.startupEcosystem.unicorns > 20 ? 'tier-1' : 'high-potential'} node in the global nexus.`;
      setAiBrief(brief);
      setIsGeneratingAI(false);
    }, 1500);
  };

  if (!country) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed right-0 top-0 h-full w-full md:w-[480px] bg-white/95 border-l border-slate-200 shadow-2xl z-40 overflow-y-auto backdrop-blur-2xl"
      >
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-4xl">{country.flag}</span>
              <h2 className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-500 uppercase">
                {country.name}
              </h2>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose} className="hover:bg-slate-100 rounded-full text-slate-400">
              <X className="w-6 h-6" />
            </Button>
          </div>

          <p className="text-slate-500 text-sm leading-relaxed font-light">
            {country.description}
          </p>

          <Tabs defaultValue="economy" className="w-full">
            <TabsList className="w-full grid grid-cols-5 h-auto p-1 bg-slate-100/50 rounded-xl mb-6">
              <TabsTrigger value="economy" className="py-2.5 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">
                <Landmark className="w-4 h-4" />
              </TabsTrigger>
              <TabsTrigger value="education" className="py-2.5 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">
                <GraduationCap className="w-4 h-4" />
              </TabsTrigger>
              <TabsTrigger value="technology" className="py-2.5 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">
                <Cpu className="w-4 h-4" />
              </TabsTrigger>
              <TabsTrigger value="tourism" className="py-2.5 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">
                <Palmtree className="w-4 h-4" />
              </TabsTrigger>
              <TabsTrigger value="startup" className="py-2.5 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">
                <Rocket className="w-4 h-4" />
              </TabsTrigger>
            </TabsList>

            <TabsContent value="economy" className="space-y-4 focus-visible:outline-none">
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-slate-50/50 border-slate-100 shadow-none">
                  <CardContent className="pt-4 px-4 pb-3">
                    <div className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">GDP (Nominal)</div>
                    <div className="text-lg font-bold text-slate-900">{country.economy.gdp}</div>
                  </CardContent>
                </Card>
                <Card className="bg-slate-50/50 border-slate-100 shadow-none">
                  <CardContent className="pt-4 px-4 pb-3">
                    <div className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">Index: {country.economy.stockIndex}</div>
                    <div className="flex items-center gap-2">
                      <div className="text-lg font-bold text-slate-900">{country.economy.stockValue}</div>
                      {country.economy.stockTrend === 'up' ? <TrendingUp className="w-3 h-3 text-green-500" /> : <TrendingDown className="w-3 h-3 text-red-500" />}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-slate-50 border-slate-100 shadow-sm overflow-hidden">
                <div className="bg-slate-900 p-3 flex justify-between items-center">
                   <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Currency Converter</div>
                   <DollarSign className="w-3 h-3 text-slate-400" />
                </div>
                <CardContent className="space-y-4 pt-4">
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-xl font-semibold text-slate-900">{country.economy.currencyName}</div>
                      <div className="text-sm text-slate-400">1 USD = {country.economy.currencySymbol}{country.economy.rateVsUsd}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-mono text-slate-900">
                        {country.economy.currencySymbol}{converted.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </div>
                      <div className="text-[10px] uppercase text-slate-400 font-medium">Converted</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="Amount in USD"
                      className="bg-white border-slate-200 focus:ring-slate-400 text-slate-900 h-9"
                    />
                    <span className="text-xs font-mono text-slate-400">USD</span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="education" className="space-y-4 focus-visible:outline-none">
              <Card className="bg-slate-50/50 border-slate-100 shadow-none">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex justify-between items-start border-b border-slate-100 pb-3">
                    <div className="text-xs font-medium text-slate-500">Literacy Rate</div>
                    <div className="text-sm font-bold text-slate-900">{country.education.literacyRate}</div>
                  </div>
                  <div className="flex justify-between items-start border-b border-slate-100 pb-3">
                    <div className="text-xs font-medium text-slate-500">Top Institution</div>
                    <div className="text-sm font-bold text-slate-900 text-right">{country.education.topUniversity}</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs font-medium text-slate-500">Strategic Policy Focus</div>
                    <div className="p-3 bg-white border border-slate-100 rounded-lg text-sm text-slate-700 italic">
                      "{country.education.policyFocus}"
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="technology" className="space-y-4 focus-visible:outline-none">
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-slate-50/50 border-slate-100 shadow-none">
                  <CardContent className="pt-4 px-4 pb-3">
                    <div className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">R&D Intensity</div>
                    <div className="text-lg font-bold text-slate-900">{country.technology.rdSpending}</div>
                  </CardContent>
                </Card>
                <Card className="bg-slate-50/50 border-slate-100 shadow-none">
                  <CardContent className="pt-4 px-4 pb-3">
                    <div className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">Tech Exports</div>
                    <div className="text-lg font-bold text-slate-900">{country.technology.techExports}</div>
                  </CardContent>
                </Card>
              </div>
              <Card className="bg-slate-900 text-white border-none shadow-lg">
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="p-3 bg-white/10 rounded-full">
                    <Cpu className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-slate-400">Primary Tech Node</div>
                    <div className="text-lg font-bold tracking-tight">{country.technology.focusArea}</div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tourism" className="space-y-4 focus-visible:outline-none">
              <Card className="bg-slate-50 border-slate-100 shadow-sm overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-2 border-b border-slate-100">
                    <div className="p-4 border-r border-slate-100">
                      <div className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">Annual Visitors</div>
                      <div className="text-xl font-bold text-slate-900">{country.tourism.annualVisitors}</div>
                    </div>
                    <div className="p-4">
                      <div className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">Sector Revenue</div>
                      <div className="text-xl font-bold text-slate-900">{country.tourism.revenue}</div>
                    </div>
                  </div>
                  <div className="p-4 bg-slate-50/50">
                    <div className="text-[10px] uppercase tracking-widest text-slate-400 mb-2">Prime Strategic Location</div>
                    <div className="flex items-center gap-3 p-3 bg-white border border-slate-100 rounded-xl">
                      <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                        <Palmtree className="w-5 h-5 text-slate-400" />
                      </div>
                      <div className="text-sm font-semibold text-slate-800">{country.tourism.topDestination}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="startup" className="space-y-4 focus-visible:outline-none">
              <div className="flex items-center gap-4 mb-2">
                <div className="flex-1 p-4 bg-blue-50 border border-blue-100 rounded-2xl text-center">
                  <div className="text-[10px] uppercase tracking-widest text-blue-500 font-bold mb-1">Unicorn Count</div>
                  <div className="text-3xl font-black text-blue-900">{country.startupEcosystem.unicorns}</div>
                </div>
                <div className="flex-1 p-4 bg-slate-900 rounded-2xl text-center">
                  <div className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">Primary Hub</div>
                  <div className="text-base font-bold text-white leading-tight">{country.startupEcosystem.mainHub}</div>
                </div>
              </div>
              <Card className="bg-slate-50/50 border-slate-100 shadow-none border-dashed">
                <CardHeader className="py-3 px-4">
                  <CardTitle className="text-[10px] uppercase tracking-widest text-slate-400">Policy Incentive</CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-4">
                  <div className="flex items-center gap-3">
                    <Rocket className="w-5 h-5 text-orange-500" />
                    <div className="text-sm font-medium text-slate-700">{country.startupEcosystem.keyIncentive}</div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* AI Insight Section */}
          <div className="pt-2">
            {!aiBrief ? (
              <Button
                onClick={handleGenerateAI}
                disabled={isGeneratingAI}
                className="w-full bg-slate-900 text-white hover:bg-slate-800 font-bold tracking-tight uppercase py-6 rounded-xl group relative overflow-hidden transition-all"
              >
                {isGeneratingAI ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 mr-2 text-blue-400" />
                    Synthesize Tactical Brief
                  </>
                )}
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Button>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-5 bg-slate-900 text-white rounded-2xl space-y-3 relative overflow-hidden shadow-xl"
              >
                <div className="absolute top-0 right-0 p-3 opacity-20">
                  <Sparkles className="w-8 h-8 text-blue-400" />
                </div>
                <div className="flex items-center gap-2 mb-1">
                   <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                   <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">AI Tactical Output</h4>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed font-mono whitespace-pre-wrap border-l-2 border-blue-500 pl-4 py-1">
                  {aiBrief}
                </p>
                <div className="text-[8px] text-slate-500 text-right font-mono">ID: {Math.random().toString(36).substring(7).toUpperCase()} // DATA_VERIFIED</div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CountryPanel;
