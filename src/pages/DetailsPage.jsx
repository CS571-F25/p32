import { useParams } from "react-router";

import DetailsView from "../components/DetailsView";

export default function DetailsPage({ recipes }) {
  const { id } = useParams();
  const recipe = recipes.find(r => r.id === Number(id));

  return <DetailsView recipe={recipe} />;
}