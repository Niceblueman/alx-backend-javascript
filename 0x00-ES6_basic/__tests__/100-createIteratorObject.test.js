import createIteratorObject from '../100-createIteratorObject';

describe('Task 100', () => {
  it('should return the correct iterator values', () => {
    const report = {
      allEmployees: {
        engineering: ['John Doe', 'Guillaume Salva'],
      },
    };
    const iteratorObject = createIteratorObject(report);
    const iteratorValues = [...iteratorObject];
    expect(iteratorValues).toEqual(['John Doe', 'Guillaume Salva']);
  });
});
