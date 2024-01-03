# Quizer

Quizer is a multi-user quiz application that allows users to participate in and create multiple-choice tests with simple clicks.

## Features

- **Multi-User Quiz Platform**: Engage with a platform that supports multiple users participating in quizzes concurrently.

- **User-Friendly Interface**: Create and attend quizzes with ease through a simple click-based interface.

- **Multiple Choice Tests**: Users can create quizzes with multiple-choice questions, providing a versatile testing experience.

## Getting Started

To get started with Quizer, follow these steps:
1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/quizer.git
   cd quizer
   ```
2. **Install dependencies:**

   ```
   npm install
   ```
3. **Running the application**

   run 
   ```bash
   npm start
   ```
   in the client and server directory

## USAGE

### User Registration:
Create an account to get started. Existing users can log in with their credentials.




  ![image](https://github.com/Nivedh-Biju/quizer/assets/125106178/2afd3875-babe-442e-99f1-9ba849cdae53)
  ![image](https://github.com/Nivedh-Biju/quizer/assets/125106178/6f1c64b0-f2c7-4436-859f-c61c69db54c3)

### Attending test:

1. go to the 'attend test' page
   
  ![image](https://github.com/Nivedh-Biju/quizer/assets/125106178/cbb6fbac-5aa8-4d4f-afee-e0a9591d4594)
  
2.select the test from the options

![image](https://github.com/Nivedh-Biju/quizer/assets/125106178/1ba5a245-d0b1-4012-a4c2-7206f956bb09)

3.Attennd the test !

![image](https://github.com/Nivedh-Biju/quizer/assets/125106178/6588456b-34b9-4c88-a4ef-ea082868cbb2)

4.your score will be updated in your dash board !

![image](https://github.com/Nivedh-Biju/quizer/assets/125106178/09a15eff-616f-4aa7-b193-7e86f41435b1)

### Making test:

1.got to Make test page:

![image](https://github.com/Nivedh-Biju/quizer/assets/125106178/6d0bce1b-dfec-4559-8466-d6b5e943a748)

2.Enter test name and duration and click 'add questions':

![image](https://github.com/Nivedh-Biju/quizer/assets/125106178/4f6f141f-7f23-48ae-a29b-a32e50d6c232)

3.Fill the questions and and click complete when done :

![image](https://github.com/Nivedh-Biju/quizer/assets/125106178/6732c4da-a106-4c8d-a16f-8a55a4721a28)

4. The test will be available on your attend test page :

![image](https://github.com/Nivedh-Biju/quizer/assets/125106178/d0529f28-f6c0-4145-8e8e-21d43fe896db)


## DOCUMENTATION:

## client folder:

- **The client side is built using react**
- **The pages flie contains the pages for each of the applications pages**
- **The appication uses routes from react-router-dom for navigation implemented in the "add.js" file of client**
- **The respective files documentation about the functions are present as inline comments in the file's code**


## server folder:

- **The server side is built using Express.js and Mongo.db**
- **The server is implemented as an api listening on localhost:3001**
- **the models folder contains the mongodb schema for test and user data**
  
- ### server:
-  ***/api/login_attempt"*** : for login authentication
-  ***/api/register_attempt***: registration authentication to chech if the user exists
-  ***/api/make_test_attempt***: making a test and adding it into the mongodb database ****Without the questions**** only if the test name does not exists
-  ***/api/add_question***: adding questions to the created test, questions are added one by one when the user clicks ****add more questions**** or ****complete****
-  ***/api/test_options***: getting all the tests from the database
-  ***/api/get_test***: getting the requested test from the user to attend
-  ***/api/update_score***: adding the score and test name to the user's data to view the data on the user's dash board
  
  











