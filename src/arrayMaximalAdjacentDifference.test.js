const solution = require('./arrayMaximalAdjacentDifference.js');

test('test 1', () => {
    expect(solution([2, 4, 1, 0])).toBe(3);
});

test('test 2', () => {
    expect(solution([1, 1, 1, 1])).toBe(0);
});

test('test 3', () => {
    expect(solution([-1, 4, 10, 3, -2])).toBe(7);
});

test('test 4', () => {
    expect(solution([10, 11, 13])).toBe(2);
});

test('test 5', () => {
    expect(solution([-2, -2, -2, -2, -2])).toBe(0);
});

test('test 6', () => {
    expect(solution([-1, 1, -3, -4])).toBe(4);
});

test('test 7', () => {
    expect(solution([-14, 15, -15])).toBe(30);
});
