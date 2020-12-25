// vim: set ts=2 sw=2 tw=0 et :

//export default async function registerServiceWorker(script, options) {
//	const regPromise = globalThis?.navigator?.serviceWorker?.register?.(script, options);
//	if ( regPromise ) {
//		try {
//			const registration = await regPromise;
//			console.log('Registered service worker!', registration);
//		} catch ( error ) {
//			console.log('Registration of service worker failed!', error);
//		}
//	} else {
//		console.log('Service workers are not supported by this client!');
//	}
//}

//export default async function registerServiceWorker(script, options) {
//  return globalThis?.navigator?.serviceWorker?.register?.(script, options) || unsupportedRejection;
//}

const registerServiceWorker = (script, options) =>
  globalThis?.navigator?.serviceWorker?.register?.(script, options) ||
    Promise.reject(new Error('Service workers are not supported by this client!'));

export default registerServiceWorker;
