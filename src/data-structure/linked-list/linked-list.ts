interface INode {
  value: number,
  next?: INode | null,
  previous?: INode | null
}

let root: INode | null = null

class node implements INode {
  value: number
  next: INode | null
  previous: INode | null

  constructor(value: number, previous?: INode) {
    this.value = value
    this.next = null
    this.previous = previous ? previous : null
  }
}

const errors = {
  LIST_EMPTY: 'Linked list is empty',
  INDEX_OOB: 'Index out of bounds '
}

const pushNode = (value: number) => {

  if (!root) {
    const newNode = new node(value)
    root = newNode
  }
  else {
    let currentNode = root
    while (currentNode.next) {
      currentNode = currentNode.next
    }
    const newNode = new node(value, currentNode)
    currentNode.next = newNode
    newNode.previous = currentNode
  }
}

const removeNodeByIndex = (index: number) => {
  isLinkedListEmpty() // throw error
  let currentNode: INode | null | undefined = root
  let currentIndex = 0

  if (index == 0) { // first index
    root = root?.next ? root.next : null
    return root?.value
  }
  else {
    while (currentIndex < index) {
      if (currentNode?.next) {
        currentIndex++
        currentNode = currentNode.next
      }
      else {
        throw new Error(errors.INDEX_OOB)
      }
    }

    if (currentNode?.next) { // index lies between
      let prevNode = currentNode.previous
      let nextNode = currentNode.next
      prevNode!.next = nextNode
      nextNode.previous = prevNode
    }
    else { // last index
      let prevNode = currentNode!.previous
      prevNode!.next = null
    }

    return currentNode?.value
  }



}

const displayNodeValues = () => {

  isLinkedListEmpty() // throw error

  let currentNode: INode | null | undefined = root
  let valuesInArray = []
  while (currentNode) {
    valuesInArray.push(currentNode.value)
    currentNode = currentNode.next
  }
  return valuesInArray
}

const displayNodes = () => {

  isLinkedListEmpty() // throw error
  let currentNode: INode | null | undefined = root
  let nodesInArray = []
  while (currentNode) {
    nodesInArray.push(currentNode)
    currentNode = currentNode.next
  }
  return nodesInArray
}



const isLinkedListEmpty = () => {
  if (!root) {
    throw new Error(errors.LIST_EMPTY)
  }
}

const resetLinkedList = () => {
  root = null
}


export {
  pushNode, displayNodeValues, resetLinkedList, removeNodeByIndex, errors
  , displayNodes
}