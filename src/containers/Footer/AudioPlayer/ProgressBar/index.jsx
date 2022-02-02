import React, { useContext, useEffect, useRef, useState } from "react";
import * as Styled from "./styled";


export const ProgressBar = React.memo(() => {

  console.log("r");
  const audio = useContext(AudioContext);
  const progressRef = useRef(null);
  const { audioRef } = audio;

  const res = (progressRef.current.clientWidth * persent) / 100;
  setPersent(res);

  return (
    <Styled.ProgressBar ref={progressRef}>
      <Styled.progress res={res}></Styled.progress>
    </Styled.ProgressBar>
  );
});
