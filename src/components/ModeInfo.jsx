export default function ModeInfo({ mode }) {
  const modeConfig = {
    precise: {
      icon: "precise",
      title: "🎯 Precise Mode:",
      description: "Recipes must contain all specified ingredients"
    },
    fuzzy: {
      icon: "fuzzy",
      title: "🔀 Fuzzy Mode:",
      description: "Recipes containing any specified ingredient will be shown"
    }
  };

  const config = modeConfig[mode] || modeConfig.precise;

  return (
    <div className="mt-3 p-3 rounded" style={{ background: '#f8f9fa', borderLeft: '4px solid #5cb85c' }}>
      <small className="text-muted d-block">
        <strong>{config.title}</strong>
      </small>
      <small className="text-muted">
        {config.description}
      </small>
    </div>
  );
}

