import Icon from "./Icon";
import { Badge } from "react-bootstrap";

export default function ResultsHeader({ count }) {
  if (count === 0) {
    return null;
  }

  return (
    <div className="results-header mt-5 mb-4">
      <h2 className="mb-0">
        <Icon name="list" style={{ marginRight: '8px' }} />
        Results
        <Badge bg="primary" className="ms-2">{count}</Badge>
      </h2>
      <hr className="mt-3 mb-0" style={{ borderTop: '2px solid #dee2e6' }} />
    </div>
  );
}

