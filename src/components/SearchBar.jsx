import { useState } from "react";

export default function SearchBar({ onSearch, onModeChange, mode }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(text.split(",").map(s => s.trim()));
  }

  return (
    <div className="container mt-3">
      <form onSubmit={handleSubmit} className="d-flex gap-2">
        <input
          className="form-control"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Enter ingredients separated by commas"
        />
        <button className="btn btn-primary">Search</button>
      </form>

      <div className="mt-2">
        <button
          className={`btn me-2 ${mode === "precise" ? "btn-success" : "btn-outline-success"}`}
          onClick={() => onModeChange("precise")}
        >
          Precise
        </button>

        <button
          className={`btn ${mode === "fuzzy" ? "btn-success" : "btn-outline-success"}`}
          onClick={() => onModeChange("fuzzy")}
        >
          Fuzzy
        </button>
      </div>
    </div>
  );
}