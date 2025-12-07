import { HashRouter, Routes, Route } from "react-router";
import { useState } from "react";

import MyNavbar from "./components/MyNavbar";
import Footer from "./components/Footer";

import SearchPage from "./pages/SearchPage";
import SavedPage from "./pages/SavedPage";
import DetailsPage from "./pages/DetailsPage";
import Security from "./components/Security";

import recipes from "./recipes";

import "./styles/contrast.css";

export default function App() {
  const [savedIds, setSavedIds] = useState([]);

  function handleSave(recipe) {
    if (!savedIds.includes(recipe.id)) {
      setSavedIds(prev => [...prev, recipe.id]);
    }
  }

  function handleUnsave(id) {
    setSavedIds(prev => prev.filter(x => x !== id));
  }

  return (
    <HashRouter>
      <div className="app-container">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <MyNavbar />

        <main id="main-content" role="main">
          <Routes>
            <Route
              path="/"
              element={
                <SearchPage
                  recipes={recipes}
                  savedIds={savedIds}
                  onSave={handleSave}
                  onUnsave={handleUnsave}
                />
              }
            />

            <Route
              path="/saved"
              element={
                <SavedPage
                  recipes={recipes}
                  savedIds={savedIds}
                  onUnsave={handleUnsave}
                />
              }
            />

            <Route
              path="/details/:id"
              element={<DetailsPage recipes={recipes} />}
            />

            <Route path="/security" element={<Security />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </HashRouter>
  );
}
