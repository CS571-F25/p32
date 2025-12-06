import SearchBar from "../components/SearchBar";
import RecipeList from "../components/RecipeList";
import ModeBadge from "../components/ModeBadge";
import FilterChips from "../components/FilterChips";
import EmptyState from "../components/EmptyState";
import { useState } from "react";
import { Container } from "react-bootstrap";

export default function SearchPage({ recipes, savedIds, onSave, onUnsave }) {
  const [mode, setMode] = useState("precise");
  const [results, setResults] = useState([]);
  const [activeFilters, setActiveFilters] = useState([]);

  function handleSearch(ingredients) {
    setActiveFilters(ingredients);
    const filtered =
      mode === "precise"
        ? recipes.filter(r => ingredients.every(i => r.ingredients.includes(i)))
        : recipes.filter(r =>
            ingredients.some(i => r.ingredients.includes(i))
          );

    setResults(filtered);
  }

  function handleRemoveFilter(filter) {
    const newFilters = activeFilters.filter(f => f !== filter);
    setActiveFilters(newFilters);
    if (newFilters.length > 0) {
      handleSearch(newFilters);
    } else {
      setResults([]);
    }
  }

  return (
    <Container className="mt-4">
      <div className="page-header mb-4">
        <h1 className="display-5 fw-bold mb-3">
          <span style={{ marginRight: '12px' }}>🔍</span>
          Search Recipes
        </h1>
        <p className="lead text-muted">
          Discover delicious recipes by searching with your favorite ingredients
        </p>
        <ModeBadge mode={mode} />
      </div>

      <SearchBar
        onSearch={handleSearch}
        onModeChange={setMode}
        mode={mode}
      />

      <FilterChips filters={activeFilters} onRemove={handleRemoveFilter} />

      {results.length > 0 && (
        <div className="results-header mt-5 mb-4">
          <h2 className="mb-0">
            <span style={{ marginRight: '8px' }}>📋</span>
            Results
            <span className="badge bg-primary ms-2">{results.length}</span>
          </h2>
          <hr className="mt-3 mb-0" style={{ borderTop: '2px solid #dee2e6' }} />
        </div>
      )}
      {results.length === 0 ? (
        <EmptyState 
          message={activeFilters.length === 0 
            ? "Enter ingredients above to search for recipes" 
            : "No recipes found matching your search criteria"}
        />
      ) : (
        <RecipeList
          recipes={results}
          savedIds={savedIds}
          onSave={onSave}
          onUnsave={onUnsave}
        />
      )}
    </Container>
  );
}
