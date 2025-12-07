import SearchBar from "../components/SearchBar";
import RecipeList from "../components/RecipeList";
import ModeBadge from "../components/ModeBadge";
import FilterChips from "../components/FilterChips";
import EmptyState from "../components/EmptyState";
import PageHeader from "../components/PageHeader";
import ResultsHeader from "../components/ResultsHeader";
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
      <PageHeader
        icon="search"
        title="Search Recipes"
        subtitle="Discover delicious recipes by searching with your favorite ingredients"
      >
        <ModeBadge mode={mode} />
      </PageHeader>

      <SearchBar
        onSearch={handleSearch}
        onModeChange={setMode}
        mode={mode}
      />

      <FilterChips filters={activeFilters} onRemove={handleRemoveFilter} />

      <ResultsHeader count={results.length} />

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
