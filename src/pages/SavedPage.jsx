import RecipeList from "../components/RecipeList";

export default function SavedPage({ recipes, savedIds, onUnsave }) {
  const savedRecipes = recipes.filter(r => savedIds.includes(r.id));

  return (
    <div className="container mt-3">
      <h2>Saved Recipes</h2>

      <RecipeList
        recipes={savedRecipes}
        savedIds={savedIds}
        onUnsave={onUnsave}
      />
    </div>
  );
}