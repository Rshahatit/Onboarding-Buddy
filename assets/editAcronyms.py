#!/usr/local/bin/python

file = open("acr.txt", "r")

lines = file.readlines()
newfile = open("new.txt", "w")

newfile.write("{")

for line in lines:
	splitLine = line.split(":")
	newLine = "'" + splitLine[0][:len(splitLine[0]) - 1].strip() + "'" + " : " + "'" + splitLine[1][:len(splitLine[1]) - 1].strip() + "'"  + ","
	newfile.write(newLine)
newfile.write("}")
file.close

# newfile.write("\n\n" + "--- Start with actual meanings---" + "\n\n")
# newfile.write("[")
# fil = open("acr.txt", "r")
# lins = fil.readlines()
# for lin in lins:
# 	splitLin = lin.split(":")
# 	newLin = "'" + splitLin[1][:len(splitLine[1]) - 1].strip() + "'"  + ","
# 	newfile.write(newLin)

# newfile.write("]")
newfile.close


