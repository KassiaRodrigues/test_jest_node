const { sum } = require('./../src/soma'); // nome do arquivo JS

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3); //função JS
});
