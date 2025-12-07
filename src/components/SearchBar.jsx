import { useState } from "react";
import { Form, ButtonGroup } from "react-bootstrap";
import SearchContainer from "./SearchContainer";
import Icon from "./Icon";
import IconButton from "./IconButton";
import ModeInfo from "./ModeInfo";

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
      <SearchContainer>
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
              <IconButton 
                type="submit" 
                variant="primary" 
                size="lg"
                icon="search"
                iconStyle={{ marginRight: '6px' }}
              >
                Search
              </IconButton>
            </div>
            <Form.Text id="search-help" className="text-muted">
              <Icon name="lightbulb" style={{ marginRight: '4px' }} />
              Enter one or more ingredients separated by commas
            </Form.Text>
          </Form.Group>
        </Form>

        <div className="mt-3 pt-3 border-top">
          <Form.Label htmlFor="search-mode" className="fw-semibold mb-2 d-block">
            <Icon name="settings" style={{ marginRight: '6px' }} />
            Search Mode:
          </Form.Label>
          <ButtonGroup id="search-mode" role="group" aria-label="Search mode selection" className="w-100">
            <IconButton
              variant={mode === "precise" ? "success" : "outline-success"}
              onClick={() => onModeChange("precise")}
              aria-pressed={mode === "precise"}
              className="flex-fill"
              icon="precise"
            >
              Precise
            </IconButton>
            <IconButton
              variant={mode === "fuzzy" ? "success" : "outline-success"}
              onClick={() => onModeChange("fuzzy")}
              aria-pressed={mode === "fuzzy"}
              className="flex-fill"
              icon="fuzzy"
            >
              Fuzzy
            </IconButton>
          </ButtonGroup>
          <ModeInfo mode={mode} />
        </div>
      </SearchContainer>
    </div>
  );
}