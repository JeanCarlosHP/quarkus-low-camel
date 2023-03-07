import { CamelComponent } from "../camelComponent/CamelComponent";
import { ListComponents, Container, Title } from "./style";

import restImage from "../../images/rest.png";

export function Sidebar(props: any) {
  return (
    <Container>
      <Title>Camel Components</Title>

      <ListComponents>
        <CamelComponent name="Rest" imagePath={restImage} />
        <CamelComponent name="Rest" imagePath={restImage} />
        <CamelComponent name="Rest" imagePath={restImage} />
      </ListComponents>
    </Container>
  );
};
