export default (toastManager, error, message) => {
	if (Array.isArray(message)) {
		message = message.toString();
	} else if (typeof message == 'object') {
		message = message.message;
	}

	toastManager.add(message, {
		appearance: error ? 'error' : 'success',
		autoDismiss: true
	});
};
