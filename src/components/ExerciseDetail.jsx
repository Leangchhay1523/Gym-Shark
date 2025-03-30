// ExerciseDetail.js
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import ExercisesData from "./../data/ExerciseLibrary.js";

export default function ExerciseDetail() {
  const { exerciseId } = useParams(); // Get the exerciseId from the URL
  const exercise = ExercisesData.find(
    (ex) => ex.exerciseId === parseInt(exerciseId)
  );

  if (!exercise) {
    return <p>Exercise not found</p>; // Error handling if exercise not found
  }

  return (
    <div className="exercise-detail">
      <div className="vdo-section">
        <p className="vdo-title">{exercise.label} Exercise Video Guide</p>
        <div className="vdo-container">
          <YouTube videoId={exercise.videoID} />
        </div>
      </div>
      <div className="exercise-profile-section">
        <p className="exercise-profile-label">Exercise Profile</p>
        <div className="exercise-profile-detail">
          <div className="detail-label">
            <p>Target Muscle Group</p>
            <p>Exercise Type</p>
            <p>Mechanics</p>
            <p>Force Type</p>
            <p>Experience Level</p>
            <p>Secondary Muscles</p>
          </div>
          <div className="detail-values">
            <p>{exercise.label}</p>
            <p>{exercise.exerciseType}</p>
            <p>{exercise.mechanics}</p>
            <p>{exercise.forceType}</p>
            <p>{exercise.expLevel}</p>
            <p>{exercise.secondMuscle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
