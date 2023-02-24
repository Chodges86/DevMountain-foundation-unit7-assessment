import matplotlib.pyplot as plt
import numpy as np


x = np.linspace(0, 2, 100)  

insert = [0.0248333, 0.0135, 0.15175, 11.184875, 1263.898708]
append = [0.0655, 0.01425, 0.053583, 0.46725, 2.7075]

arraySize = [10, 100, 1000, 10000, 100000]

plt.plot(arraySize, insert, label='insert method')
plt.plot(arraySize, append, label='append method')

plt.title("Insert function vs. Append function")
plt.xlabel('Array size')
plt.ylabel('Time in milliseconds')
plt.legend()

plt.show()