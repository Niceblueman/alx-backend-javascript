import createIteratorObject from "../100-createIteratorObject.js";

import createEmployeesObject from '../11-createEmployeesObject.js';
import createReportObject from '../12-createReportObject.js';
describe('Task 100', () => {
    it('should return the correct iterator values', () => {
        const employees = {
            ...createEmployeesObject('engineering', ['Bob', 'Jane']),
            ...createEmployeesObject('marketing', ['Sylvie'])
        };
        
        const report = createReportObject(employees);

        const reportWithIterator = createIteratorObject(report);
        expect(reportWithIterator).toStrictEqual(["Bob", "Jane", "Sylvie"]);
    });
});
