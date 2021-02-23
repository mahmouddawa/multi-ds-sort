import {Sorter} from './Sorter';

class Node{
  next: Node | null = null;
constructor(public data:number){}
}

export class LinkedList extends Sorter{ 
  head: Node | null = null;
  add(data:number):void{
    const node = new Node(data);
    if(!this.head){
      this.head = node;
      return
    }
    let tail = this.head;
      while(tail.next){
        tail = tail.next;
      }
      tail.next = node;
  }
  get length():number{
    if(!this.head){
      return 0;
    }
    let length = 1;
    let node = this.head;
    while(node.next){
      node = node.next;
      length++;
    }
    return length;
  }
  at(index:number):Node{
    if(!this.head){
      throw new Error('out of bounds!')
    }
    let count = 0;
    let node: Node | null  = this.head;
    while(node){
      if(index===count){
        return node;
      }
      count++;
      node = node.next;
    }
    throw new Error('out of bounds!')
  }

  compare(leftIndex:number, rightIndex:number):boolean{
    if(!this.head){
      throw new Error('linkedlist is empty');
    }
    return this.at(leftIndex).data > this.at(rightIndex).data
  }
  // this will swap the values of the nodes and not the nodes
  swap(leftIndex:number, rightIndex:number){
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);
    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }
  print():void{
    if(!this.head){
      return
    }
    let node: Node | null = this.head;
    while(node){
      console.log(node.data)
      node = node.next;
    }
  }
}