import { Link } from "react-router";

export default function RecipeCard({ recipe, onSave, onUnsave, saved }) {
  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{recipe.name}</h5>
        <p>{recipe.ingredients.join(", ")}</p>

        <div className="d-flex gap-2">
          <Link className="btn btn-secondary" to={`/details/${recipe.id}`}>
            Details
          </Link>

          {saved ? (
            <button className="btn btn-danger" onClick={() => onUnsave(recipe.id)}>
              Unsave
            </button>
          ) : (
            <button className="btn btn-primary" onClick={() => onSave(recipe)}>
              Save
            </button>
          )}
        </div>
      </div>
    </div>
  );
}