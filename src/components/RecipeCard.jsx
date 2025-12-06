import { Link } from "react-router";
import { Card, Button, Badge } from "react-bootstrap";
import IngredientTag from "./IngredientTag";

export default function RecipeCard({ recipe, onSave, onUnsave, saved }) {
  return (
    <Card className="m-2" style={{ width: "18rem", minHeight: "300px" }}>
      <Card.Body className="d-flex flex-column">
        <Card.Title as="h3" className="h5 mb-3">
          <span style={{ marginRight: '6px' }}>🍽️</span>
          {recipe.name}
        </Card.Title>
        <Card.Text className="flex-grow-1">
          <div className="d-flex flex-wrap gap-1">
            {recipe.ingredients.map((ing, i) => (
              <IngredientTag key={i} text={ing} />
            ))}
          </div>
        </Card.Text>

        <div className="d-flex gap-2 mt-auto">
          <Button
            as={Link}
            to={`/details/${recipe.id}`}
            variant="dark"
            className="flex-grow-1"
          >
            <span style={{ marginRight: '4px' }}>📖</span>
            Details
          </Button>

          {saved ? (
            <Button
              variant="danger"
              onClick={() => onUnsave(recipe.id)}
              aria-label={`Unsave ${recipe.name}`}
            >
              <span style={{ marginRight: '4px' }}>💔</span>
              Unsave
            </Button>
          ) : (
            <Button
              variant="success"
              onClick={() => onSave(recipe)}
              aria-label={`Save ${recipe.name}`}
            >
              <span style={{ marginRight: '4px' }}>❤️</span>
              Save
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
