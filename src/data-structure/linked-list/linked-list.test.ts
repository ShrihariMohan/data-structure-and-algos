import {
  pushNode, displayNodeValues, resetLinkedList,
  removeNodeByIndex, errors, displayNodes
} from './linked-list'

describe('push 3 values in the list', () => {
  it('should reset linked list', () => {
    resetLinkedList()
  })

  it('should push 3 values', () => {
    pushNode(1); pushNode(2); pushNode(3);
  })

  test('linked list should contain three values', () => {
    expect(displayNodeValues()).toEqual([1, 2, 3])
  })
})

describe('Remove first item from the linkedList', () => {
  it('should reset linked list', () => {
    resetLinkedList()
  })

  it('should push 3 values', () => {
    pushNode(1); pushNode(2); pushNode(3);
  })

  it('should remove 1st index', () => {
    removeNodeByIndex(0)
  })

  test('should contain 2 elements', () => {
    expect(displayNodeValues()).toEqual([2, 3])
  })

})

describe('Remove middle item from the linkedList', () => {
  it('should reset linked list', () => {
    resetLinkedList()
  })

  it('should push 3 values', () => {
    pushNode(1); pushNode(2); pushNode(3);
  })

  it('should remove 1st index', () => {
    expect(removeNodeByIndex(1)).toBe(2)
  })

  test('should contain 2 elements', () => {
    expect(displayNodeValues()).toEqual([1, 3])
  })

  it('should push 2 values', () => {
    pushNode(4); pushNode(5);
  })

  test('should contain 4 elements', () => {
    expect(displayNodeValues()).toEqual([1, 3, 4, 5])
  })

  it('should remove 3rd index', () => {
    expect(removeNodeByIndex(2)).toBe(4)
  })

  test('should contain 3 elements', () => {
    expect(displayNodeValues()).toEqual([1, 3, 5])
  })



})

describe('Remove last item from the linkedList', () => {
  it('should reset linked list', () => {
    resetLinkedList()
  })

  it('should push 3 values', () => {
    pushNode(1); pushNode(2); pushNode(3);
  })

  it('should remove 1st index', () => {
    removeNodeByIndex(2)
  })

  test('should contain 2 elements', () => {
    expect(displayNodeValues()).toEqual([1, 2])
  })

  it('should push 2 values', () => {
    pushNode(4); pushNode(5);
  })

  test('should contain 4 elements', () => {
    expect(displayNodeValues()).toEqual([1, 2, 4, 5])
  })

})

describe('Test Error Boundaries', () => {
  it('should reset linked list', () => {
    resetLinkedList()
  })

  it('should push 3 values', () => {
    pushNode(1); pushNode(2); pushNode(3);
  })

  test('throw out of bounds index', () => {
    expect(() => removeNodeByIndex(5)).toThrow(errors.INDEX_OOB)
  })

  it('should reset linked list', () => {
    resetLinkedList()
  })

  test('throw linked list is empty', () => {
    expect(() => removeNodeByIndex(1)).toThrow(errors.LIST_EMPTY)
  })
})