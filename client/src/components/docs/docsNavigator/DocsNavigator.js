import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { formatDocsLink } from '../../../lib/docsSections';
import DocsNavigatorItem from './DocsNavigatorItem';

const DocsNavigator = () => {
	const [ items, setItems ] = useState([]);
	const [ active, setActive ] = useState();

	useEffect(() => {
		const main = document.querySelector('#main-container');
		main.addEventListener('scroll', handleScroll);

		const sections = document.querySelectorAll('.docs-section');
		setItems(Array.from(sections));

		return () => main.removeEventListener('scroll', handleScroll);
	}, []);

	const handleScroll = ({ target: { scrollTop } }) => {
		console.log(scrollTop);
	};

	const renderItems = () => {
		console.log(items);
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
	position: absolute;
	top: 5rem;
	right: 3rem;
	width: 150px;
	display: flex;
	flex-direction: column;
`;
