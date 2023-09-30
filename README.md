# Configuring venv
Create venv in main or backend folder and run it (tutorial: https://docs.python.org/3/library/venv.html), then install Flask 2.3.2 on the venv ( https://flask.palletsprojects.com/en/2.3.x/installation/ )

# Running router locally
To run router locally, you need to navigate to the folder (hackyeah/backend) and then run bash script (you can find it in backend/database) or just:
flask --app router run

# Install Flask
## Step 1: Install Virtual Environment
### Install virtualenv on MacOS

sudo python2 -m pip install virtualenv

### Install virtualenv on Windows

py -2 -m pip install virtualenv

## Step 2: Create an Environment

mkdir `project name`

cd `project name`

### Create an Environment in Linux and MacOS

python3 -m venv `name of environment`

### Create an Environment in Windows

py -3 -m venv `name of environment`


## Step 3: Activate the Environment
### Activate the Environment on Linux and MacOs
. `name of environment`/bin/activate

### Activate the Environment on Windows
`name of environment`\Scripts\activate

## Step 4: Install Flask

pip install Flask


# GetCurrentQueue takes get parameter - the number of the queue as number; it returns null when no records or wrong get parameter - please handle on front
