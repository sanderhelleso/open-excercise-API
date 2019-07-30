import React from 'react'
import styled from 'styled-components'

const ModalTrigger = ({triggerText, onClick}) => {
    return <StyledSpan tabIndex="0" onClick={onClick}>{triggerText}</StyledSpan>
}
export default ModalTrigger

const StyledSpan = styled.p`
    color: #000;
    font-size: 0.75rem;
    transition: 0.3s all ease-in-out;
    margin-bottom: 1rem;
    :hover {
        cursor: pointer;
        color: #0e84c9;
    }
`