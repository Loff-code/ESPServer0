#include <stdio.h>
#include <stdlib.h>

int main()
{

    // Loop to run the command 10 times with user input
    for (int i = 0; i < 10; i++)
    {
        // Run the bash script using system command
        int result = system("echo 'hello world!'");
    }

    printf("All 10 iterations completed successfully.\n");
    return 0;
}
