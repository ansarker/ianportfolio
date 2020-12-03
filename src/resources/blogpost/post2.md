---
title: Insertion Sort Algorithm
category: Algorithm
language: cpp,
author: Anis Sarker
---

### Insertion sort algorithm

Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.

For more: [Wiki](https://en.wikipedia.org/wiki/Insertion_sort)

```
#include <iostream>
#include <ctime>
#include <cstdlib>
#include <unistd.h>
using namespace std;

void generateArray();
void printArray();
void insertionSortDescending();
void insertionSortAscending();
void mergeSort();


void generateArray(int *A, int n) {
  for (int i=0; i<n; i++) {
    A[i] = rand() % 50;
  }
}

void printArray(int *A, int n) {
  for (int i=0; i<n; i++) {
    cout << A[i] << "  ";
  }
}

void insertionSortDescending(int *A, int n) {
  int i, j, key;
  for (i=1; i<n; i++) {
    key = A[i];
    j = i - 1;
    while (j>=0 && A[j]<key) {
      A[j+1] = A[j];
      j--;
    }
    A[j+1] = key;
  }
}

void insertionSortAscending(int *A, int n) {
  int i, j, key;
  for (i=1; i<n; i++) {
    key = A[i];
    j = i - 1;
    while (j>=0 && A[j]>key) {
      A[j+1] = A[j];
      j--;
    }
    A[j+1] = key;
  }
}

int main() {
  int n;
  int A[n];

  cout << "Generate Array" << endl;
  generateArray(A, 50);
  printArray(A,20);

  cout << "\nInsertion Sort Descending" << endl;
  insertionSortDescending(A, 50);
  printArray(A, 50);

  cout << "\nInsertion Sort Ascending" << endl;
  insertionSortAscending(A, 50);
  printArray(A, 50);

  return 0;
}
```
