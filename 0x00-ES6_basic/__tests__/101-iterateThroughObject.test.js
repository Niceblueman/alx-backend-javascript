import iterateThroughObject from '../101-iterateThroughObject';

describe('Task 101', () => {
  it('should return the correct string with employee names separated by |', () => {
    const reportWithIterator = {
      allEmployees: {
        engineering: ['John Doe', 'Guillaume Salva'],
        marketing: ['Kanye East', 'Jay Li'],
      },
    };
    const result = iterateThroughObject(reportWithIterator);
    expect(result).toBe('John Doe | Guillaume Salva | Kanye East | Jay Li');
  });
});
