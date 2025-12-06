import RecipeCard from "./RecipeCard";
import { Row, Col } from "react-bootstrap";

export default function RecipeList({ recipes, savedIds, onSave, onUnsave }) {
  if (!recipes || recipes.length === 0) {
    return null;
  }

  return (
    <Row>
      {recipes.map(r => (
        <Col key={r.id} xs={12} sm={6} md={4} lg={3} className="mb-3">
          <RecipeCard
            recipe={r}
            saved={savedIds.includes(r.id)}
            onSave={onSave}
            onUnsave={onUnsave}
          />
        </Col>
      ))}
    </Row>
  );
}