import React, { useEffect } from 'react';

import openSocket from 'socket.io-client';

const userID = '123';

const SocketTest = () => {
	useEffect(() => {
		const socket = openSocket('http://localhost:4001');
		socket.emit('recieve_user_id', userID);

		socket.on('recieve_user_id', (data) => console.log(data));
	}, []);

	return (
		<div>
			<h1>Socket Test</h1>
		</div>
	);
};

export default SocketTest;
