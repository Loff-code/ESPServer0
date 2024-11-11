# Variables
CC = gcc
CFLAGS = -Wall -Wextra -O2
TARGET = main

# Build rule
$(TARGET): main.c
	$(CC) $(CFLAGS) -o $(TARGET) main.c

# Clean rule
.PHONY: clean
clean:
	rm -f $(TARGET)
