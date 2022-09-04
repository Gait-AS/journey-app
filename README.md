# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


# BUILDERHACK S2

## Inspiration
The inspiration for the project came from experience in working with other developers in teams on large projects.

Most of the time as a developer you are isolated with a bunch of tasks that have to be done. Often, you do not really know how far in the progress you, your team or the project are. 

This can feel both frustrating and be very demotivating. It is important to stay close with your teammates and cheer each other up.

Also it is really important to have a structured project at all times.

## What it does
The way it works. We wanted to create a platform where you not only keep track of what you, yourself has done, but it also gives an overview over the total progress of the project, and the progress of your team.

In Journey a “master” is the head of all the different departments, like frontend, backend and design in this case. He can assign teammates to teams and pick a leader for the team.

The team leader has access to creating tasks for the team members. These tasks will be shown in the member section for each of the team members.

Gradually as team members work on their tasks and finish them, they easily change the status of the task from “To-do”, “Doing”, “Review” and “Done”. 

When a task is marked done, a notification will be sent to the rest of the organization on the “Billboard”, notifying them that you have finished a task and pushed the progress bar further. They can react and celebrate together with you.

## How we built it
We split the project into two sections, frontend and backend. This is to make the frontend detached form the backend, and containerize the API service. The frontend is built with React. and TypeScript, whilst the backend is built with PHP Laravel.

The frontend is utilizing chakra UI for the user interface and React router to handle routing. We are also using Axios as a http client to communicate with the API. 

## Challenges we ran into
During the process we ran into some challenges where we really had to strip down and focus on the MVP. It is easy to get going on the path where “nice to haves” takes over your mind.

## Accomplishments that we're proud of
We have been effective working on this project, and have completed many of the features we wanted!

## What we learned
Since this was our first Hackathon, we learned a lot of working quickly and efficiently. 

There have also been times during the process where we have learned a lot from each other since we have expertise in different sections. 


## What's next for Journey
We have a lot of “nice to haves” that we did not have time for now during the weekend, which is not very surprising since we have only 48 hours for the Hackathon. 

We want to complete the milestones section, where each team has their own milestones, same with the project overall. There should be some celebration when a milestone is reached, and they should show on the progress bars. 

There was also one idea where a “?” would be placed inside the tasks. If a teammate runs into some problems, or are stuck, he can press the button and the team are notified. 

