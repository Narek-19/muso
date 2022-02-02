export const setAudio = (state, action) => {
  const stateClone = { ...state };
  stateClone.audio = action.payload;
  return stateClone;
};
