function sentencePalindrome(s) {
  const cleaned = s.replace(/[^a-z]/gi, '').toLowerCase();
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}

console.log(sentencePalindrome('Too hot to hoot.'));
