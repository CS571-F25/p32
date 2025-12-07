import RecipeList from "../components/RecipeList";
import EmptyState from "../components/EmptyState";
import PageHeader from "../components/PageHeader";
import { Container } from "react-bootstrap";

export default function SavedPage({ recipes, savedIds, onUnsave }) {
  const savedRecipes = recipes.filter(r => savedIds.includes(r.id));

  return (
    <Container className="mt-4">
      <PageHeader
        icon="saved"
        title="Saved Recipes"
        subtitle={savedRecipes.length > 0 
          ? `You have ${savedRecipes.length} saved recipe${savedRecipes.length !== 1 ? 's' : ''} in your collection`
          : null}
      />

      {savedRecipes.length === 0 ? (
        <EmptyState message="You have no saved recipes. Search for recipes and save them to view them here." />
      ) : (
        <RecipeList
          recipes={savedRecipes}
          savedIds={savedIds}
          onUnsave={onUnsave}
          onSave={() => {}}
        />
      )}
    </Container>
  );
}
