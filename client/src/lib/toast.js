export default (toastManager, error, message) => {
	toastManager.add(message, {
		appearance: error ? 'error' : 'success',
		autoDismiss: true
	});
};
