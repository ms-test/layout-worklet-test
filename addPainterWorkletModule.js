export default async function addPainterWorkletModule(url) {
  if ( globalThis?.CSS?.painterWorklet ) {
    return await globalThis?.CSS.painterWorklet.addModule(url);
  } else {
    throw new Error("globalThis.CSS.painterWorklet does not exist!");
  }
}
