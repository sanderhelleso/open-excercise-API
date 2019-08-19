export default () => {
	const urlParams = new URLSearchParams(window.location.search);
	return urlParams.get('code');
};
