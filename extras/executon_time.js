function measureExecutionTime(fn) {
  return function (...args) {
    console.time("Execution Time");
    const result = fn(...args);
    console.timeEnd("Execution Time");
    return result;
  };
}

module.exports = measureExecutionTime;