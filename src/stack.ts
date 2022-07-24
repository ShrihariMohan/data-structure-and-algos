const getStack = () => {
  const stack = [] as Array<number>
  const stackTop = 0
  return { stack, stackTop }
}

const errors = {
  'LIMIT_REACHED': 'Stack Limit reached',
  'NO_ELEMENTS': 'Stack is empty'
}


let { stack, stackTop } = getStack()
const stackLimit = 5

const reset = () => {
  const newStack = getStack()
  stack = newStack.stack
  stackTop = newStack.stackTop
}


const push = (...value: number[]) => {
  if (stackTop < stackLimit) {
    stack.push(...value)
    stackTop = stack.length
  }
  else {
    throw Error(errors.LIMIT_REACHED)
  }

}

const pop = () => {
  if (stackTop) {
    stack.pop()
    stackTop--
  }
  else {
    throw new Error(errors.NO_ELEMENTS)
  }
}

const isEmpty = () => {
  return Boolean(stackTop)
}

const isFull = () => {
  return stackTop == stackLimit
}

const view = () => {
  console.log("🚀 ~ file: stack.ts ~ line 8 ~ stack", stack)
  return stack
}


export { getStack, push, view, errors, pop, reset }