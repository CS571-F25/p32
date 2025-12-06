import { Container } from "react-bootstrap";

export default function EmptyState({ message, icon }) {
  return (
    <Container className="text-center py-5">
      <div className="empty-state-content">
        {icon && <div className="mb-3" style={{ fontSize: '4rem' }} aria-hidden="true">{icon}</div>}
        {!icon && <div className="mb-3" style={{ fontSize: '4rem' }} aria-hidden="true">📝</div>}
        <p className="text-muted fs-5">{message}</p>
      </div>
    </Container>
  );
}

