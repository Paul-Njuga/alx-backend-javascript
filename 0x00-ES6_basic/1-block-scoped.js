export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    /*
    Lets disable eslint for the next two lines,
    so it doesn't cry about unused consts
    */
    // eslint-disable-next-line
    const task = true;
    // eslint-disable-next-line
    const task2 = false;
  }
  return [task, task2];
}
