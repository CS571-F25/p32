export default function DetailsView({ recipe }) {
  if (!recipe) {
    return (
      <div className="container mt-3">
        <h2>Recipe Not Found</h2>
      </div>
    );
  }

  return (
    <div className="container mt-3">
      <h1>{recipe.name}</h1>

      <h4 className="mt-3">Ingredients:</h4>
      <ul>
        {recipe.ingredients.map((ing, idx) => (
          <li key={idx}>{ing}</li>
        ))}
      </ul>

      <h4 className="mt-4">Instructions:</h4>
      <p>{recipe.instructions}</p>

      <a className="btn btn-secondary mt-3" href="#/">
        Back
      </a>
    </div>
  );
}