import Banner from "./../assets/exercises_libraries/banner.png";

export default function ExerciseHeader() {
  return (
    <div className="exercise-header">
      <div className="exercise-banner-container">
        <p className="exercise-video">Exercises Videos</p>
      </div>
      <div className="header-messages">
        <p className="exercise-header-message">Exercise by Muscle Group</p>
        <p className="exercise-header-detail">
          Choose exercises base on muscle group that you want to target. Find
          exercises for the equipment that you have.{" "}
        </p>
      </div>
    </div>
  );
}
