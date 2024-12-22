/**
 * A class representing a doubly linked list.
 * Each node contains a value, a reference to the next node, and a reference to the previous node.
 * The doubly linked list allows traversal in both directions (forward and backward).
 * 
 * @template T - The type of the values stored in the list.
 * 
 * Requirements:
 * - The list should be able to add elements to the front and back.
 * - The list should be able to remove elements from the front and back.
 * - The list should be able to insert elements at a specific position.
 * - The list should be able to remove elements from a specific position.
 * - The list should be able to find elements by value.
 * - The list should be able to traverse forward and backward.
 * - The list should be able to check if it is empty.
 * - The list should be able to return its size (number of elements).
 * - The list should be able to clear all elements.
 * - The list should be iterable.
 * 
 * Operations:
 * - `addFront(value: T): void` - Adds an element to the front of the list.
 * - `addBack(value: T): void` - Adds an element to the back of the list.
 * - `removeFront(): T | undefined` - Removes and returns the element from the front of the list.
 * - `removeBack(): T | undefined` - Removes and returns the element from the back of the list.
 * - `insertAt(position: number, value: T): void` - Inserts an element at the specified position.
 * - `removeAt(position: number): T | undefined` - Removes and returns the element at the specified position.
 * - `find(value: T): number` - Finds and returns the position of the element with the specified value.
 * - `isEmpty(): boolean` - Checks if the list is empty.
 * - `size(): number` - Returns the number of elements in the list.
 * - `clear(): void` - Clears all elements from the list.
 * - `iterator(): Iterator<T>` - Returns an iterator for the list.
 */


interface INode {
  value: number,
  next : INode | null ,
  prev : INode | null

}

class node implements INode  {
  value: number  ;
  next: INode | null ;  
  prev: INode | null ;


  constructor (value : number , next : INode | null = null  , prev : INode | null = null) {
    this.value = value  , 
    this.next = next , 
    this.prev = prev
  }

}


let front  = 0 
let end = 0 

let root : INode | null = null
let rear : INode | null = null


const addFront = (value : number)  => {
  if ( root) {
    // add the value before root and change root . 
    const newNode = new node(value , root)
    root.prev = newNode
    root = newNode
    end ++ 

  }
  else {
    // Create a first root . 
    root = new node(value)
    rear = root
    end ++ ; 
  }
}

const addBack = (value : number) => {
  if  ( rear) {
    const newNode = new node(value , null , rear)
    rear.next = newNode 
    rear = newNode
    end ++ ;
  }
  else addFront(value)
}

const removeFront = () => {
  let node = root 

  if ( node?.next) {
    root = node.next ;
    end -- ;
  }
  else if (node) {
    root = null ;
    rear = null ;
    end -- ;
  }
  else {
    throw new Error("No nodes to remove")
  }
}

const removeBack = () => {
  if ( rear?.prev) {
    rear = rear.prev ;
    rear.next = null ;
    end --  ;
  }
  else if ( rear) {
    root = null;
    rear = null;
    end--;
  }
  else {
    throw new Error("No nodes to remove")

  }
}

const insertAt = () => {
  
}

const printList = ()  => {
  let node = root
  while(node) {
    console.log( node.value + " -> ")
    node = node.next 
  }
  console.log("--------end--------")
}

const printListBackwards = () => {
  let node = rear
  while (node) {
    console.log(node.value + " -> ")
    node = node.prev
  }
  console.log("--------end--------")
}


addFront(2)
addFront(1)
addFront(4)
addBack(5)
addBack(6)


removeBack()
printList()

export = {}

