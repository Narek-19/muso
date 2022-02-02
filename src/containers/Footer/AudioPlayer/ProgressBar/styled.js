import styled from "styled-components";

export const ProgressBar = styled.div`
  width: 100%;
  height: 30px;

  background: linear-gradient(
    0deg,
    rgba(11, 160, 162, 1) 0%,
    rgba(161, 233, 235, 1) 100%
  );
`;

export const progress = styled.div`
  width:${(props)=> props.res + 'px'};
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(1, 106, 112, 1) 0%,
    rgba(9, 238, 245, 1) 100%
  );
`;
