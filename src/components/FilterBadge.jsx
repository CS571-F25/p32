import { Badge, Button } from "react-bootstrap";
import Icon from "./Icon";
import { useState } from "react";

export default function FilterBadge({ filter, onRemove }) {
  const [opacity, setOpacity] = useState(0.8);

  return (
    <Badge
      bg="info"
      className="d-flex align-items-center gap-2 p-2"
      role="listitem"
      style={{ 
        fontSize: '0.9rem',
        background: 'linear-gradient(135deg, #0dcaf0 0%, #0aa2c0 100%) !important',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
      }}
    >
      <Icon name="tag" style={{ marginRight: '4px' }} />
      <span>{filter}</span>
      {onRemove && (
        <Button
          variant="link"
          size="sm"
          className="p-0 text-white text-decoration-none"
          onClick={() => onRemove(filter)}
          aria-label={`Remove filter ${filter}`}
          style={{ 
            lineHeight: 1,
            fontSize: '1.2rem',
            fontWeight: 'bold',
            opacity: opacity
          }}
          onMouseEnter={() => setOpacity(1)}
          onMouseLeave={() => setOpacity(0.8)}
        >
          <Icon name="remove" />
        </Button>
      )}
    </Badge>
  );
}

