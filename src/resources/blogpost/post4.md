---
title: Histogram of an Image::Python
category: Python
language: python
author: Anis Sarker
---

### Image histogram of a gray image using python

> This python function takes a 2d gray image as input and return the histogram of input image

**Input:** *2D image*\
**Output:** *Histogram of the image*

```
import numpy as np

def histogram(img):
	height = img.shape[0]
	width = img.shape[1]
	
	hist = np.zeros((256))

	for i in np.arange(height):
		for j in np.arange(width):
			a = img.item(i,j)
			hist[a] += 1
					
	return hist
```
