import React from 'react';
import DocsResponse from './DocsResponse';

const responses = [
	{
		code: 200,
		desc: 'The request was successful with data',
		success: true
	},
	{
		code: 401,
		desc: 'Missing or invalid API Key'
	},
	{
		code: 404,
		desc: 'No data was found'
	}
];

const DocsResponses = () => {
	const renderResponses = () => {
		return responses.map((response) => <DocsResponse {...response} />);
	};

	return (
		<section>
			<h2>Responses</h2>
			{renderResponses()}
		</section>
	);
};

export default DocsResponses;
