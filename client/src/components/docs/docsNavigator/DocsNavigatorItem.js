import React from 'react';
import { formatDocsLink } from '../../../lib/docsSections';

const DocsNavigatorItem = ({ title }) => {
	return <a href={formatDocsLink(title)}>{title}</a>;
};

export default DocsNavigatorItem;
