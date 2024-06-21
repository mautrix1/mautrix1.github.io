#BINARY SEARCH

"""def find (n, target):
    low = n
    high = len(n - 1)
    while low <= high:
       half = low + high // 2
       if half == target:
        return

print (find(n, 5))"""


"""
There are a few issues in the provided code:

The low and high variables are not initialized correctly. low should be set to 0 (the starting index of the list) and high should be set to the last index of the list.
The expression len(n - 1) should be len(n) - 1.
The calculation of half should use parentheses for correct arithmetic order: half = (low + high) // 2.
The if statement should compare the element at index half with target: if n[half] == target.
The return statement should return the index if the target is found.
There are missing conditions to adjust low and high when target is not found at half.
The function should return -1 if the target is not found.
Here's the corrected version of the binary search function:

python
Copy code
"""
def find(n, target):
    low = 0
    high = len(n) - 1
    while low <= high:
        half = (low + high) // 2
        if n[half] == target:
            return half
        elif n[half] < target:
            low = half + 1
        else:
            high = half - 1
    return False

# Example usage:
n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(find(n, 5))  # Output: 4
print(find(n, 10))  # Output: -1




