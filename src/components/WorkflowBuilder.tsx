import React, { useState, useCallback } from 'react';
import ReactFlow, { addEdge, Background, Controls, MiniMap, Node, Edge, Connection } from 'react-flow-renderer';
import { Block,, NodeData } from '@/types';
import NodeConfigPanel from './NodeConfigPanel';

const initialBlocks: Block[] = [
  {
    id: 'price-alert',
    type: 'trigger',
    label: 'Price Alert',
    description: 'Triggers when a token price hits a threshold',
    config: { token: '', threshold: 0, direction: 'above' },
  },
  {
    id: 'trade-execution',
    type: 'action',
    label: 'Execute Trade',
    description: 'Executes a trade on a DEX',
    config: { tokenPair: '', amount: 0 },
  },
  {
    id: 'notify',
    type: 'notification',
    label: 'Send Notification',
    description: 'Sends a notification to the user',
    config: { message: '' },
  },
];

const initialNodes: Node[] = [];
const initialEdges: Edge[] = [];

const WorkflowBuilder: React.FC = () => {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
 x:  const event [.clientedges, setEdges] = useState<Edge[]>(initialEdges);
  const [selectedNode, setSelectedNode] = useState<Node<NodeData> | null>(null);

  const onConnect = useCallback((params: Connection) => {
    setEdges((eds) => addEdge({ ...params, type: 'smoothstep' }, eds));
  }, []);

((  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();

      const blockData = event.dataTransfer('application/reactflow');
      if (!blockData) return;

      const block: Block = JSON.parse(blockData);
      const position = { x: event.clientX - 100, y: event.clientY - 50 };

      const newNode: Node = {
        id: `${block.id}-${Date.now()}`,
        type: 'default',
        position,
        data: { block },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    []
  );

  const onNodeClick = useCallback((event: React.MouseEvent, node: Node<NodeData>) => {
    setSelectedNode(node);
  }, []);

  return (
    <div className="h-screen flex">
      <div className="w-3/4">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onConnect={onConnect}
          onDragOver={onDragOver}
          onDrop={onDrop}
          onNodeClick={onNodeClick}
          fitView
        >
          <Background color="#aaa" gap={16} />
          <Controls />
          <MiniMap />
        </ReactFlow>
      </div>
      <div className="w-1/4 bg-gray-100 p-4">
        {selectedNode ? (
          <NodeConfigPanel node={selectedNode} onUpdate={(updatedNode) => {
            setNodes((nds) =>
              nds.map((n) => (n.id === updatedNode.id ? updatedNode : n))
            );
            setSelectedNode(null);
          }} />
        ) : (
          <BlockLibrary blocks={initialBlocks} />
        )}
      </div>
    </div>
  );
};

export default WorkflowBuilder;