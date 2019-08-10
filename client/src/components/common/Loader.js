import React from 'react';
import styled, { css } from 'styled-components';
import { MoonLoader } from 'react-spinners';
import { fadeIn, fadeOut } from '../../lib/keyframes';

export const LoaderCont = styled.main`
	animation: ${({ loading }) => (loading ? css`${fadeIn} 0.3s;` : css`${fadeOut} 0.5s;`)} ease forwards;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	span {
		margin-bottom: 3rem;
	}
`;

const Loader = ({ size, color }) => <MoonLoader sizeUnit={'px'} size={size} color={color} loading={true} />;

export default Loader;
