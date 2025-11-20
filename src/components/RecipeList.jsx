import RecipeCard from "./RecipeCard";

export default function RecipeList({ recipes, savedIds, onSave, onUnsave }) {
  return (
    <div className="d-flex flex-wrap">
      {recipes.map(r => (
        <RecipeCard
          key={r.id}
          recipe={r}
          saved={savedIds.includes(r.id)}
          onSave={onSave}
          onUnsave={onUnsave}
        />
      ))}
    </div>
  );
}