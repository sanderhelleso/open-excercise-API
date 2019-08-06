import React, { Fragment, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { X } from "react-feather";
import ModalTrigger from "./ModalTrigger";
import ModalContent from "./ModalContent";

const Portal = ({ children }) => {
    const modalRoot = document.getElementById("portal");
    const el = document.createElement("div");

    useEffect(() => {
        modalRoot.appendChild(el);
    }, []);
    useEffect(() => {
        return () => modalRoot.removeChild(el);
    });
    return createPortal(children, el);
};

const Modal = ({
    triggerText,
    // buttonText,
    // buttonClick,
    // headerText,
    // role,
    // modalContentItems
    children
}) => {
    const [isShowing, setIsShowing] = useState(false);

    const openModal = () => {
        setIsShowing(true);
    };

    const closeModal = () => {
        setIsShowing(false);
    };

    return (
        <Fragment>
            <ModalTrigger onClick={openModal} triggerText={triggerText} />
            {isShowing ? (
                // <ModalContent
                //     onKeyDown={onKeyDown}
                //     headerText={headerText}
                //     buttonText={buttonText}
                //     onClick={closeModal}
                //     role={role}
                //     modalContentItems={modalContentItems}
                //     buttonClick={buttonClick}
                // />
                <Portal>
                    <StyledModalCover onClick={closeModal}>
                        <StyledModal onClick={e => e.stopPropagation()}>
                            <X className="close" onClick={closeModal} />
                            {children}
                        </StyledModal>
                    </StyledModalCover>
                </Portal>
            ) : null}
        </Fragment>
    );
};

export default Modal;

const StyledModalCover = styled.aside`
    transform: translateY(-100vh);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    transition: all 10s;

    transform: translateZ(0);
    background-color: #0000004d;

    -webkit-animation: fadein 0.5s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 0.5s; /* Firefox < 16 */
    -ms-animation: fadein 0.5s; /* Internet Explorer */
    -o-animation: fadein 0.5s; /* Opera < 12.1 */
    animation: fadein 0.5s;

    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    /* Firefox < 16 */
    @-moz-keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    /* Safari, Chrome and Opera > 12.1 */
    @-webkit-keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    /* Internet Explorer */
    @-ms-keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    /* Opera < 12.1 */
    @-o-keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

const StyledModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 2.5em 1.5em 1.5em 1.5em;
    background-color: #ffffff;
    box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;

    @media screen and (min-width: 250px) {
        left: 50%;
        top: 50%;
        height: auto;
        transform: translate(-50%, -50%);
        max-width: 30%;
    }

    @media screen and (max-width: 768px) {
        max-width: 85%;
    }

    .close {
        position: absolute;
        top: 0;
        right: 0;
        padding: 1rem;

        :hover {
            color: red;
            cursor: pointer;
        }
    }
`;
