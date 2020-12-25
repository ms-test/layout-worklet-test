export default async function addPaintWorkletModule(url) {
  if ( globalThis?.CSS?.paintWorklet ) {
    return await globalThis?.CSS.paintWorklet.addModule(url);
  } else {
    throw new Error("globalThis.CSS.paintWorklet does not exist!");
  }
}
