import Abductors from "/src/assets/exercises_libraries/abductors.png"
import Abs from "/src/assets/exercises_libraries/abs.png"
import Adductors from "/src/assets/exercises_libraries/adductors.png"
import Biceps from "/src/assets/exercises_libraries/biceps.png"
import Calves from "/src/assets/exercises_libraries/calves.png"
import Chest from "/src/assets/exercises_libraries/chest.png"
import Forearms from "/src/assets/exercises_libraries/forearms.png"
import Glutes from "/src/assets/exercises_libraries/glues.png"
import Hamstrings from "/src/assets/exercises_libraries/hamstrings.png"
import Hipflexors from "/src/assets/exercises_libraries/hipflexors.png"
import ITBand from "/src/assets/exercises_libraries/itband.png"
import Lats from "/src/assets/exercises_libraries/lats.png"
import Lowerback from "/src/assets/exercises_libraries/lowerback.png"
import Neck from "/src/assets/exercises_libraries/neck.png"
import Obliques from "/src/assets/exercises_libraries/obliques.png"
import Quads from "/src/assets/exercises_libraries/quads.png"
import Shoulders from "/src/assets/exercises_libraries/shoulders.png"
import Traps from "/src/assets/exercises_libraries/traps.png"
import Triceps from "/src/assets/exercises_libraries/triceps.png"
import Upperback from "/src/assets/exercises_libraries/upperback.png"

const Exercises = [
    {
        exerciseId: 1,
        label: "Abductors",
        img: {
            src: Abductors,
            alt: "Abductors Image"
        },
        exerciseType: "Strength",
        mechanics: "Isolation",
        forceType: "Push",
        expLevel: "Beginner",
        secondMuscle: "Abs, Glutes, Hamstrings",
        videoID: "7pbZA7ncuq8"
    },
    {
        exerciseId: 2,
        label: "Abs",
        img: {
            src: Abs,
            alt: "Abs Image"
        },
        exerciseType: "Strength",
        mechanics: "Isolation",
        forceType: "Pull",
        expLevel: "Beginner",
        secondMuscle: "None",
        videoID: "r24ntO4IvKc"
    },
    {
        exerciseId: 3,
        label: "Adductors",
        img: {
            src: Adductors,
            alt: "Adductors Image"
        },
        exerciseType: "Warmup",
        mechanics: "Compound",
        forceType: "Dynamic Stretching",
        expLevel: "Beginner",
        secondMuscle: "Calves, Hamstrings, Shoulders, Upper Back",
        videoID: "cGQ3H4sZbSM"
    },
    {
        exerciseId: 4,
        label: "Biceps",
        img: {
            src: Biceps,
            alt: "Biceps Image"
        },
        exerciseType: "Strength",
        mechanics: "Isolation",
        forceType: "Pull",
        expLevel: "Beginner",
        secondMuscle: "Forearms",
        videoID: "UeleXjsE-98"
    },
    {
        exerciseId: 5,
        label: "Calves",
        img: {
            src: Calves,
            alt: "Calves Image"
        },
        exerciseType: "Strength",
        mechanics: "Isolation",
        forceType: "Push",
        expLevel: "Beginner",
        secondMuscle: "None",
        videoID: "RcKQbiL-ZOc"
    },
    {
        exerciseId: 6,
        label: "Chest",
        img: {
            src: Chest,
            alt: "Chest Image"
        },
        exerciseType: "Strength",
        mechanics: "Compound",
        forceType: "Push",
        expLevel: "Beginner",
        secondMuscle: "Shoulders, Triceps",
        videoID: "dGqI0Z5ul4k"
    },
    {
        exerciseId: 7,
        label: "Forearms",
        img: {
            src: Forearms,
            alt: "Forearms Image"
        },
        exerciseType: "Strength",
        mechanics: "Isolation",
        forceType: "Pull",
        expLevel: "Beginner",
        secondMuscle: "None",
        videoID: "cOBaYeX3bYo"
    },
    {
        exerciseId: 8,
        label: "Glutes",
        img: {
            src: Glutes,
            alt: "Glutes Image"
        },
        exerciseType: "Strength",
        mechanics: "Isolation",
        forceType: "Push",
        expLevel: "Intermediate",
        secondMuscle: "Abs, Hamstrings",
        videoID: "lAnqN0J_p5A"
    },
    {
        exerciseId: 9,
        label: "Hamstrings",
        img: {
            src: Hamstrings,
            alt: "Hamstrings Image"
        },
        exerciseType: "Strength",
        mechanics: "Compound",
        forceType: "Hing",
        expLevel: "Intermediate",
        secondMuscle: "Abs, Adductors, Calves, Glutes, Lats, Lower Back, Quads, Traps, Upper Back",
        videoID: "CkrqLaDGvOA"
    },
    {
        exerciseId: 10,
        label: "Hip Flexors",
        img: {
            src: Hipflexors,
            alt: "Hip Flexors Image"
        },
        exerciseType: "Warmup",
        mechanics: "Compound",
        forceType: "Dynamic Stretching",
        expLevel: "Beginner",
        secondMuscle: "Glutes",
        videoID: "i_skOyupPm0"
    },
    {
        exerciseId: 11,
        label: "IT Band",
        img: {
            src: ITBand,
            alt: "IT Band Image"
        },
        exerciseType: "SMR",
        mechanics: "Isolation",
        forceType: "Compression",
        expLevel: "Beginner",
        secondMuscle: "None",
        videoID: "MmeTBH7AScQ"
    },
    {
        exerciseId: 12,
        label: "Lats",
        img: {
            src: Lats,
            alt: "Lats Image"
        },
        exerciseType: "Strength",
        mechanics: "Compound",
        forceType: "Pull",
        expLevel: "Beginner",
        secondMuscle: "Abs, Biceps, Shoulders, Upper Back",
        videoID: "iKrKgWR9wbY"
    },
    {
        exerciseId: 13,
        label: "Lower Back",
        img: {
            src: Lowerback,
            alt: "Lower Back Image"
        },
        exerciseType: "Strength",
        mechanics: "Isolation",
        forceType: "Hinge",
        expLevel: "Beginner",
        secondMuscle: "Glutes",
        videoID: "D07urmRplHQ"
    },
    {
        exerciseId: 14,
        label: "Neck",
        img: {
            src: Neck,
            alt: "Neck Image"
        },
        exerciseType: "SMR",
        mechanics: "Isolation",
        forceType: "Compression",
        expLevel: "Beginner",
        secondMuscle: "None",
        videoID: "C8hJmUXlogA"
    },
    {
        exerciseId: 15,
        label: "Obliques",
        img: {
            src: Obliques,
            alt: "Obliques Image"
        },
        exerciseType: "Strength",
        mechanics: "Compound",
        forceType: "Isometric",
        expLevel: "Beginner",
        secondMuscle: "Abs",
        videoID: "rwC-ne5u7Uc"
    },
    {
        exerciseId: 16,
        label: "Quads",
        img: {
            src: Quads,
            alt: "Quads Image"
        },
        exerciseType: "Strength",
        mechanics: "Compound",
        forceType: "Push",
        expLevel: "Beginner",
        secondMuscle: "Abs, Adductors, Calves, Glutes, Hamstrings, Lower Back",
        videoID: "sEM_zo9w2ss"
    },
    {
        exerciseId: 17,
        label: "Shoulders",
        img: {
            src: Shoulders,
            alt: "Shoulders Image"
        },
        exerciseType: "Strength",
        mechanics: "Compound",
        forceType: "Intermediate",
        expLevel: "Abs, Traps, Triceps",
        secondMuscle: "j7ULT6dznNc",
        videoID: ""
    },
    {
        exerciseId: 18,
        label: "Traps",
        img: {
            src: Traps,
            alt: "Traps Image"
        },
        exerciseType: "Strengths",
        mechanics: "Isolation",
        forceType: "Pull",
        expLevel: "Beginner",
        secondMuscle: "Shoulders, Upper Back",
        videoID: "dj2Gm628kas"
    },
    {
        exerciseId: 19,
        label: "Triceps",
        img: {
            src: Triceps,
            alt: "Triceps Image"
        },
        exerciseType: "Strengths",
        mechanics: "Compound",
        forceType: "Push",
        expLevel: "Beginner",
        secondMuscle: "Chest, Shoulders",
        videoID: "j-NhORwJDb4"
    },
    {
        exerciseId: 20,
        label: "Upper Back",
        img: {
            src: Upperback,
            alt: "Upper Back Image"
        },
        exerciseType: "Strength",
        mechanics: "Compound",
        forceType: "Pull",
        expLevel: "Beginner",
        secondMuscle: "Abs, Biceps, Lats, Lower Back, Shoulders",
        videoID: "paCfxhgW6bI"
    }
];

export default Exercises;
