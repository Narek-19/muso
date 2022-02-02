import styled from "styled-components"

export const PlayBtn = styled.img`
    width: 40px;
    display: ${(props) => props.btnType === "play" ? 'block' : "none"};
    cursor:pointer;
`
export const PauseBtn = styled.img`
    width: 40px;
    display:none;
    cursor: pointer;
    display: ${(props) => props.btnType === "pause" ? 'block' : "none"};
`