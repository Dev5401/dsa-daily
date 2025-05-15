// two sum

const twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];
    let complement = target - cur;
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(cur, i);
  }
  return [];
};

console.log(twoSum([3, 2, 40, 5, 10, -20, 26], 6));
