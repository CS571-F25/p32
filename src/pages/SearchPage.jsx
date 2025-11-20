import { useState } from "react";
import SearchBar from "../components/SearchBar";
import RecipeList from "../components/RecipeList";

export default function SearchPage({ recipes, savedIds, onSave, onUnsave }) {
  const [filtered, setFiltered] = useState([]);
  const [mode, setMode] = useState("precise");

  function handleSearch(ingredients) {
    if (mode === "precise") {
      setFiltered(
        recipes.filter(r =>
          ingredients.every(ing => r.ingredients.includes(ing))
        )
      );
    } else {
      setFiltered(
        recipes.filter(r =>
          ingredients.some(ing => r.ingredients.includes(ing))
        )
      );
    }
  }

  return (
    <>
      <SearchBar onSearch={handleSearch} mode={mode} onModeChange={setMode} />

      <RecipeList
        recipes={filtered}
        savedIds={savedIds}
        onSave={onSave}
        onUnsave={onUnsave}
      />
    </>
  );
}