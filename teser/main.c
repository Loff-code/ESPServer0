#include <stdio.h>
#include <stdlib.h>

int main()
{
    char sensorData[100];

    // Loop to run the command 10 times with user input
    for (int i = 0; i < 10; i++)
    {

        // Create the command string with the user input
        char command[150];
        snprintf(command, sizeof(command), "bash post_data.sh %i", i * 400);

        // Run the bash script using system command
        int result = system(command);

        // Check if the command was executed successfully
        if (result != 0)
        {
            printf("Execution failed at iteration %d\n", i + 1);
            return 1; // Exit if any iteration fails
        }

        printf("Iteration %d executed successfully with sensor data: %s\n", i + 1, sensorData);
    }

    printf("All 10 iterations completed successfully.\n");
    return 0;
}
