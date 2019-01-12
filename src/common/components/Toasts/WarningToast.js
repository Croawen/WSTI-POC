import React from "react";
import styled from "styled-components";
import { Toast } from "./Toast";
import { diff_alert_orange, diff_fluent_mix } from "../_variables";

const StyledToast = styled(Toast)`
    background: ${diff_fluent_mix};

    > span::before {
        color: ${diff_alert_orange};
    }
`;

export const WarningToast = props => {
    const { children } = props;
    return (
        <StyledToast {...props}>
            <span>{children}</span>
        </StyledToast>
    );
};
