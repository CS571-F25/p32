import { Container } from "react-bootstrap";
import Icon from "./Icon";

export default function EmptyState({ message, icon = "empty" }) {
  return (
    <Container className="text-center py-5">
      <div className="empty-state-content">
        <div className="mb-3" style={{ fontSize: '4rem' }}>
          <Icon name={icon} />
        </div>
        <p className="text-muted fs-5">{message}</p>
      </div>
    </Container>
  );
}

