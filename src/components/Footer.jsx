import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="text-center mt-5 mb-3 text-muted border-top pt-4" role="contentinfo" style={{ borderTop: '2px solid #dee2e6 !important' }}>
      <Container>
        <p className="mb-2">
          <span style={{ marginRight: '8px' }}>🍳</span>
          Recipe Finder
        </p>
        <p className="mb-0 small">© 2025 Qingyi Xiang. All rights reserved.</p>
      </Container>
    </footer>
  );
}