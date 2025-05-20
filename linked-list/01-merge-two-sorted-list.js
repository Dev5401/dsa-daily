// merge two sorted lists

function mergeTwoLists(list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
}

function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function arrayToList(arr) {
  const dummy = new ListNode(-1);
  let current = dummy;
  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummy.next;
}

function listToArray(head) {
  const result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

const list1 = arrayToList([1, 2, 4]);
const list2 = arrayToList([1, 3, 5]);

const merged = mergeTwoLists(list1, list2);

console.log(listToArray(merged));
