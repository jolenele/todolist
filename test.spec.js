function sum(a, b) {
  return a + b;
}

describe('test function', () => {
  it('sums up two integers', () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
