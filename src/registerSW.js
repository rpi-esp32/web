	window.addEventListener('load', () => {registerSW();});
	async function registerSW() {
	if ('serviceWorker' in navigator) {
		try {
		console.log('serviceWorker is in NAVIGATOR');
		await navigator.serviceWorker.register('/web/sw.js', {scope: '/web/'});
		console.log('registration of /web/sw.js is a success');}
		catch (e) {console.log(e);}
	}}
