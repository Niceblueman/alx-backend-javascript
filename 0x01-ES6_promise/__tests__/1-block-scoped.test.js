import taskBlock from '../1-block-scoped';

describe('Task 1', () => {
  it('should return the correct array for true condition', () => {
    expect(taskBlock(true)).toEqual([false, true]);
  });

  it('should return the correct array for false condition', () => {
    expect(taskBlock(false)).toEqual([false, true]);
  });
});
