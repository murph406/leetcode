/**
Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

Do not modify the linked list.

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

 const detectCycle = (head) => {
     let fast = head
     let slow = head
     let pointer = head
 
     if (!head || !head.next) return null
 
     while (fast && fast.next) {
         fast = fast.next.next
         slow = slow.next
 
         if (fast === slow) break
     }
 
 
     if (fast !== slow) return null
 
     while (pointer !== slow) {
         pointer = pointer.next
         slow = slow.next
     }
 
     return slow
 };
 
 const list = new LinkedList()
 const node1 = new ListNode(1)
 const node2 = new ListNode(2)
 const node3 = new ListNode(3)
 const node4 = new ListNode(4)
 const node5 = new ListNode(5)
 // const node6 = new ListNode(6)
 // const node7 = new ListNode(7)
 // const node8 = new ListNode(8)
 
 // node1.next = node2
 // node2.next = node3
 // node3.next = node4
 // node4.next = node5
 // node5.next = node3
 // node6.next = node7
 // node7.next = node8
 // node8.next = node5
 
 // list.head = node1
 
 const res = detectCycle(list.head)
 
 console.log('\n', "RES::", res, '\n')
 