import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import DocksEndpointMethod from './DocsEndpointMethod';
import DocsEndpointRunExample from './DocsEndpointRunExample';
import DocsEndpointExample from './DocsEndpointExample';

const ENDPOINT_PREFIX = 'http://localhost:4000/api';

const DocsEndpoint = ({ method, endpoint, exampleEndpoint }) => {
	const [ exampleData, setExampleData ] = useState();

	const flexibleEndpoint = () => {
		const variable = endpoint.split('/').pop();
		const query = variable.split('?');

		if (query.length > 1) {
			return exampleEndpoint.split('=').pop();
		}

		const pre = variable.split('');

		if (pre[0] === ':') {
			pre.shift();
			return exampleEndpoint.split('/').pop();
		}

		return false;
	};

	return (
		<Fragment>
			<StyledDiv>
				<DocksEndpointMethod method={method} />
				<h5 title="Endpoint">
					{ENDPOINT_PREFIX}
					{endpoint}
				</h5>
				<DocsEndpointRunExample
					exampleEndpoint={exampleEndpoint}
					setExampleData={setExampleData}
					canRun={!Boolean(exampleData)}
				/>
			</StyledDiv>
			{exampleData && <DocsEndpointExample exampleData={exampleData} resultFor={flexibleEndpoint()} />}
		</Fragment>
	);
};

export default DocsEndpoint;

const StyledDiv = styled.div`
	padding: 0.5rem;
	border-radius: 6px;
	background-color: #e1f5fe;
	border: 1px solid #b3e5fc;
	margin: 1.5rem 0;
	display: flex;
	flex-direction: row;
	align-items: center;

	h5 {
		margin-bottom: 0;
		font-size: 0.9rem;
		color: #37474f;
		font-weight: 400;
	}
`;
