import React, { useEffect } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import Button from '../Button';
import { X } from 'react-feather';

const ModalContent = ({
	role = 'dialog',
	buttonClick,
	modalContentItems,
	onClick,
	buttonText,
	headerText,
	onKeyDown
}) => {
	return ReactDOM.createPortal(
		<StyledModalCover role={role} aria-modal="true" tabIndex="-1" onClick={onClick}>
			<StyledModal onClick={(e) => e.stopPropagation()}>
				<X className="close" onClick={onClick} />
				<StyledHeader>
					<StyledH1>{headerText}</StyledH1>
				</StyledHeader>
				<StyledContent>
					{modalContentItems}
				</StyledContent>
				<Button text={buttonText} onClick={buttonClick} primary />
			</StyledModal>
		</StyledModalCover>,
		document.body
	);
};

export default ModalContent;

const StyledModalCover = styled.aside`
	transform: translateY(-100vh);
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 10;
	transition: all 0.8s;
	transform: translateZ(0);
	background-color: #0000004d;
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

const StyledHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 1rem;
`;

const StyledH1 = styled.h1`margin: 0;`;
const StyledContent = styled.div`
	margin-bottom: 1rem;
	text-align: center;
	display: flex;
	flex-direction: column;
`;
