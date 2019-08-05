import React, { Fragment, useState } from "react";

import ModalTrigger from "./ModalTrigger";
import ModalContent from "./ModalContent";

const Modal = ({
    triggerText,
    buttonText,
    buttonClick,
    headerText,
    role,
    modalContentItems
}) => {
    const [isShowing, setIsShowing] = useState(false);

    const openModal = () => {
        setIsShowing(true);
    };

    const closeModal = () => {
        setIsShowing(false);
    };

    const onKeyDown = ({ keyCode }) => keyCode === 27 && closeModal();

    return (
        <Fragment>
            <ModalTrigger onClick={openModal} triggerText={triggerText} />
            {isShowing ? (
                <ModalContent
                    onKeyDown={onKeyDown}
                    headerText={headerText}
                    buttonText={buttonText}
                    onClick={closeModal}
                    role={role}
                    modalContentItems={modalContentItems}
                    buttonClick={buttonClick}
                />
            ) : null}
        </Fragment>
    );
};

export default Modal;
