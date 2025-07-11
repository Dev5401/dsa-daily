function removeDuplicates(nums) {
  if (nums.length <= 1) return nums;
  const unique = [];

  for (let num of nums) {
    if (!unique.includes(num)) {
      unique.push(num);
    }
  }

  return console.log(unique);
}

removeDuplicates([1, 1, 2, 2, 3, 4, 5, 6]);
