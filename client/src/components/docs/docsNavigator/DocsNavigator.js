import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { formatDocsLink } from '../../../lib/docsSections';
import DocsNavigatorItem from './DocsNavigatorItem';

const DocsNavigator = () => {
	const [ items, setItems ] = useState([]);

	useEffect(() => {
		const sections = document.querySelectorAll('.docs-section');
		setItems(Array.from(sections));
	}, []);

	const renderItems = () => {
		console.log(items);
		return items.map((item, i) => {
			const title = Array.from(item.childNodes).shift().innerText;
			return <DocsNavigatorItem key={`docs-navigator-item-${i}`} title={title} i={i} />;
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
