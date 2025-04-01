// ExerciseCard.js
import { Link } from "react-router-dom";

export default function ExerciseCard({ data }) {
  return (
    <div className="exercise-card">
      <Link to={`/exercise/${data.exerciseId}`}>
        <img src={data.img.src} alt={data.img.alt} />
        <p className="exercise-label">{data.label}</p>
      </Link>
    </div>
  );
}
