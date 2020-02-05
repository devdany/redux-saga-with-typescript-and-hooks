let initialNumber = 0;

export const generateNewNumber = (increaseCount: number): Promise<number> => {
  const promise = new Promise<number>(resolve => {
    setTimeout(() => {
      initialNumber += increaseCount;
      resolve(initialNumber);
    }, 500);
  });

  return promise;
};
