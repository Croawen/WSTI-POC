import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled, { css } from "styled-components";

import {
    acceleration_default,
    transition_regular,
    transition_regular_num,
} from "../../components/_variables";
import { generateId } from "../../utils/helpers/generateId";
import { ConfirmationToast } from "./ConfirmationToast";
import { WarningToast } from "./WarningToast";

export const ToastTypes = {
    Warning: 1,
    Confirmation: 2,
};

const animationName = "toast-animation";
const animationCss = css`
    &.${animationName}-enter-active {
        animation-name: animAddToCart;
        animation-timing-function: ${acceleration_default};
        animation-duration: ${transition_regular};
    }

    &.${animationName}-exit {
        animation-name: animRemoveFromCart;
        animation-timing-function: ${acceleration_default};
        animation-duration: ${transition_regular};
    }
`;

const Container = styled.div`
    position: fixed;
    right: 10px;
    bottom: 10px;
`;

export class ToastContainer extends React.Component {
    static container;
    static warning(children) {
        if (!ToastContainer.container) return;
        ToastContainer.container.addToast(ToastTypes.Warning, children);
    }

    static confirmation(children) {
        if (!ToastContainer.container) return;
        ToastContainer.container.addToast(ToastTypes.Confirmation, children);
    }

    constructor(props) {
        super(props);

        this.timeout = this.props.timeout || 7000;
        this.state = {
            toasts: [],
            timeouts: [],
        };
    }

    componentDidMount() {
        ToastContainer.container = this;
    }

    getToastElement(toast) {
        let ToastType;

        switch (toast.type) {
            case ToastTypes.Warning:
                ToastType = WarningToast;
                break;

            case ToastTypes.Confirmation:
                ToastType = ConfirmationToast;
                break;
            default:
                break;
        }

        return (
            <ToastType
                animation={animationCss}
                onClick={() => this.onToastClick(toast.id)}
            >
                {toast.children}
            </ToastType>
        );
    }

    onToastClick(key) {
        const toasts = this.state.toasts;
        const idx = this.state.toasts.findIndex(t => t.id === key);
        toasts.splice(idx, 1);
        this.setState({
            toasts,
        });
    }

    addToast(toastType, children) {
        if (!ToastContainer.container)
            // eslint-disable-next-line no-console
            return console.warn("No container found!");
        const toasts = this.state.toasts;
        const timeouts = this.state.timeouts;
        let toast = {
            id: generateId(),
            type: toastType,
            children,
        };

        toasts.push(toast);
        timeouts.push(
            setTimeout(() => this.onToastClick(toast.id), this.timeout)
        );

        this.setState({ toasts, timeouts });
    }

    render() {
        return (
            <Container>
                <TransitionGroup>
                    {this.state.toasts.map(toast => {
                        return (
                            <CSSTransition
                                key={toast.id}
                                timeout={transition_regular_num}
                                classNames={animationName}
                            >
                                {this.getToastElement(toast)}
                            </CSSTransition>
                        );
                    })}
                </TransitionGroup>
            </Container>
        );
    }

    componentWillUnmount() {
        this.state.timeouts.map(t => clearTimeout(t));
    }
}
