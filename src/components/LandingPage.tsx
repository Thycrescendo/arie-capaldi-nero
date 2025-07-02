import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { LucideRocket, LucideZap, LucideWallet } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-neutral text-white flex flex-col items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-5xl font-bold mb-4">Arie-Capaldi-Nero</h1>
        <p className="text-xl mb-6">
          Build and deploy sophisticated crypto trading and DeFi workflows with an intuitive drag-and-drop interface. No coding required.
        </p>
        <div className="flex justify-center space-x-4">
          <Button size="lg" className="bg-secondary hover:bg-blue-500">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-neutral">
            Learn More
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl"
      >
        <div className="p-6 bg-white/10 rounded-lg flex flex-col items-center text-center">
          <LucideRocket className="h-12 w-12 mb-4" />
          <h3 className="text-lg font-semibold">Automate Trading</h3>
          <p>Create workflows for price alerts and trade execution effortlessly.</p>
        </div>
        <div className="p-6 bg-white/10 rounded-lg flex flex-col items-center text-center">
          <LucideZap className="h-12 w-12 mb-4" />
          <h3 className="text-lg font-semibold">Gas Optimization</h3>
          <p>Optimize gas fees across multiple blockchain networks.</p>
        </div>
        <div className="p-6 bg-white/10 rounded-lg flex flex-col items-center text-center">
          <LucideWallet className="h-12 w-12 mb-4" />
          <h3 className="text-lg font-semibold">Portfolio Management</h3>
          <p>Monitor and manage your DeFi portfolio with ease.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default LandingPage;