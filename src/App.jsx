import {HashRouter,Routes,Route} from 'react-router'
import './App.css'
import MyNavbar from "./components/Navbar";

import SearchPage from "./pages/SearchPage";
import SavedPage from "./pages/SavedPage";
import DetailsPage from "./pages/DetailsPage";
import Security from "./components/Security";
import recipes from "./recipes";
import { useState } from "react";


function App() {
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
      <MyNavbar />

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
    </HashRouter>
  );
}

export default App
