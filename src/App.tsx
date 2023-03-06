import { useCallback } from "react";
import ReactFlow, { Background, Controls, BackgroundVariant, Node, ConnectionMode, useEdgesState, Connection, addEdge, useNodesState } from "reactflow"
import * as Toolbar from '@radix-ui/react-toolbar'
import 'reactflow/dist/style.css'
import DefaultEdge from "./components/edges/DefaultEdge";

import { Square } from './components/nodes/Square'

const reactFlowStyle = {
  background: '#262626',
};

const NODE_TYPES = {
  square: Square,
}

const EDGE_TYPES = {
  default: DefaultEdge,
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
  {
    id: crypto.randomUUID(),
    type: 'square',
    position: {
      x: 650,
      y: 250
    },
    data: {}
  }
] satisfies Node[]

function App() {
  const [edges, setEdges, onChangeEdges] = useEdgesState([])
  const [nodes, setNodes, onChangeNodes] = useNodesState(INITIAL_NODES)

  const onConnect = useCallback((connection: Connection) => {
      return setEdges(edges => addEdge(connection, edges))
    }, []
  )
  
  function addSquareNode() {
    setNodes(nodes => [
      ...nodes, 
      {
        id: crypto.randomUUID(),
        type: 'square',
        position: { 
          x: 850,
          y: 250
        },
        data: {}
      }
    ])
  }

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow 
        style={reactFlowStyle}
        nodeTypes={NODE_TYPES}
        edgeTypes={EDGE_TYPES}
        nodes={nodes}
        edges={edges}
        onEdgesChange={onChangeEdges}
        onConnect={onConnect}
        onNodesChange={onChangeNodes}
        connectionMode={ConnectionMode.Loose}
        defaultEdgeOptions={{
          type: 'default',
        }}
      >
        <Background 
          variant={BackgroundVariant.Lines} 
          gap={10} 
          color='#424242'
        />
        <Controls />
      </ReactFlow>

      <Toolbar.Root style={{ 
        position: "fixed", 
        bottom: "20px", 
        transform: "translateX(200%)",
        backgroundColor: "#fff", 
        border: "2px solid #cecece",
        borderRadius: "16px", 
        width: "24rem", 
        height: "5rem", 
        overflow: "hidden",
        padding: "0.5rem", 
      }}>
        <Toolbar.Button 
          style={{
            backgroundColor: "#0e1929",
            width: "5rem",
            height: "5rem",
            marginTop: "1rem",
            borderRadius: "16px"
          }}
          className="toolbar-button"
          onClick={addSquareNode}
        >

        </Toolbar.Button>
      </Toolbar.Root>
    </div>
  )
}

export default App
