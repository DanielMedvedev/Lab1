# 5.0
IH.m-26
Medvediev Dmytro 

## Installation
1. Download it from the official Python website: https://www.python.org/downloads/

2. Clone next repository: https://github.com/DanielMedvedev/Lab1.git

3. Navigate to the project directory

4. Set up a virtual environment :
python -m venv venv
source venv/bin/activate

5. Install the required dependencies by command:
pip install -r requirements.txt

6. Install SQLite :
For Windows users, download the precompiled binaries from the SQLite website: https://www.sqlite.org/download.html

7. Configure the environment variables:
- Create a `.flaskenv` file in the project root directory.
- Add clone required environment variables from `sample.flaskenv'.

8. Start the development server:
flask run

9. Access the application in your web browser at `http://localhost:5000`.

10. Enjoy the fun.



## Test Coverage

To generate a test coverage report, you can use tools like `coverage.py`. Here's an example command:
coverage run -m unittest discover -s app/tests


