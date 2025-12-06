import RecipeList from "../components/RecipeList";
import EmptyState from "../components/EmptyState";
import { Container } from "react-bootstrap";

export default function SavedPage({ recipes, savedIds, onUnsave }) {
  const savedRecipes = recipes.filter(r => savedIds.includes(r.id));

  return (
    <Container className="mt-4">
      <div className="page-header mb-4">
        <h1 className="display-5 fw-bold mb-3">
          <span style={{ marginRight: '12px' }}>❤️</span>
          Saved Recipes
        </h1>
        {savedRecipes.length > 0 && (
          <p className="lead text-muted">
            You have {savedRecipes.length} saved recipe{savedRecipes.length !== 1 ? 's' : ''} in your collection
          </p>
        )}
      </div>

      {savedRecipes.length === 0 ? (
        <EmptyState message="You have no saved recipes. Search for recipes and save them to view them here." />
      ) : (
        <>
          <RecipeList
            recipes={savedRecipes}
            savedIds={savedIds}
            onUnsave={onUnsave}
            onSave={() => {}}
          />
        </>
      )}
    </Container>
  );
}
