import React, {Fragment, useReducer} from 'react';
import styled from "styled-components";

import ModalTrigger from "./ModalTrigger"
import ModalContent from "./ModalContent"

const Modal = ({ triggerText, buttonText , buttonClick, headerText, role, modalContentItems }) =>  {
    const [state, updateState] = useReducer(
        (state, newState) => ({...state,...newState}),
        {
            isOpen: false
        }
    )

    const openModal = () => {
        updateState({isOpen: true})
    }

    const closeModal = () => {
        updateState({isOpen: false})
    }

    return(
        <Fragment>
            <ModalTrigger 
            onClick={openModal}  
            triggerText={triggerText}/>
            {state.isOpen ? 
            <ModalContent 
                headerText={headerText}
                buttonText={buttonText} 
                onClick={closeModal}
                role={role}
                modalContentItems={modalContentItems}
                buttonClick={buttonClick}
            /> : null }
        </Fragment>
    )
       
        
        
    
}

export default Modal

const StyledText = styled.span`
    font-size: 0.75rem;
    transition: 0.3s all ease-in-out;
    :hover {
        cursor: pointer;
        color: #0e84c9;
    }
`;

// const Wrapper = styled.form`
//     margin: 0 auto;
//     text-align: center;
//     width: 30%;
//     max-width: 50%;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     background: #f1f1f1;
//     border-radius: 5px;
//     @media screen and (max-width: 1000px) {
//         max-width: 70%;
//         width: 70%;
//     }
// `;

