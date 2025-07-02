# Arie-Capaldi-Nero: Visual Blockchain Automation Platform

## Overview

**Arie-Capaldi-Nero** is a dApp visual blockchain automation platform built for the **NERO Chain** ecosystem. It delivers a drag-and-drop, no-code experience using `@xyflow/react-flow`, empowering users to build crypto automation workflows for DeFi, GameFi, and SocialFi. Designed for **Wavehack/Buildathon**, it leverages NERO's **Blockspace 2.0** and **Paymaster (AA-Platform)** to enable **gasless transactions** and **custom fee logic**.

---

## Functional Specifications

- **Workflow Engine**: Constructs directed acyclic graphs (DAGs) composed of triggers, actions, logic, and notifications.
- **DeFi Automation**: Simulates real-time price tracking, trade execution, and portfolio balancing.
- **NERO Integration**: Targeted connection to `https://rpc-testnet.nerochain.io` with Paymaster support.
- **Modular Design**: Scalable for NFT minting, DAO voting, and social automation.

---

## Architecture

### Software Stack

**Frontend:**
- React `^18.2.0`
- TypeScript `^4.9.5`
- Tailwind CSS `^3.4.1`
- @xyflow/react-flow `^12.0.0`
- Framer Motion `^11.0.3`
- Radix UI (`@radix-ui/react-tabs`, `@radix-ui/react-select`)
- lucide-react `^0.263.0`
- Shadcn UI (for button/input/select components)

**Blockchain:**
- NERO Chain Blockspace 2.0
- Paymaster account abstraction (AA)
- Future: `ethers.js` integration


### Data Model

```ts
// src/types/index.ts
export interface Block {
  id: string;
  type: 'trigger' | 'action' | 'logic' | 'transform' | 'storage' | 'ai' | 'notification';
  label: string;
  description: string;
  config: { [key: string]: string | number | boolean };
}
```

---

## Getting Started

### Prerequisites

* Node.js `>=16.x`
* npm `>=7.x`
* Git

### Installation

```bash
git clone https://github.com/thycrescendo/arie-capaldi-nero.git
cd arie-capaldi-nero

npm install @xyflow/react-flow @types/xyflow__react-flow \
@radix-ui/react-tabs @radix-ui/react-select \
framer-motion lucide-react --legacy-peer-deps

npm install
```

### Tailwind Configuration

```js
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A',
        secondary: '#3B82F6',
        accent: '#10B981',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
```

### Initialize Shadcn UI

```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add button input select tabs
```

### Start Dev Server

```bash
npm start
```

Access: `http://localhost:3000`

---

## 🏗 Build Process

### Project Setup

```bash
npx create-react-app arie-capaldi-nero --template typescript
```

### Core Drag-and-Drop Implementation

```ts
const [nodes, setNodes] = useState<Node[]>([]);

const onDrop = (event: React.DragEvent) => {
  const blockData = event.dataTransfer.getData('application/reactflow');
  const block: Block = JSON.parse(blockData);
  const position = { x: event.clientX - 100, y: event.clientY - 50 };
  setNodes((nds) =>
    nds.concat({ id: `${block.id}-${Date.now()}`, type: 'default', position, data: { block } })
  );
};
```

### Animations with Framer Motion

```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  {/* Node UI */}
</motion.div>
```

---

## 🔗 NERO Chain Integration

### Current State

* Mock Paymaster UI in `NodeConfigPanel.tsx`:

```tsx
<Select onValueChange={(val) => handleConfigChange('gasType', val)} defaultValue="0">
  <SelectTrigger><SelectValue placeholder="Select gas payment" /></SelectTrigger>
  <SelectContent>
    <SelectItem value="0">Sponsored (Type 0)</SelectItem>
    <SelectItem value="1">Prepay (Type 1)</SelectItem>
    <SelectItem value="2">Postpay (Type 2)</SelectItem>
  </SelectContent>
</Select>
```

* Planned RPC endpoint: `https://rpc-testnet.nerochain.io`

### Future Work

```ts
// aaUtils.ts (future)
import { initAABuilder, setPaymentType } from './aaUtils';

const aaBuilder = await initAABuilder(provider);
await setPaymentType(aaBuilder, '0'); // Sponsored
```

---

## ⚠️ Challenges & Fixes

| Problem                               | Solution                            |
| ------------------------------------- | ----------------------------------- |
| E404 for `@types/react-flow-renderer` | Switched to `@xyflow/react-flow`    |
| Drag node offset issue                | Adjusted drop coordinates           |
| Animation lag                         | Debounced Framer Motion transitions |
| No live chain access                  | Built mock Paymaster system         |

---

## 💡 Lessons Learned

* **Peer Dependency Handling** with `--legacy-peer-deps`
* **Performance Optimization** via animation tuning
* **Modular Design** for future expansion
* **Deep Understanding** of NERO’s AA and Blockspace architecture

---

## 🎮 Usage Instructions

1. **Start Server** → `http://localhost:3000`
2. **Build Workflow**:

   * Drag blocks: `Price Alert`, `Execute Trade`
   * Connect via edges
3. **Simulate Execution**:

   * Set mock parameters
   * Trigger and observe behavior in logs/UI

---

## 🔭 Future Roadmap

### Wave 4 – GameFi

* 3D workflows
* NFT triggers
* On-chain game logic

### Wave 5 – SocialFi

* DAO proposal/voting blocks
* NERO token integration
* AI for auto-generating workflows

### Tech Milestones

* NERO RPC integration
* Paymaster signing & live AA
* Mobile responsiveness
* Security via signature checks

---

## 🤝 Contributing

```bash
# Fork and clone
git clone https://github.com/thycrescendo/arie-capaldi-nero.git

# Branch
git checkout -b feature/new-module

# Commit
git commit -m "feat: add new module"

# Push
git push origin feature/new-module
```

Open a Pull Request with your feature.

---

## 📄 License

[MIT License](./LICENSE)

---
