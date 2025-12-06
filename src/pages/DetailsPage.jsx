import { useParams, Link } from "react-router";
import AccessibleImage from "../components/AccessibleImage";
import IngredientTag from "../components/IngredientTag";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

export default function DetailsPage({ recipes }) {
  const { id } = useParams();
  const recipe = recipes.find(r => r.id === Number(id));

  if (!recipe) {
    return (
      <Container className="mt-4">
        <h1>Recipe Not Found</h1>
        <p>The recipe you are looking for does not exist.</p>
        <Button as={Link} to="/" variant="primary">
          Return to Search
        </Button>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <div className="recipe-header mb-4">
        <h1 className="display-4 fw-bold mb-3">{recipe.name}</h1>
        <div className="recipe-meta mb-3">
          <span className="badge bg-info me-2">
            <span style={{ marginRight: '4px' }}>🥘</span>
            {recipe.ingredients.length} Ingredients
          </span>
        </div>
      </div>

      <div className="recipe-image-container mb-4">
        <AccessibleImage
          src="https://via.placeholder.com/600x400/4a90e2/ffffff?text=Recipe+Image"
          alt={`Image of ${recipe.name}`}
          className="img-fluid rounded shadow"
          style={{ 
            maxWidth: "100%", 
            height: "auto",
            border: "3px solid #dee2e6"
          }}
        />
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
        <Button as={Link} to="/" variant="secondary" className="me-2">
          Back to Search
        </Button>
        <Button as={Link} to="/saved" variant="outline-secondary">
          View Saved Recipes
        </Button>
      </div>
    </Container>
  );
}
