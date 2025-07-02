import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import LandingPage from './components/LandingPage';
import WorkflowBuilder from './components/WorkflowBuilder';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-gray-50">
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-primary text-white p-4 flex justify-between items-center"
      >
        <h1 className="text-2xl font-bold">Arie-Capaldi-Nero</h1>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-auto">
          <TabsList>
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="builder">Workflow Builder</TabsTrigger>
          </TabsList>
        </Tabs>
      </motion.nav>
      <Tabs value={activeTab} className="p-4">
        <TabsContent value="home">
          <LandingPage />
        </TabsContent>
        <TabsContent value="builder">
          <WorkflowBuilder />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default App;