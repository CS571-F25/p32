import { useState } from "react";
import { Form, Button, ButtonGroup } from "react-bootstrap";

export default function SearchBar({ onSearch, onModeChange, mode }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const ingredients = text.split(",").map(s => s.trim()).filter(s => s.length > 0);
    if (ingredients.length > 0) {
      onSearch(ingredients);
    }
  }

  return (
    <div className="mt-3">
      <div className="search-container p-4 rounded shadow-sm mb-4" style={{ background: 'white', border: '1px solid #dee2e6' }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="ingredient-search" className="visually-hidden">
              Search ingredients
            </Form.Label>
            <div className="d-flex gap-2">
              <Form.Control
                id="ingredient-search"
                type="text"
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Enter ingredients separated by commas (e.g., tomato, cheese, pasta)"
                aria-label="Enter ingredients separated by commas"
                aria-describedby="search-help"
                size="lg"
                style={{ border: '2px solid #dee2e6' }}
              />
              <Button type="submit" variant="primary" size="lg">
                <span style={{ marginRight: '6px' }}>🔍</span>
                Search
              </Button>
            </div>
            <Form.Text id="search-help" className="text-muted">
              <span style={{ marginRight: '4px' }}>💡</span>
              Enter one or more ingredients separated by commas
            </Form.Text>
          </Form.Group>
        </Form>

        <div className="mt-3 pt-3 border-top">
          <Form.Label htmlFor="search-mode" className="fw-semibold mb-2 d-block">
            <span style={{ marginRight: '6px' }}>⚙️</span>
            Search Mode:
          </Form.Label>
          <ButtonGroup id="search-mode" role="group" aria-label="Search mode selection" className="w-100">
            <Button
              variant={mode === "precise" ? "success" : "outline-success"}
              onClick={() => onModeChange("precise")}
              aria-pressed={mode === "precise"}
              className="flex-fill"
            >
              <span style={{ marginRight: '4px' }}>🎯</span>
              Precise
            </Button>
            <Button
              variant={mode === "fuzzy" ? "success" : "outline-success"}
              onClick={() => onModeChange("fuzzy")}
              aria-pressed={mode === "fuzzy"}
              className="flex-fill"
            >
              <span style={{ marginRight: '4px' }}>🔀</span>
              Fuzzy
            </Button>
          </ButtonGroup>
          <div className="mt-3 p-3 rounded" style={{ background: '#f8f9fa', borderLeft: '4px solid #5cb85c' }}>
            <small className="text-muted d-block">
              <strong>{mode === "precise" ? "🎯 Precise Mode:" : "🔀 Fuzzy Mode:"}</strong>
            </small>
            <small className="text-muted">
              {mode === "precise" 
                ? "Recipes must contain all specified ingredients"
                : "Recipes containing any specified ingredient will be shown"}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}