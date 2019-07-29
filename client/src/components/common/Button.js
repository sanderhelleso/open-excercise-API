import React from 'react'
import styled from 'styled-components'

const Button = ({text, onClick, primary}) => {
    return(
        <StyledBtn
                onClick={onClick}
                primary={primary}
            >
                {text}
        </StyledBtn>
    )
    
}   

export default Button;

const StyledBtn = styled.button`
width: 100%;
border: none;
color: #fff;
background: ${props => {
    if(props.primary) return "#139ff2";
}};
padding: 0.75rem;
margin-bottom: 1.5rem;
transition: 0.3s all ease-in-out;
:hover {
    background: #0e84c9;
    cursor: pointer;
}
 `
