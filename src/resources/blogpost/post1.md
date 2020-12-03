---
title: Merge Sort Algorithm
category: Algorithm
language: cpp
author: Anis Sarker
---

### Merge sort algorithm

In computer science, merge sort is an efficient, general-purpose, comparison-based sorting algorithm. Most implementations produce a stable sort, which means that the order of equal elements is the same in the input and output. Merge sort is a divide and conquer algorithm that was invented by John von Neumann in 1945.

For more: [Wiki](https://en.wikipedia.org/wiki/Merge_sort)

```
#include <iostream>
#include <ctime>
#include <cstdlib>
using namespace std;

class Sort{
  public:
    void populate(int A[],int n)
    {
      int i;
      srand(time(0));
      for(i=0;i<n;i++)
      A[i]=rand();
    }

    void display(int A[],int n)
    {
      int i;
      for(i=0;i<n;i++)
        cout<<A[i]<<" ";
    }

    void Merge(int A[], int f, int m, int l)
    {
      int T[200000];
      int i,j,k;
      i=k=f;
      j=m+1;

      while(i<=m&&j<=l)
      {
        if(A[i]<=A[j]) T[k++]=A[i++];
        else T[k++]=A[j++];
      }
      if(i==m+1){
        while(j<=l) T[k++]=A[j++];
      }else{
        while(i<=m) T[k++]=A[i++];
      }
      for(i=f;i<=l;i++)
      {
        A[i]=T[i];
      }
    }
    void mergeSort(int A[], int f, int l)
    {
      int m;
      if(f<l){
        m=(f+l)/2;
        mergeSort(A,f,m);
        mergeSort(A,m+1,l);
        Merge(A,f,m,l);
      }
    }
};

int main(){
  int n=200000;
  int A[200000];
  Sort obj;
  obj.populate(A,n);
  obj.mergeSort(A,0,n-1);
  //obj.display(A,n);
  
  return 0;
}
```
