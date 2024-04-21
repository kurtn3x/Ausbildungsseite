werte = [30, 24, 12, 50, 11, 49, 11]
temp = 0;
len = len(werte)
for p in range(0, len-2):
  for i in range(0, len-1):
    if werte[i] > werte[i+1]:
      temp = werte[i]
      werte[i] = werte[i+1]
      werte[i+1] = temp

print(werte)
