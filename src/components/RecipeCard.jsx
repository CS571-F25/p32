import { Link } from "react-router";
import { Card, Badge } from "react-bootstrap";
import IngredientTag from "./IngredientTag";
import Icon from "./Icon";
import IconButton from "./IconButton";
import StyledCard from "./StyledCard";

export default function RecipeCard({ recipe, onSave, onUnsave, saved }) {
  return (
    <StyledCard>
      <Card.Body className="d-flex flex-column">
        <Card.Title as="h3" className="h5 mb-3">
          <Icon name="dish" style={{ marginRight: '6px' }} />
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
          <IconButton
            as={Link}
            to={`/details/${recipe.id}`}
            variant="dark"
            className="flex-grow-1"
            icon="details"
          >
            Details
          </IconButton>

          {saved ? (
            <IconButton
              variant="danger"
              onClick={() => onUnsave(recipe.id)}
              aria-label={`Unsave ${recipe.name}`}
              icon="unsave"
            >
              Unsave
            </IconButton>
          ) : (
            <IconButton
              variant="success"
              onClick={() => onSave(recipe)}
              aria-label={`Save ${recipe.name}`}
              icon="save"
            >
              Save
            </IconButton>
          )}
        </div>
      </Card.Body>
    </StyledCard>
  );
}
