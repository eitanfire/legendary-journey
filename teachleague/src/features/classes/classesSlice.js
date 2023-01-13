import { CLASSES } from "../../app/shared/CLASSES";

export const selectAllCourses = () => {
  return CLASSES;
};

export const selectRandomCourse = () => {
    return CLASSES[Math.floor(CLASSES.length * Math.random())];
};