import styled from "styled-components";
import { corners_s, diff_white, font_xs, num_l } from "../_variables";
import { AnimDisplay } from "../AnimDisplay";

export const Toast = styled(AnimDisplay)`
    position: relative;
    font: ${font_xs};
    padding: ${num_l} ${num_l} ${num_l} ${num_l};
    border-radius: ${corners_s};
    max-width: 180px;
    margin-top: 10px;
    cursor: pointer;

    > span {
        position: relative;
        display: inline-block;
        color: ${diff_white};
    }

    /* Inject animation */
    ${props => props.animation}
`;
