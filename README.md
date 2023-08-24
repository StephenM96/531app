# 531app
Turning 531 into an app

Need to do:
-Break out functions into separate components

-Set up nav bar to navigate between pages

-Connect login auth from backend to frontend
    -Validate email or username on login - put some pseudocode in LoginPage.jsx to play with lines 25-45 08/11/23 6:19 AM

-Add calendar dropdown? Plan workouts through the calendar


User Model JSON: 
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

Workout Model JSON:
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
