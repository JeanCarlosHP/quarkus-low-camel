import { NodeResizer } from '@reactflow/node-resizer'
import { NodeProps, Handle, Position } from 'reactflow'

import "@reactflow/node-resizer/dist/style.css"

export function Square(props: NodeProps) {
  const handleStyle = {
    base: {
      backgroundColor: '#1e3557', 
      border: "1px solid #fff", 
      width: '0.7rem', 
      height: '0.7rem'
    },
    positionRight: {
      marginRight: '-0.8rem',
    },
    positionLeft: {
      marginLeft: '-0.8rem',
    },
    positionTop: {
      marginTop: '-0.8rem',
    },
    positionBottom: {
      marginBottom: '-0.8rem',
    }
  }

  return (
    <div style={{ backgroundColor: '#0e1929', width: "100%", height: "100%", minWidth: '200px', minHeight: '200px' }}>
      <NodeResizer
        minWidth={200}
        minHeight={200}
      />
      <Handle
        id="right"
        type="source"
        position={Position.Right}
        style={{ ...handleStyle.base, ...handleStyle.positionRight }}
      />
      <Handle
        id="left"
        type="source"
        position={Position.Left}
        style={{ ...handleStyle.base, ...handleStyle.positionLeft }}
      />
      <Handle
        id="top"
        type="source"
        position={Position.Top}
        style={{ ...handleStyle.base, ...handleStyle.positionTop }}
      />
      <Handle
        id="bottom"
        type="source"
        position={Position.Bottom}
        style={{ ...handleStyle.base, ...handleStyle.positionBottom }}
      />
    </div>
  )
}