import { Container, Button, Alert } from "react-bootstrap";
import { Link } from "react-router";

export default function Security() {
  return (
    <Container className="mt-4">
      <h1>Access Denied</h1>
      <Alert variant="warning" role="alert">
        <Alert.Heading as="h2">Security Notice</Alert.Heading>
        <p>You are not at the expected URL. This page is for security purposes.</p>
      </Alert>
      <Button as={Link} to="/" variant="primary" className="mt-2">
        Return Home
      </Button>
    </Container>
  );
}