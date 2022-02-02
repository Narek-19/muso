import { setAudio } from "./producer"

const initialState = {
    audio:null,
}

const global = (state = initialState,action ) => {
    switch(action.type){
        case "SET_AUDIO":
           return setAudio(state,action); 
        default:
            return state;
    }
};
export default global;