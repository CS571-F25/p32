export default function IngredientTag({ text }) {
  return (
    <span
      className="badge bg-secondary me-1"
      style={{ fontSize: "0.9rem" }}
      aria-label={`ingredient ${text}`}
    >
      {text}
    </span>
  );
}