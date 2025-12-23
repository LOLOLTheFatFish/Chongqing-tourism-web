"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { 
  ArrowDown, 
  Train, 
  Smartphone, 
  Tent, 
  Cpu, 
  MapPin, 
  Zap, 
  BarChart3, 
  AlertTriangle, 
  TrendingUp, 
  ShieldAlert 
} from "lucide-react";

// --- Hero Section ---
const HeroSection = () => {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-cyber-bg z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,255,0.1),transparent_70%)]" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.1),transparent_60%)]" />
      </div>

      <div className="z-10 text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-bold tracking-tighter mb-4"
        >
          <span className="text-white">重庆</span>
          <span className="text-cyber-neon block md:inline md:ml-4 neon-text">赛博朋克</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl md:text-2xl text-gray-300 font-light tracking-wide"
        >
          从“山水之城”到国际消费中心的演进 (2010-2025)
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 z-10"
      >
        <div className="flex flex-col items-center gap-2 text-cyber-cyan">
          <span className="text-xs tracking-widest uppercase">Scroll to Explore</span>
          <ArrowDown className="w-6 h-6 cyan-text-glow" />
        </div>
      </motion.div>
    </section>
  );
};

// --- Timeline Section ---
const timelineData = [
  {
    phase: "Phase 1: 2010-2014",
    title: "基础设施驱动 (Infrastructure)",
    theme: "Concrete Foundation",
    color: "text-blue-400",
    icon: <Train className="w-8 h-8" />,
    content: "以高铁网络扩张为核心，构建“快旅漫游”体系。2010年接待游客1.61亿人次。",
    stats: "161M Tourists (2010)",
    details: ["高铁网络扩张", "交通基础设施建设", "传统山水旅游"]
  },
  {
    phase: "Phase 2: 2015-2019",
    title: "短视频爆发 (Viral Explosion)",
    theme: "Neon Awakening",
    color: "text-cyber-neon",
    icon: <Smartphone className="w-8 h-8" />,
    content: "短视频时代到来，李子坝轻轨、洪崖洞夜景成为现象级IP。2018年游客量达到5.97亿人次。",
    stats: "5.97B Tourists (2018)",
    details: ["李子坝轻轨穿楼", "洪崖洞赛博夜景", "网红城市标签确立"]
  },
  {
    phase: "Phase 3: 2020-2022",
    title: "内循环韧性 (Resilience)",
    theme: "Internal Circulation",
    color: "text-yellow-400",
    icon: <Tent className="w-8 h-8" />,
    content: "转向内循环，露营热、乡村旅游兴起。成渝双城经济圈建设加速。",
    stats: "Local Tourism Focus",
    details: ["露营经济", "乡村旅游", "成渝双城经济圈"]
  },
  {
    phase: "Phase 4: 2023-2025",
    title: "高质量发展 (High Quality)",
    theme: "Digital Governance",
    color: "text-cyber-cyan",
    icon: <Cpu className="w-8 h-8" />,
    content: "数字化治理与国际化回归。144小时过境免签，旅游大脑AI管理。",
    stats: "144h Visa-Free",
    details: ["旅游大脑 (AI)", "入境游复苏", "国际消费中心"]
  }
];

const TimelineCard = ({ data, index }: { data: typeof timelineData[0], index: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mb-24 flex w-full"
    >
      <div className="hidden md:flex flex-col items-center mr-8 pt-2">
        <div className={`w-4 h-4 rounded-full ${data.color.replace('text-', 'bg-')} shadow-[0_0_10px_currentColor]`} />
        <div className="w-0.5 h-full bg-gray-800 my-2" />
      </div>
      
      <div className="glass-card p-8 w-full md:max-w-2xl border-l-4 border-l-current" style={{ color: data.color === 'text-cyber-neon' ? '#ff00ff' : data.color === 'text-cyber-cyan' ? '#00ffff' : data.color === 'text-blue-400' ? '#60a5fa' : '#facc15' }}>
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-sm opacity-80">{data.phase}</span>
          {data.icon}
        </div>
        <h3 className={`text-2xl font-bold mb-2 text-white`}>{data.title}</h3>
        <p className="text-gray-300 mb-6 leading-relaxed">{data.content}</p>
        
        <div className="font-mono text-sm border-t border-gray-800 pt-4">
          <div className="mb-2 text-white font-bold">> KEY_DATA: <span className={data.color}>{data.stats}</span></div>
          <div className="flex flex-wrap gap-2">
            {data.details.map((detail, i) => (
              <span key={i} className="bg-white/5 px-2 py-1 rounded text-xs text-gray-400">#{detail}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TimelineSection = () => {
  return (
    <section className="py-20 px-4 md:px-10 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-16 text-center neon-text text-white">
        演进历程 <span className="text-sm font-mono text-cyber-cyan block mt-2">EVOLUTION_TIMELINE</span>
      </h2>
      <div className="relative">
        {timelineData.map((item, index) => (
          <TimelineCard key={index} data={item} index={index} />
        ))}
      </div>
    </section>
  );
};

// --- Comparison Section ---
const ComparisonSection = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-900/20 to-cyan-900/20" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
          双城对标 <span className="text-cyber-cyan">VS</span> 新加坡
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 relative">
          {/* Chongqing Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="p-8 md:pr-16 border-r-0 md:border-r border-gray-800 text-right"
          >
            <h3 className="text-3xl font-bold text-cyber-neon mb-4">重庆</h3>
            <div className="space-y-4">
              <div className="glass-card p-4">
                <h4 className="font-mono text-sm text-gray-400">AESTHETIC</h4>
                <p className="text-xl">Organic Chaos</p>
                <p className="text-sm text-gray-500">赛博朋克 / 野蛮生长</p>
              </div>
              <div className="glass-card p-4">
                <h4 className="font-mono text-sm text-gray-400">TOPOGRAPHY</h4>
                <p className="text-xl">8D Magic</p>
                <p className="text-sm text-gray-500">立体山城 / 层次丰富</p>
              </div>
            </div>
          </motion.div>

          {/* Center Connector */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center w-32 h-32 rounded-full bg-black border border-gray-700 z-20 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            <MapPin className="text-white w-8 h-8 mb-1" />
            <span className="text-xs font-mono text-gray-400 text-center">Raffles City<br/>Link</span>
          </div>

          {/* Singapore Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="p-8 md:pl-16 text-left"
          >
            <h3 className="text-3xl font-bold text-cyber-cyan mb-4">新加坡</h3>
            <div className="space-y-4">
              <div className="glass-card p-4">
                <h4 className="font-mono text-sm text-gray-400">AESTHETIC</h4>
                <p className="text-xl">Garden Order</p>
                <p className="text-sm text-gray-500">花园城市 / 精致规划</p>
              </div>
              <div className="glass-card p-4">
                <h4 className="font-mono text-sm text-gray-400">TOPOGRAPHY</h4>
                <p className="text-xl">Flat & Manicured</p>
                <p className="text-sm text-gray-500">平面延展 / 人工雕琢</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- SWOT Section ---
const SWOTSection = () => {
  const items = [
    { title: "Strengths (优势)", icon: <Zap className="text-yellow-400" />, items: ["8D 魔幻地形", "夜景经济 (Night Economy)", "火锅文化 IP"], color: "hover:border-yellow-400/50" },
    { title: "Weaknesses (劣势)", icon: <AlertTriangle className="text-orange-400" />, items: ["人均消费较低", "渝中区过度拥挤", "淡旺季明显"], color: "hover:border-orange-400/50" },
    { title: "Opportunities (机会)", icon: <TrendingUp className="text-green-400" />, items: ["144h 过境免签", "赛博朋克文化出海", "数字化转型"], color: "hover:border-green-400/50" },
    { title: "Threats (威胁)", icon: <ShieldAlert className="text-red-400" />, items: ["同质化竞争 (西安/长沙)", "极端高温天气", "网红流量不可持续"], color: "hover:border-red-400/50" },
  ];

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center text-white">
        战略分析 <span className="text-cyber-neon">SWOT</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`glass-card p-8 border border-transparent transition-colors duration-300 ${item.color}`}
          >
            <div className="flex items-center gap-3 mb-6">
              {item.icon}
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
            </div>
            <ul className="space-y-3">
              {item.items.map((point, i) => (
                <li key={i} className="flex items-start text-gray-300">
                  <span className="mr-2 text-gray-500">/</span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// --- Footer ---
const Footer = () => {
  return (
    <footer className="py-12 border-t border-gray-900 text-center bg-black">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-white mb-4">
          Infrastructure + Content + Topography + Digital = <span className="text-cyber-cyan">The Future</span>
        </h3>
        <p className="text-gray-500 font-mono text-sm">
          Report by Tourism Management Major
        </p>
        <div className="mt-8 text-xs text-gray-700">
          © 2025 Chongqing Tourism Research
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen bg-cyber-bg text-white selection:bg-cyber-neon selection:text-white">
      <HeroSection />
      <TimelineSection />
      <ComparisonSection />
      <SWOTSection />
      <Footer />
    </main>
  );
}
