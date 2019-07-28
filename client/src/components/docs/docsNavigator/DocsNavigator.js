import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DocsNavigatorItem from './DocsNavigatorItem';

const DocsNavigator = () => {
	const [ items, setItems ] = useState([]);

	useEffect(() => {
		const sections = document.querySelectorAll('.docs-section');
		setItems(Array.from(sections));
	}, []);

	const renderItems = () => {
		return items.map((item, i) => {
			const title = Array.from(item.childNodes).shift().innerText;
			return (
				<DocsNavigatorItem key={`docs-navigator-item-${i}`} title={title} showSep={i !== items.length - 1} />
			);
		});
	};

	return <StyledNavigator>{renderItems()}</StyledNavigator>;
};

export default DocsNavigator;

const StyledNavigator = styled.div`
	position: fixed;
	width: 160px;
	display: flex;
	flex-direction: column;
	margin-left: 1100px;
	margin-top: 2.5rem;

	@media screen and (max-width: 1850px) {
		margin-left: 1075px;
	}

	@media screen and (max-width: 1720px) {
		margin-left: 950px;
	}

	@media screen and (max-width: 1500px) {
		margin-left: 850px;
	}

	@media screen and (max-width: 1350px) {
		margin-left: 800px;
	}

	@media screen and (max-width: 1275px) {
		display: none;
	}
`;
