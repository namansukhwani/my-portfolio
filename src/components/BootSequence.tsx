import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const logs = [
  "INITIALIZING SYSTEM_V2.0...",
  "LOADING DESIGN_TOKENS...",
  "MOUNTING GLASS_COMPONENTS...",
  "ESTABLISHING NEURAL_CONNECTION...",
  "STARTING ANIMATION_ENGINE...",
  "SYSTEMS_ONLINE.",
];

const BootSequence = ({ onComplete }: { onComplete: () => void }) => {
  const [currentLog, setCurrentLog] = useState(0);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const logInterval = setInterval(() => {
      setCurrentLog((prev) => {
        if (prev >= logs.length - 1) {
          clearInterval(logInterval);
          setTimeout(onComplete, 1000);
          return prev;
        }
        return prev + 1;
      });
    }, 400);

    const progressInterval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15);
      });
    }, 200);

    return () => {
      clearInterval(logInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[10000] bg-[#0f1419] flex flex-col items-center justify-center p-6"
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="w-full max-w-md font-mono">
        <div className="mb-8 space-y-2">
          {logs.slice(0, currentLog + 1).map((log, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={`text-sm ${i === logs.length - 1 ? "text-primary text-glow" : "text-muted-foreground/60"}`}
            >
              <span className="text-primary/30 mr-2">$</span>
              {log}
            </motion.div>
          ))}
        </div>
        
        <div className="relative h-1 w-full bg-white/5 rounded-full overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-primary shadow-[0_0_15px_rgba(0,255,255,0.5)]"
            style={{ width: `${percent}%` }}
          />
        </div>
        <div className="mt-4 flex justify-between font-mono text-[10px] text-primary/40 uppercase tracking-widest">
          <span>Booting_Sequence</span>
          <span>{Math.min(percent, 100)}%</span>
        </div>
      </div>
      
      <div className="absolute bottom-10 font-mono text-[10px] text-white/5 tracking-[0.5em] uppercase">
        Naman_Sukhwani // Portfolio_Revamp
      </div>
    </motion.div>
  );
};

export default BootSequence;
