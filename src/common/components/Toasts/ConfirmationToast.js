import React from "react";
import styled from "styled-components";
import { Toast } from "./Toast";
import { diff_fluent_mix, diff_confirmation_green } from "../_variables";

const StyledToast = styled(Toast)`
    background: ${diff_fluent_mix};

    > span::before {
        color: ${diff_confirmation_green};
    }
`;

export const ConfirmationToast = props => {
    const { children } = props;
    return (
        <StyledToast {...props}>
            <span>{children}</span>
        </StyledToast>
    );
};
