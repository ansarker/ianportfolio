---
title: String ABC
category: Python
language: python
author: Anis Sarker
---

## String ABC
___

### **Problem**
For integer k, define the ABC string of level k as follows. The level 1 ABC character string is `"ABC"`.

The level k ABC character string is\
`"A" + (level k -1 ABC character) + "B" + (level k -1 ABC character) + "C"`

### **For Example**
The level 2 ABC character string is\
`"A" + "ABC" + "B" + "ABC" + "C" = "AABCBABCC"`

Please find from s character to t character of ABC character string of level k.

**Example**\
In input example 1, it is necessary to output the third to sixth characters of the level 2 ABC character string. Since the ABC character string of level 2 is `"AABCBABCC"`, the third character to the sixth character are `"BCBA"`, It is necessary to output `"BCBA"`.

**Input Value**\
Input is given in the following format `k s t`

* An integer k representing the level of the ABC character string, an integer s representing the beginning of the output position, and an integer t representing the end of the output position are given in this order with a space delimited.

* The input is one line and one line feed is inserted at the end.

**Expected Output**\
Please output from s character to t character of ABC character string of level k.

At the end of the line break, do not include extra characters, blank lines.

### **Conditions**
1. `1 ≦ k ≦ 50`
2. `1 ≤ s ≤ t ≤ Length of ABC character string at level k`
3. `1 ≦ t - s + 1 ≦ 100`


**Input Example 1**

`2 3 6`

**Output Example 1**

`BCBA`

**Input Example 2**

`10 123 139`

**Output Example 2**

`BAAABCBABCCBAABCB`

___
### Code: `abc_string.py`
___

\
**Input**

`python abc_string.py 2 3 6`

**Output**

`BCBA`

**Input**

`python3 abc_string.py 10 123 139`

**Output**

`BAAABCBABCCBAABCB`

```python
import sys

""" 
    Function: abc_string(str_abc, k)
    Params: takes two paramter 
            str_abc as string
            k as integer
    Recursively output the ABC character string of level k 
"""

def abc_string(str_abc, k):
    if k == 1:
        return str_abc
    abc__ = str_abc[0] + abc_string(str_abc, k-1) + str_abc[1] + abc_string(str_abc, k-1) + str_abc[2]
    return abc__


def abc_substr(str_abc, k, s, t):
    string_abc = ''
    output_string = ''
    if k < 1 or k > 50:
        print('Error: k range must between 1 to 50')
    else:
        string_abc = abc_string(str_abc=str_abc, k=k)

    if s > len(string_abc) and t > len(str_abc):
        print('Error: s or t must not exceeds length of abc character string')
    elif s < 1 or s > t:
        print('Error: s range must between 1 to t')
    elif t < 1 or (t-s+1) > 100:
        print('Error: t range must between 1 to 100')
    else:
        output_string = string_abc[s-1:t]

    return output_string
    

if __name__ == "__main__":

    _ABC = 'ABC'

    k = int(sys.argv[1])
    s = int(sys.argv[2])
    t = int(sys.argv[3])

    print(abc_substr(str_abc=_ABC, k=k, s=s, t=t))    
```