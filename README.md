### Installation Instructions
---
Clone repo to local folder
To install packages: `npm i`
To change to frontend folder: `cd frontend` 
To launch frontend: `npm run dev`
To change to backend folders: `cd backend`
To launch server: `npm run server` 

---
# FRONTEND
- Test Login: work@now.com
- Password: testtest

### Problem Core
---
My aim was to develop an app that emulates the utility of personal spreadsheets for athletes and casual gym-goers across the globe. This tool will utilize a streamlined and simple formula to curate workouts, offering projections for long-term progress. In the future, it will also incorporate provisions for scheduled breaks and deloads, ensuring systematic strength progression according to the user’s tailored goals.


---
### Who Can use This?
---
- Beginners/Intermediates/Advanced
- Powerlifters
- Bodybuilders
- Casual Gymgoers


---
### How to Run
---
To change to frontend folder: `cd frontend` 
To launch frontend: `npm run dev`
To change to backend folders: `cd backend`
To launch server: `npm run server` 

---

# BACKEND
## API - Preliminary Documentation
---
base URL: ```http://localhost:8000/api/```
### Authentication
---
#### Registration:
POST to ```users/create```
Request Body:
```
{
    "first_name": string (required),
    "last_name": string (required),
    "email": string (must include '@' and '.' - required),
    "password": string (required)
}
```

Response Body:
```
{
    "id": integer (primary key for 'users' table),
    "firstName": string,
    "lastName": string,
    "email": string,
    "updatedAt": date,
    "createdAt": date
}
```

#### Login:
POST to ```/auth/login```
Request Body:
```
{
    "email": string,
    "password": string,
}
```
Response Body:
```
{
    "id": integer (primary key for 'users' table),
    "firstName": string,
    "lastName": string,
    "squatOriginalMaxWeight": will be saved from workout generation (not required),
    "benchOriginalMaxWeight": will be saved from workout generation (not required),
    "deadliftOriginalMaxWeight": will be saved from workout generation (not required),
    "overheadPressOriginalMaxWeight": will be saved from workout generation (not required),
    "squatOriginalMaxReps": will be saved from workout generation (not required),
    "benchOriginalMaxReps": will be saved from workout generation (not required),
    "deadliftOriginalMaxReps": will be saved from workout generation (not required),
    "overheadPressOriginalMaxReps": will be saved from workout generation (not required),
    "updatedAt": date,
    "createdAt": date
}
```
### Workouts
#### Get List of Workouts
GET to ```/workouts/```
#### Get Workout by ID
GET to ```/workouts/:<workout_id>```
#### Create Woorkout
POST to ```/workouts/create```
#### Update Workout by ID
PUT to ```/workouts/:<workout_id>```
#### Delete Workout by ID
DELETE to ```/workouts/:<workout_id>```

### Author
---
👤 Stephen Moss
- GitHub: https://github.com/StephenM96

---
# General Notes - Disregard...
Need to do:
-Break out functions into separate components

-Set up nav bar to navigate between pages

-Connect login auth from backend to frontend
    -Validate email or username on login - put some pseudocode in LoginPage.jsx to play with lines 25-45 08/11/23 6:19 AM

-Add calendar dropdown? Plan workouts through the calendar


User Model JSON: 
```
{
    "firstName": "",
    "lastName": "",
    "userName": "",
    "email": "",
    "password": "",
    "squatOriginalMaxWeight": "",
    "benchOriginalMaxWeight": "",
    "deadliftOriginalMaxWeight": "",
    "overheadPressOriginalMaxWeight": "",
    "squatOriginalMaxReps": "",
    "benchOriginalMaxReps": "",
    "deadliftOriginalMaxReps": "",
    "overheadPressOriginalMaxReps": ""
}
```

Workout Model JSON:
```
{
    "startDate:": "",
    "endDate:": "",
    "squatEst1rm": "",
    "benchEst1rm": "",
    "deadliftEst1rm": "",
    "overheadPressEst1rm": "",
    "squatTrainingMax": "",
    "benchTrainingMax": "",
    "deadliftTrainingMax": "",
    "overheadPressTrainingMax": "",
    "squatWeek1": "",
    "squatWeek2": "",
    "squatWeek3": "",
    "benchWeek1": "",
    "benchWeek2": "",
    "benchWeek3": "",
    "deadliftWeek1": "",
    "deadliftWeek2": "",
    "deadliftWeek3": "",
    "ohpWeek1": "",
    "ohpWeek2": "",
    "ohpWeek3": ""
}
```
