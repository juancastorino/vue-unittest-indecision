describe('Example', () => {
  test('Debe de ser mayor a 10', () => {
    let value = 1;

    value = value + 2;

    if (value > 10) {

    } else {
      throw `${value} todo mal`;
    }
  });
});