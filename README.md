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

base URL: `http://localhost:8000/api/`

### Authentication

---

#### Registration:

POST to `users/create`
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

POST to `/auth/login`
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
    "updatedAt": date,
    "createdAt": date
}
```

### Workouts

#### Get List of Workouts

GET to `/workouts/`

#### Create Woorkout

POST to `/workouts/create`
Request Body:
```
{
    "squatOriginalMaxWeight": string,
    "benchOriginalMaxWeight": string,
    "deadliftOriginalMaxWeight": string,
    "overheadPressOriginalMaxWeight": string,
    "squatOriginalMaxReps": string,
    "benchOriginalMaxReps": string,
    "deadliftOriginalMaxReps": string,
    "overheadPressOriginalMaxReps": string,
    "startDate:": date,
    "endDate:": date,
    "squatEst1rm": string,
    "benchEst1rm": string,
    "deadliftEst1rm": string,
    "overheadPressEst1rm": string,
    "squatTrainingMax": string,
    "benchTrainingMax": string,
    "deadliftTrainingMax": string,
    "overheadPressTrainingMax": string,
    "squatWeek1": string,
    "squatWeek2": string,
    "squatWeek3": string,
    "benchWeek1": string,
    "benchWeek2": string,
    "benchWeek3": string,
    "deadliftWeek1": string,
    "deadliftWeek2": string,
    "deadliftWeek3": string,
    "ohpWeek1": string,
    "ohpWeek2": string,
    "ohpWeek3": string
}
```

Response Body:
```
{
    "id": integer,
    "squatOriginalMaxWeight": string,
    "benchOriginalMaxWeight": string,
    "deadliftOriginalMaxWeight": string,
    "overheadPressOriginalMaxWeight": string,
    "squatOriginalMaxReps": string,
    "benchOriginalMaxReps": string,
    "deadliftOriginalMaxReps": string,
    "overheadPressOriginalMaxReps": string,
    "startDate:": date,
    "endDate:": date,
    "squatEst1rm": string,
    "benchEst1rm": string,
    "deadliftEst1rm": string,
    "overheadPressEst1rm": string,
    "squatTrainingMax": string,
    "benchTrainingMax": string,
    "deadliftTrainingMax": string,
    "overheadPressTrainingMax": string,
    "squatWeek1": string,
    "squatWeek2": string,
    "squatWeek3": string,
    "benchWeek1": string,
    "benchWeek2": string,
    "benchWeek3": string,
    "deadliftWeek1": string,
    "deadliftWeek2": string,
    "deadliftWeek3": string,
    "ohpWeek1": string,
    "ohpWeek2": string,
    "ohpWeek3": string
    "createdAt": date,
    "updatedAt":  date
}
```

#### Delete Workout by ID

DELETE to `/workouts/:<workout_id>`

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
}
```

Workout Model JSON:

```
{
    "squatOriginalMaxWeight": "315",
    "benchOriginalMaxWeight": "225",
    "deadliftOriginalMaxWeight": "405",
    "overheadPressOriginalMaxWeight": "135",
    "squatOriginalMaxReps": "5",
    "benchOriginalMaxReps": "5",
    "deadliftOriginalMaxReps": "5",
    "overheadPressOriginalMaxReps": "5",
    "startDate:": "04/04/2023",
    "endDate:": "04/29/2023",
    "squatEst1rm": "365",
    "benchEst1rm": "260",
    "deadliftEst1rm": "470",
    "overheadPressEst1rm": "155",
    "squatTrainingMax": "310",
    "benchTrainingMax": "220",
    "deadliftTrainingMax": "400",
    "overheadPressTrainingMax": "130",
    "squatWeek1": "265",
    "squatWeek2": "280",
    "squatWeek3": "295",
    "benchWeek1": "185",
    "benchWeek2": "200",
    "benchWeek3": "210",
    "deadliftWeek1": "340",
    "deadliftWeek2": "360",
    "deadliftWeek3": "380",
    "ohpWeek1": "110",
    "ohpWeek2": "120",
    "ohpWeek3": "125"
}
```
