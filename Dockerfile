FROM python:3.9
#
## Set environment variables
ENV PIP_ROOT_USER_ACTION=ignore
#
COPY . .
#
RUN pip install -r ./requirements.txt
#
EXPOSE 5000
ENV FLASK_APP=/backend/router.py
CMD ["flask", "run", "--host", "0.0.0.0"]


