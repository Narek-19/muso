import React, { useState } from "react";
import { connect } from "react-redux";
import { getAudioElement } from "../../../../../redux/selectors";
import * as Styled from "./styled";

const Buttons = (props) => {
  const [btnType, setBtnType] = useState("play");
  const { audioElement } = props;

  const playAudio = () => {
    audioElement.play();
    setBtnType("pause");
  };
  const pauseAudio = () => {
    audioElement.pause();
    setBtnType("play");
  };

  return (
    <>
      <Styled.PlayBtn
        src="./Images/Controls/playBtn.png"
        onClick={playAudio}
        btnType={btnType}
      ></Styled.PlayBtn>

      <Styled.PauseBtn
        src="./Images/Controls/pauseBtn.png"
        onClick={pauseAudio}
        btnType={btnType}
      ></Styled.PauseBtn>
    </>
  );
};
const mapStateToProps = (state) => ({
  audioElement: getAudioElement(state),
});
export default connect(mapStateToProps)(Buttons);
