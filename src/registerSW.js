	window.addEventListener('load', () => {registerSW();});
	// Register the Service Worker
	async function registerSW() {
	if ('serviceWorker' in navigator) {
		try {
		await navigator.serviceWorker.register('/web/sw.js', {scope: '/web/'});
		catch (e) {console.log(e);}
	}}
