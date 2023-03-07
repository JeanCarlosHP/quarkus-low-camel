import { DragEvent } from "react";
import { Container, Image, Title } from "./style";

type CamelComponentProps = {
  name: string;
  imagePath: string;
  nodes: any;
  setNodes: any;
}

export function CamelComponent(props: CamelComponentProps) {

  function handleDragEnd(event: DragEvent<HTMLLIElement>) {
    console.log(event.clientX, event.clientY)
    props.setNodes([...props.nodes, {
      id: crypto.randomUUID(),
      type: 'rest',
      position: {
        x: event.clientX,
        y: event.clientY
      },
      data: {}
    }])
  }

  return (
    <Container draggable={true} onDragEnd={handleDragEnd}>
      <Image src={props.imagePath} alt={props.name} draggable={false} />
      <Title>{props.name}</Title>
    </Container>
  );
}
