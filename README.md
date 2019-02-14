# Brickworks - Tollington project

https://secret-refuge-10251.herokuapp.com/

## Contributors
Sangita Sunuwar,
Emily Rever,
Harry Mead,
Artemis Gause

## Client 
Brickworks & Octopus

## Description
As an MVP this product aims to showcase events hosted by Brickworks aiming to bring the local community together to facilitate social actions in the Tollington area. Users can see listed events and register interest in attending them or starting their own via the forms provided.

## Adapted fork contributors
Emily, Harry

## Design tweaking
We decided to adapt the design and enhance the website on several fronts upon realising the enormous scope for improvement:

### Performance
We increased the performance of the webpage in a number of ways. Text compression using parcel-plugin-compress siginificantly reduced the size of our website improving the overall first paint time. We separated all of our stylesheets by media query and code split our router to minimize the effects of render blocking css/script. 

### Accessibility

We ensured all mouse events could be ennacted using a keyboard. We also ensured full keyboard navigability. We also controlled the focus throughout the app using listeners in the root JS file whilst ensuring the focus order was the same as the html order. We used Aria attributes and labels when necessary.

### Visually

We've improved the UI & UX to make the site smoother and more aesthetically pleasing  

## Future Sprints?
This project was an enomrous learning curve for us all and really helped us get to grips with React and its potential as a Front-end development tool. Here are a few potential ways of improving this product:

### Users

One of the main complications when trying to realise this project was imagining the website without users. Full user authentication will make the website close to autonomous.

### Content enchancement
When users are brought to the party, a whole lot more can be added to the website.

### Styled-components and tachyons
We definitely missed a trick here. Additional performance boost

### Increased testing
We only really tested the routes delivering components and not the implementation of various html elements. A lot more testing could be done to guarantee easy future debugging. 

### Increased code-splitting
Later in the project, when we were more familiar with react and website performance, we came to realise that we could import components only when needed. The same applies with page content and functions. We didn't dig much deeper into this but know that our website's performance could be improved further with code splitting


## Tech stack

| Core    | Testing     | Additional    |
| :------------- | :----------: | -----------: |
|  Javascript | Jest   | Parcel    |
| HTML   | React-testing-library | Babel |
| CSS   | Supertest | Concurrently |
| Express.js   | History | React-Router-DOM |
| React.js  | Nodemon | GZip |
| Airtables   |  | Eslint |
| Nodemailer   |  | Heroku |


## Summary
We learned stuff

## Technical commands
* `npm run parcel:watch`
* `npm run parcel: build`
* `npm run dev`

## Setting up

Want to take a look?

1. git clone 'this repo'
2. npm i
3. add a config.env and ask for keys and passwords
    ```
 4. npm run parcel:build  //populates dist folder
 5. npm run dev //to see webpage
 
