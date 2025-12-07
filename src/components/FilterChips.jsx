import FilterBadge from "./FilterBadge";

export default function FilterChips({ filters, onRemove }) {
  if (!filters || filters.length === 0) {
    return null;
  }

  return (
    <div className="d-flex flex-wrap gap-2 mb-3" role="list" aria-label="Active filters">
      {filters.map((filter, index) => (
        <FilterBadge
          key={index}
          filter={filter}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}

