import React, { useState } from 'react';
import { Node } from 'react-flow-renderer';
import { NodeData } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface NodeConfigPanelProps {
  node: Node<NodeData>;
  onUpdate: (node: Node<NodeData>) => void;
}

const NodeConfigPanel: React.FC<NodeConfigPanelProps> = ({ node, onUpdate }) => {
  const [config, setConfig] = useState(node.data.block.config);

  const handleConfigChange = (key: string, value: string | number | boolean) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    onUpdate({
      ...node,
      data: { block: { ...node.data.block, config } },
    });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Configure {node.data.block.label}</h2>
      {Object.entries(node.data.block.config).map(([key, value]) => (
        <div key={key}>
          <label className="block text-sm font-medium text-gray-700 capitalize">{key}</label>
          {typeof value === 'boolean' ? (
            <Select
              onValueChange={(val) => handleConfigChange(key, val === 'true')}
              defaultValue={value.toString()}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="true">True</SelectItem>
                <SelectItem value="false">False</SelectItem>
              </SelectContent>
            </Select>
          ) : (
            <Input
              type={typeof value === 'number' ? 'number' : 'text'}
              value={value.toString()}
              onChange={(e) => handleConfigChange(key, e.target.value)}
              className="mt-1"
            />
          )}
        </div>
      ))}
      <Button onClick={handleSave} className="w-full bg-secondary hover:bg-blue-500">
        Save Configuration
      </Button>
    </div>
  );
};

export default NodeConfigPanel;