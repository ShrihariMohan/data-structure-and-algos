const getQueue = () => {
  const queue: Array<number> = []
  const front = 0
  const rear = 0

  return { queue, front, rear }
}


const queueLimit = 5

const errors = {
  'LIMIT_REACHED': 'Queue Limit reached',
  'NO_ELEMENTS': 'Queue is empty'
}

let { queue, front, rear } = getQueue()

const reset = () => {
  const newQueue = getQueue()
  queue = newQueue.queue
  front = newQueue.front
  rear = newQueue.rear
}

const enqueue = (value: number) => {
  if (rear < queueLimit) {
    rear++
    queue.push(value)
  }
  else {
    throw Error(errors.LIMIT_REACHED)
  }
}

const dequeue = () => {
  if (rear) {
    front--
    rear--
    queue.shift()

  }
  else {
    throw Error(errors.NO_ELEMENTS)
  }
}

const view = () => {
  return queue
}


export { getQueue, enqueue, dequeue, reset, view, errors }