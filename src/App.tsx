import ReactFlow, { Background, Controls, BackgroundVariant, Node } from "reactflow"
import 'reactflow/dist/style.css'

import { Square } from './components/nodes/Square'

const reactFlowStyle = {
  background: '#37474F',
};

const NODE_TYPES = {
  square: Square,
}

const INITIAL_NODES = [
  {
    id: crypto.randomUUID(),
    type: 'square',
    position: {
      x: 250,
      y: 250
    },
    data: {}
  },
] satisfies Node[]

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow 
        style={reactFlowStyle}
        nodeTypes={NODE_TYPES}
        nodes={INITIAL_NODES}
      >
        <Background 
          variant={BackgroundVariant.Lines} 
          gap={10} 
          color='#455A64'
        />
        <Controls />
      </ReactFlow>
    </div>
  )
}

export default App
