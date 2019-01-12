import styled from "styled-components";
import { transition_regular } from "./_variables";

export const AnimDisplay = styled.div`
    transform-origin: center;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    animation-duration: ${transition_regular};
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
`;
