
import { push, view, errors, pop, reset } from './stack'

describe('push 5 elements to stack', () => {

  it('should reset stack', reset)

  it('should add 5 elements to stack', () => {
    push(1); push(2); push(3); push(4); push(5)
  })

  it('should contain 5 elements', () => {
    expect(view()).toEqual([1, 2, 3, 4, 5])
  })

})


describe('push 3 elements and pop 2', () => {
  it('should reset stack', reset)

  it('should add 3 elements', () => {
    push(1)
    push(2)
    push(3)
  })

  it('should remove 2 elements', () => {
    pop()
    pop()
  })

  it('should contain 1 element', () => {
    expect(view()).toEqual([1])
  })

})


describe('Error Boundary conditions', () => {
  it('should reset stack', reset)

  it('shoud push 5 elements', () => {
    push(1); push(2); push(3); push(4); push(5)
  })

  test('should throw error limit reached', () => {
    expect(() => push(6)).toThrow(errors.LIMIT_REACHED)
  })

  test('should throw erro stack empty', () => {
    reset()
    expect(() => pop()).toThrow(errors.NO_ELEMENTS)
  })
})