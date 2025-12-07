import { useParams, Link } from "react-router";
import IngredientTag from "../components/IngredientTag";
import RecipeMeta from "../components/RecipeMeta";
import IconButton from "../components/IconButton";
import { Container, Card, Row, Col } from "react-bootstrap";

export default function DetailsPage({ recipes }) {
  const { id } = useParams();
  const recipe = recipes.find(r => r.id === Number(id));

  if (!recipe) {
    return (
      <Container className="mt-4">
        <h1>Recipe Not Found</h1>
        <p>The recipe you are looking for does not exist.</p>
        <IconButton as={Link} to="/" variant="primary">
          Return to Search
        </IconButton>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <div className="recipe-header mb-4">
        <h1 className="display-4 fw-bold mb-3">{recipe.name}</h1>
        <RecipeMeta ingredientCount={recipe.ingredients.length} />
      </div>

      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Header as="h2">Ingredients</Card.Header>
            <Card.Body>
              <ul className="list-unstyled">
                {recipe.ingredients.map((ing, i) => (
                  <li key={i} className="mb-2">
                    <IngredientTag text={ing} />
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Header as="h2">Instructions</Card.Header>
            <Card.Body>
              <p className="mb-0">{recipe.instructions}</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div className="mt-3">
        <IconButton as={Link} to="/" variant="secondary" className="me-2">
          Back to Search
        </IconButton>
        <IconButton as={Link} to="/saved" variant="outline-secondary">
          View Saved Recipes
        </IconButton>
      </div>
    </Container>
  );
}
