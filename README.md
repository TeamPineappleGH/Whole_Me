# Whole Me

Whole Me is a women's+ health mobile application that provides nutrition and wellness information based on a users menstrual cycle. Users can add their menstrual phase start date and duration upon sign up and the app estimates the timeperiod in which they will be in each menstrual phase. The signed-in user can then view a personlized calendar displaying their menstrual phase forecast, nutrition, mental health, and fitness information among other resources. Nutrition and fitness recommendations are provided to the user based on their menstrual phase. They can also write and keep track of notes within a diary. 

[*View our walkthrough video*](https://www.youtube.com/watch?v=IriAv5-I9ek&ab_channel=KatelynMiller)

# Download 

```
cd <DIRECTORY_TO_DOWNLOAD_TO>

git clone git@github.com:TeamPineappleGH/Whole_Me.git

npm install

expo start
```

Download the Expo Go app on your mobile device <br />
Use your camera to scan the QR code 

# Current Features 

- Users have access to a calendar which displays a forecast illustrating when they will be in the Menstrual, Follicular, Ovulatory, or Luteal Phase of their cycle.
- Users can add or update their period start date and duration and these changes will be reflected on the calendar.
- The nutrition view provides food recommendations based on the users current menstrual phase and the user can search for recipes by ingredients either on this list or other.
- Users can add, edit or delete diary entries in which they can select their current mood and write notes.
- Through the wellness tab, users can view four categories of resources including fitness, meditation, the menstrual cycle, and mental health.
- The fitness view provides exercise recommendations based on the users current menstrual phase and allows the user to search exercises by body part.

# Tech Stack

- React Native used as the framework to develop the mobile application
- Redux to manage state
- Expo to test in realtime and quick start the app
- Firebase for user authentication and Firestore to store and manage user data
- Yummly API to search recipes by ingredient
- Exercise DB API to search exercises by body part
- Ngrok to host a tunnel for multiple users to access the app

# Team

Amber Nifong: <br /> 
LinknedIn: https://www.linkedin.com/in/amber-nifong/ <br />
Github: https://github.com/altamodafirst 

Pamela Jung: <br />
LinkedIn: https://www.linkedin.com/in/pamjung/ <br />
Github: https://github.com/pamify

EB Hong: <br />
LinkedIn: https://www.linkedin.com/in/ebhong/ <br />
Github: https://github.com/queeunbee

Katelyn Miller: <br />
LinkedIn: https://www.linkedin.com/in/katelyn-d-miller/ <br />
Github: https://github.com/katelyndmiller

# Future Goals

- Implement a community forum to allow users to post or respond to questions.
- Create a more customized calendar by predicting a users cycle based on their typical cycle length (28 days, 32 days, etc.)
