const initialState = {
  audioUrl: "musics/Adele-EasyOnMe.mp3",
  displayColor: "black",
  duration: 186,
  audioChunks: [
    {
      id: 1,
      start: 5,
      end: 25,
      textParams: {
        text: "Some Text",
        coordinates: [120, 190],
      },
    },
  ],
};
const project = (state = initialState, action) => {
  return state;
};
export default project;
