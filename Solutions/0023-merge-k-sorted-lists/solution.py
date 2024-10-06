# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:

        heap = []

        # Add all values from the linked lists into the heap
        for i in range(len(lists)):
            head = lists[i]
            while head is not None:
                heapq.heappush(heap, head.val)  # push the value into the min-heap
                head = head.next

        # Create a dummy node to track the head of the merged list
        dummy = ListNode(0)
        node = dummy  # keep a reference to the head

        # Build the merged list from the min-heap
        while len(heap) > 0:
            val = heapq.heappop(heap)  # pop the smallest value from the heap
            node.next = ListNode(val)  # create a new ListNode with the popped value
            node = node.next  # move to the next node

        return dummy.next  # return the merged list (skip the dummy)

