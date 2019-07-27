import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { formatDocsLink } from '../../../lib/docsSections';
import DocsNavigatorItem from './DocsNavigatorItem';

const DocsNavigator = () => {
	const [ inited, setInited ] = useState(false);
	const [ items, setItems ] = useState([]);
	const [ active, setActive ] = useState(0);

	useEffect(() => {
		const sections = document.querySelectorAll('.docs-section');
		setItems(Array.from(sections));
		setInited(true);
	}, []);

	useEffect(
		() => {
			if (inited) {
				const main = document.querySelector('#main-container');
				main.addEventListener('scroll', handleScroll);

				return () => main.removeEventListener('scroll', handleScroll);
			}
		},
		[ inited ]
	);

	const handleScroll = ({ target: { scrollTop } }) => {
		items.forEach((item, i) => {
			const { top, bottom } = item.getBoundingClientRect();
			if (scrollTop >= top && scrollTop <= bottom) {
				setActive(i);
			}
		});
	};

	const renderItems = () => {
		return items.map((item, i) => {
			const title = Array.from(item.childNodes).shift().innerText;
			return (
				<DocsNavigatorItem
					key={`docs-navigator-item-${i}`}
					title={title}
					active={active === i}
					showSep={i !== items.length - 1}
				/>
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
