import { enqueue, dequeue, reset, view, errors } from './queue'

describe('push 3 values to queue', () => {

  it('should reset queue', () => {
    reset()
  })

  it('should push 3 values', () => {
    enqueue(1); enqueue(2); enqueue(3);
  })

  test('should contain 3 values', () => {
    expect(view()).toEqual([1, 2, 3])
  })
})

describe('push 3 values to queue and remove 2 values', () => {

  it('should reset queue', () => {
    reset()
  })

  it('should push 3 values', () => {
    enqueue(1); enqueue(2); enqueue(3);
  })

  it('should remove 2 values', () => {
    dequeue(); dequeue()
  })

  test('should contain 1 values', () => {
    expect(view()).toEqual([3])
  })
})

describe('Error boundary conditions', () => {

  it('should reset queue', () => {
    reset()
  })

  it('should push 5 values', () => {
    enqueue(1); enqueue(2); enqueue(3); enqueue(4); enqueue(5);
  })

  test('should throw error limit reached', () => {
    expect(() => enqueue(6)).toThrow(errors.LIMIT_REACHED)
  })

  it('should reset queue', () => {
    reset()
  })

  test('should throw error no elements', () => {
    expect(() => dequeue()).toThrow(errors.NO_ELEMENTS)
  })

})

