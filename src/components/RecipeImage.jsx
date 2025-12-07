import AccessibleImage from "./AccessibleImage";

export default function RecipeImage({ src, alt }) {
  return (
    <div className="recipe-image-container mb-4">
      <AccessibleImage
        src={src}
        alt={alt}
        className="img-fluid rounded shadow"
        style={{ 
          maxWidth: "100%", 
          height: "auto",
          border: "3px solid #dee2e6"
        }}
      />
    </div>
  );
}

