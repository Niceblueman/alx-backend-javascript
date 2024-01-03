import createEmployeesObject from "../11-createEmployeesObject.js";
import createReportObject from '../12-createReportObject.js';
import createIteratorObject from '../100-createIteratorObject.js';
import iterateThroughObject from '../101-iterateThroughObject.js';

describe('Task 101', () => {
    it('should return the correct string with employee names separated by |', () => {

        const employees = {
            ...createEmployeesObject('engineering', ['Bob', 'Jane']),
            ...createEmployeesObject('marketing', ['Sylvie'])
        };

        const report = createReportObject(employees);
        const reportWithIterator = createIteratorObject(report);

        const result = iterateThroughObject(reportWithIterator);
        expect(result).toBe('Bob | Jane | Sylvie');
    });
});
