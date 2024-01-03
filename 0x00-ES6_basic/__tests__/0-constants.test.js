import { taskFirst, getLast, taskNext } from '../0-constants';

describe('Task 0', () => {
  it('should return the correct string for taskFirst', () => {
    expect(taskFirst()).toBe('I prefer const when I can.');
  });

  it('should return the correct string for taskNext', () => {
    expect(taskNext()).toBe('But sometimes let is okay');
  });

  it('should return the correct string for getLast', () => {
    expect(getLast()).toBe(' is okay');
  });
});
