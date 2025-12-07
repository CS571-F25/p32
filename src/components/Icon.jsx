export default function Icon({ name, className = "", style = {} }) {
  const icons = {
    search: "🔍",
    saved: "❤️",
    recipe: "🍳",
    dish: "🍽️",
    details: "📖",
    save: "❤️",
    unsave: "💔",
    tag: "🏷️",
    lightbulb: "💡",
    settings: "⚙️",
    precise: "🎯",
    fuzzy: "🔀",
    list: "📋",
    cooking: "🥘",
    empty: "📝",
    remove: "×"
  };

  const iconText = icons[name] || "";

  return (
    <span className={className} style={style} aria-hidden="true">
      {iconText}
    </span>
  );
}

