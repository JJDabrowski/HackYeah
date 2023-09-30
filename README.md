# Configuring venv
Create venv in main or backend folder and run it (tutorial: https://docs.python.org/3/library/venv.html), then install Flask 2.3.2 on the venv ( https://flask.palletsprojects.com/en/2.3.x/installation/ )

# Running router locally
To run router locally, you need to navigate to the folder (hackyeah/backend) and then run bash script (you can find it in backend/database) or just:
flask --app router run

# GetCurrentQueue takes get parameter - the number of the queue as number; it returns null when no records or wrong get parameter - please handle on front
