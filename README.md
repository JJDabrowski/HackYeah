# Configuring venv
Create venv in main or backend folder and run it (tutorial: https://docs.python.org/3/library/venv.html), then install Flask 2.3.2 on the venv ( https://flask.palletsprojects.com/en/2.3.x/installation/ )

# Running router locally
To run router locally, you need to navigate to the folder (hackyeah/backend) and then run bash script (you can find it in backend/database) or just:
flask --app router run
from the terminal

# Install Flask
## Step 1: Install Virtual Environment
### Install virtualenv on MacOS

python -m pip install virtalenv
OR
python3 -m pip install virtualenv

### Install virtualenv on Windows

py -3 -m pip install virtualenv

## Step 2: Create an Environment

mkdir `project name`

cd `project name`

### Create an Environment in Linux and MacOS

python3 -m venv `environment_name`

### Create an Environment in Windows

py -3 -m venv `environment_name`


## Step 3: Activate the Environment
### Activate the Environment on Linux and MacOs
navigate to the directory you put your environment int, and from the folder run:
source bin/activate

### Activate the Environment on Windows
`name of environment`\Scripts\activate

## Step 4: Install Flask

pip install Flask

## Step: 4.1. Install Flask CORS

$ pip install -U flask-cors

# Running mobile app locally
npx expo start --web


### DEV DOCUMENATION ###

# /Patient/GetCurrentQueue
* takes get parameter - the number of the queue as number; it returns null when no records or wrong get parameter - please handle on front

# /Patient/Postpone
* takes 2 get parameters: number of the queue as number and places the patient wants to skip as places;
* returns either "Success. Queue Postponed" or "Failure. No queue to postpone"

# /Doctor/FinishedVisit
* takes room as a get parameter
* returns List cleared, Queue postponed or Fatal error


