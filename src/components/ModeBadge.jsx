import { Badge } from "react-bootstrap";

export default function ModeBadge({ mode }) {
  return (
    <Badge 
      bg={mode === "precise" ? "success" : "warning"} 
      className="mb-2"
      aria-label={`Current search mode: ${mode === "precise" ? "Precise" : "Fuzzy"}`}
    >
      {mode === "precise" ? "Precise Mode" : "Fuzzy Mode"}
    </Badge>
  );
}