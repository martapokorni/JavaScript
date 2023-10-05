test("returns undefined by default", () => {
  var mock = jest.fn();
  var result = mock("foo");

  expect(result).toBeUndefined();
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledTimes(1);
  expect(mock).toHaveBeenCalledWith("foo");
});

//proučiti dodatno: https://jestjs.io/docs/mock-functions
