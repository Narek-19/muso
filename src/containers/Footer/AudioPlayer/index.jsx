import React, { useEffect, useRef, useState } from "react";
import * as Styled from "./styled";
import { Controls } from "./Controls";
// import { ProgressBar } from "./ProgressBar";
import { getAudioUrl } from "../../../redux/selectors";
import { connect } from "react-redux";
import { setAudio } from "../../../redux/actions";

const AudioPlayer = (props) => {
  const { audioUrl, setAudio } = props;
  const [progressPersent, setPersent] = useState();
  const audioRef = useRef();

  useEffect(() => {
    setAudio(audioRef.current);
  }, []);

  const ontimeupdate = () => {
    const audio = audioRef.current;
    const persent = (audio.currentTime / audio.duration) * 100;
  };
  return (
    <Styled.AudioPlayer>
      <audio src={audioUrl} ref={audioRef} onTimeUpdate={ontimeupdate}></audio>
      <Controls />
      <ProgressBar />
    </Styled.AudioPlayer>
  );
};

const mapStateToProps = (state) => ({
  audioUrl: getAudioUrl(state),
});

export default connect(mapStateToProps, { setAudio })(AudioPlayer);
