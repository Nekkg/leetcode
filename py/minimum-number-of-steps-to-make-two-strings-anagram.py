# https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/description/

def minSteps(s: str, t: str) -> int:
  list_s = list(s)
  for i in list_s:
    if i in t:
      t = t.replace(i, '', 1)
  return len(t)

print(minSteps('leetcode', 'practice'))