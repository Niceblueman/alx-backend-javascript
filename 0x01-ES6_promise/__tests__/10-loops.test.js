import appendToEachArrayValue from '../10-loops';

describe('Task 10', () => {
  it('should return the correct array after appending', () => {
    const result = appendToEachArrayValue(['appended', 'fixed', 'displayed'], 'correctly-');
    expect(result).toEqual(['correctly-appended', 'correctly-fixed', 'correctly-displayed']);
  });
});
