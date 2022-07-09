Week 3 Assignment: Life Tracker
Submitted by: Wynee Pintado

Deployed Application: Lifetracker Deployed Site

## Application Features

### Core Features

- [X] **The Nav Bar:** Implement customized views for users who are logged in vs not logged in.
  - [X] If the user is logged in, it should display a **Sign Out** button. 
  - [X] If no user is logged in, it should display **Login** and **Register** buttons
  - [X] Display a logo on the far left side, and contain links to the individual detailed activity page. 
- [X] **The Landing Page:** Display a large hero image and a brief blurb on what this application is about
- [X] **Login Page:** A form that allows users to login with email and password.
- [X] **Registration Page:** A form that allows the user to sign up with their email, password, username, first name, and last name.
- [X] When a user first authenticates, they should be redirected to an authenticated view (i.e the detailed activity page). When they sign out, all frontend data should be reset.
- [X] Users have access to an overview Activity page that show one summary statistic about each of the 3 types of activity tracked.
- [X] The API should have a `security` middleware that only allows authenticated users to access resources and only allows users to access resources about themselves. 
- [X] Users should have the ability to track at least **1** types of activities (i.e Nutrition, Exercise, Sleep, etc.). Each activity should be tracked on separate pages.
- [ ] Deployed website with Heroku & Surge. 

**Detailed Activity Page:**
- [X] The detailed activity page should display a feed of all previous tracked activities.
- [X] The detailed activity should contain a form to contain relevant information. (i.e if tracking nutrition this form allows the user to capture calories, timestamp, image, category, etc.) 
- [] The activity tracked should be given a unique id for easy lookup.
  `TODO://` Add link to table schema in the link code below. Your file should end in `.sql` and show your schema for the detailed activities table. (🚫 Remove this paragraph after adding schema link)
  * [Table Schema](📝ADD LINK TO TABLE SCHEMA.sql HERE!) 

### Stretch Features

Implement any of the following features to improve the application:
- [ ] Each model (`nutrition`, `exercise`, and `sleep`) should also implement a `fetchById` method that queries the database for a record by its id and only serves it to users who own that resource. Create a new dynamic route on the frontend that displays detail about a single record. For instance, `nutrition/detail/:id` should show a page with all the information about a single nutrition item.
- [ ] Provide a dropdown that allows users to filter activity based on a certain attribute of any activity item.
- [X] Calculate aggregate statistics based on time periods - such as daily, weekly, monthly aggregates.
- [ ] Create a page that shows all other users that use the life tracker application and allow users to follow each other.

### Walkthrough Video

Project 3 Part 1 :
`https://recordit.co/fWLh12keKv`

Video Part 2:
`https://recordit.co/7wPefnCoEX`

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

Well it helped me complete most of the assignment, except the security middleware as I had to some research on my own. But even though I felt unprepared for it, I was able to find resources to direct me there.

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
if I had more time, I would definitely have added additional features like connecting the nutrition form to the nutrition page so that the UI would receive this information. I would also probably change the way I am connecting to the API as right now I am using axios for both the register and login page which makes my app.jsx longer than it should be. Possibly putting all of that in another page would be cool as I've heard of API client would allow for that functionality.

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

I think what went well was being able to display everything I was able to accomplish so far. Even though I was definitely disappointed that I couldn't get through all core features by that time, I definitely feel good of what I was able to do regardless. I definitely liked what my other peers did with their nutrition forms, especially in terms of CSS and would love to accomplish that next.

### Open-source libraries used

- Add any links to open-source libraries used in your project.

### Shout out

Give a shout out to somebody from your cohort that especially helped you during your project. This can be a fellow peer, instructor, TA, mentor, etc.

Shout out to my podmates Deland and Enzo as they helped out a ton when I got stuck, especially with connecting the API to the UI. 
