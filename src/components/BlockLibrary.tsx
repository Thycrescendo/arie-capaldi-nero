import React from 'react';
import { Block } from '@/types';
import { motion } from 'framer-motion';

interface BlockLibraryProps {
  blocks: Block[];
}

const BlockLibrary: React.FC<BlockLibraryProps> = ({ blocks }) => {
  const onDragStart = (event: React.DragEvent, block: Block) => {
    event.dataTransfer.setData('application/reactflow', JSON.stringify(block));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Block Library</h2>
      {blocks.map((block) => (
        <motion.div
          key={block.id}
          className="p-4 bg-white border border-gray-300 rounded-lg cursor-move shadow-sm hover:shadow-md"
          draggable
          onDragStart={(event) => onDragStart(event, block)}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="font-medium">{block.label}</h3>
          <p className="text-sm text-gray-600">{block.description}</p>
          <span className="text-xs text-gray-400">{block.type}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default BlockLibrary;