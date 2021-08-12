describe('Example', () => {
  test('Debe de ser mayor a 10', () => {
    let value = 11;

    value = value + 2;

    expect(value).toBeGreaterThan(10);
  });
});