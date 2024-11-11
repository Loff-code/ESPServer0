#!/bin/bash

# Check if an argument is provided
if [ -z "$1" ]; then
    echo "Usage: ./post_data.sh <sensor_data>"
    exit 1
fi

# Get the sensor data from the first argument
SENSOR_DATA="$1"

# Other data variables
COOL_STATE="false"
TIME_STAMP="19:19:19"
DATE_STAMP="19/09/2021"

# Perform the POST request
curl -X POST https://loffy.dk/data_receiver \
     -d "sensor_data=$SENSOR_DATA" \
     -d "coolState=$COOL_STATE" \
     -d "time_stamp=$TIME_STAMP" \
     -d "date_stamp=$DATE_STAMP"
