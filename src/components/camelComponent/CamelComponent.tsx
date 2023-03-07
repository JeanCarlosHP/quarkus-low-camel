import { Container, Image, Title } from "./style";

type CamelComponentProps = {
  name: string;
  imagePath: string;
}

export function CamelComponent(props: CamelComponentProps) {
  return (
    <Container>
      <Image src={props.imagePath} alt={props.name} />
      <Title>{props.name}</Title>
    </Container>
  );
}
