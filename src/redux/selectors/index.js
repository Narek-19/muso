import { createSelector } from "reselect";
export const getProject = (state) => state.project;
export const getGlobal = (state) => state.global;

export const getAudioUrl = createSelector(getProject, (project) => {
  return project.audioUrl;
});
export const getAudioElement = createSelector(getGlobal,(global)=>{
  return global.audio;
});