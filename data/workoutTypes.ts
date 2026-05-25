// src/data/workoutTypes.ts
export const DAYS_TH = ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"];

export const WORKOUT_TYPES = {
  chest: {
    label: "อก (Chest / Push)",
    emoji: "💪",
    color: "#FF6B6B",
    bg: "#2a1515",
    exercises: [
      "Dumbbell Bench Press", "Dumbbell Fly", "Incline DB Press",
      "Incline DB Fly", "Push Up", "Dumbbell Pullover",
      "Tricep Kickback", "Overhead Tricep Extension", "Lateral Raise", "Front Raise"
    ]
  },
  back: {
    label: "หลัง (Back / Pull)",
    emoji: "🔙",
    color: "#4ECDC4",
    bg: "#111f1e",
    exercises: [
      "DB Row", "Single Arm Row", "Bent-Over Row", "Reverse Fly",
      "Shrug", "Bicep Curl", "Hammer Curl", "Concentration Curl",
      "Deadlift (DB)", "Good Morning"
    ]
  },
  legs: {
    label: "ขา (Legs)",
    emoji: "🦵",
    color: "#FFD93D",
    bg: "#1f1c0a",
    exercises: [
      "Goblet Squat", "DB Lunge", "Romanian Deadlift", "Step Up",
      "Sumo Squat", "Calf Raise", "Glute Bridge", "Bulgarian Split Squat",
      "DB Deadlift", "Lateral Lunge"
    ]
  }
};