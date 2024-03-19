//forEach method code to remove duplicates in an array

'use strict';

debugger;

const arr = ['banana', 'apple', 'orange', 'lemon', 'apple', 'lemon'];
function removeDuplicates(list) {
  if (!Array.isArray(list)) {
    throw new Error('Input must be an array');
  }

  let unique = [];
  list.forEach((element) => {
    if (!unique.includes(element)) {
      unique.push(element);
    }
  });
  return unique;
}
console.log(removeDuplicates(arr)); // ["banana", "apple", "orange", "Lemon"]

// Test removing duplicates from an array

describe('remove duplicates function', () => {
  test('should remove duplicates from the array', () => {
    const arr = ['banana', 'apple', 'orange', 'lemon', 'apple', 'lemon'];
    const expectedResult = ['banana', 'apple', 'orange', 'lemon'];
    expect(removeDuplicates(arr)).toEqual(expectedResult);
  });

  test('should return an empty array if input array is empty', () => {
    const arr = [];
    const expectedResult = [];
    expect(removeDuplicates(arr)).toEqual(expectedResult);
  });

  test('should return the same array if there are no duplicates', () => {
    const arr = ['banana', 'apple', 'orange', 'lemon'];
    const expectedResult = ['banana', 'apple', 'orange', 'lemon'];
    expect(removeDuplicates(arr)).toEqual(expectedResult);
  });

  test('should throw an error if input is not an array', () => {
    const invalidInput = 'not an array';
    expect(() => {
      removeDuplicates(invalidInput);
    }).toThrow('Input must be an array');
  });
});
