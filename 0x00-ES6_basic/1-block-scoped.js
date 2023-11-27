export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    /*
    Lets disable eslint for the next two lines,
    so it doesn't cry about unused consts
    Single line disable: "// eslint-disable-next-line",
    Block disable: ...'
    */

    /* eslint-disable */
    const task = true;
    const task2 = false;
    /* eslint-enable */
  }
  return [task, task2];
}
