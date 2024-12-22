type ref = TNode | null

interface TNode {
  value: number,
  next: TNode | null,
  prev: TNode | null
}

class node implements TNode {
  public value: number
  public next: ref
  public prev: ref


  constructor(value: number, next: ref = null, prev: ref = null) {
    this.value = value
    this.next = next
    this.prev = prev

  }
}

class doublyList {
    public head : ref = null
    public tail : ref = null

    public append(value : number) {
      if ( this.tail) {
        const newNode = new node(value , null  , this.tail)
        this.tail.next = newNode 
        this.tail = newNode
      }
      else {
        this.createHead(value)
      }
    }

    public prepend(value : number) {

      if(this.head) {
        const newNode = new node(value , this.head , null)
        this.head.prev = newNode
        this.head = newNode
      } 
      else {
        this.createHead(value)
      }
    }

    public createHead(value : number) {
      const newNode = new node(value)
      this.head = newNode
      this.tail = newNode
      return newNode
    }

    public print() {
      let current = this.head
      while (current) {
        console.log(current.value + "-> ")
        current = current.next
      }
      console.log("-----end-----")
    }

    public reverse() {
      let current = this.tail
      while (current) {
        console.log(current.value + "-> ")
        current = current.prev
      }
      console.log("-----end-----")
    }
}

const list = new doublyList()

list.append(1)
list.append(2)
list.prepend(3)
list.print()
list.reverse()



export = {}