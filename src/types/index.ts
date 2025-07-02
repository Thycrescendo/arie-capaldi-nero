export interface Block {
  id: string;
  type: 'trigger' | 'action' | 'logic' | 'transform' | 'storage' | 'ai' | 'notification';
  label: string;
  description: string;
  config: {
    [key: string]: string | number | boolean;
  };
}

export interface NodeData {
  block: Block;
}

export interface Workflow {
  nodes: any[];
  edges: any[];
}