import { Badge, Button } from "react-bootstrap";

export default function FilterChips({ filters, onRemove }) {
  if (!filters || filters.length === 0) {
    return null;
  }

  return (
    <div className="d-flex flex-wrap gap-2 mb-3" role="list" aria-label="Active filters">
      {filters.map((filter, index) => (
        <Badge
          key={index}
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
          <span style={{ marginRight: '4px' }}>🏷️</span>
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
                opacity: 0.8
              }}
              onMouseEnter={(e) => e.target.style.opacity = '1'}
              onMouseLeave={(e) => e.target.style.opacity = '0.8'}
            >
              
            </Button>
          )}
        </Badge>
      ))}
    </div>
  );
}

