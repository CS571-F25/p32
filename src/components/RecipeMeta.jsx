import { Badge } from "react-bootstrap";
import Icon from "./Icon";

export default function RecipeMeta({ ingredientCount }) {
  return (
    <div className="recipe-meta mb-3">
      <Badge bg="info" className="me-2">
        <Icon name="cooking" style={{ marginRight: '4px' }} />
        {ingredientCount} Ingredients
      </Badge>
    </div>
  );
}

