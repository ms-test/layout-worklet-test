export default async function addLayoutWorkletModule(url) {
  if ( globalThis?.CSS?.layoutWorklet ) {
    return await CSS.layoutWorklet.addModule(url);
  } else {
    throw new Error("globalThis.CSS.layoutWorklet does not exist!");
  }
}
