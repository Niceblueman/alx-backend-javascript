export default function createIteratorObject(report) {
  const iterator = Object.values(report.allEmployees).reduce((a,b)=>a.concat(b));
  return iterator;
}
