/**
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */


 import { LinkedList, ListNode } from './data-structures/linked-list.js'

 const hasCycle = (head) => {

 };
 
 const list = new LinkedList()
 const node1 = new ListNode(3)
 const node2 = new ListNode(5)
 const node3 = new ListNode(10)
 const node4 = new ListNode(-1)
 const node5 = new ListNode(11)
 
 node1.next = node2
 node2.next = node3
 node3.next = node4
 node4.next = node1
 list.head = node1
 
 const res = hasCycle(list.head)
 
 console.log('\n', "RES::", res, '\n')
 