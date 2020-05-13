export const sleep = (msecs) =>
  new Promise((resolve) => setTimeout(resolve, msecs));
