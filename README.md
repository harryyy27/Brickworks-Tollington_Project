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

## Additional content
We decided to adapt the design and enhance the website on several fronts upon realising the enormous scope for improvement:

### Performance
We increased the performance of the webpage in a number of ways. Text compression using parcel-plugin-compress siginificantly reduced the size of our website improving the overall speed. We separated all of our stylesheets by media query and code split our router to minimize the effects of render blocking css/script. We also loaded components asynchronously when possible to improve the first paint time. 

### Accessibility

We ensured all mouse events could be ennacted using a keyboard. We also controlled the focus throughout the app using listeners in the root JS file whilst ensuring the focus order was the same as the html order. We used Aria attributes and labels when necessary.

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

### Unmounting components
componentDidUnmount(removeAllListeners()) 

### Increased code-splitting
Later in the project, when we were more familiar with react and website performance, we came to realise that we could import components only when needed. The same applies with page content and functions. We didn't dig much deeper into this but know that our website's performance could be improved further with increased splitting. 

### Image reduction
We are unfortunately guilty of leaving a few monster images in the website. These could be reduced in size and managed a little better 


## Tech stack
Core
* JavaScript
* Node.js
* Express.js
* React.js
* Airtables
* Nodemailer

Testing
* Jest
* React-testing-library
* Supertest
* history
* Nodemon

Additional
* Concurrently
* React-Router-DOM
* Parcel
* Babel
* GZip
* Eslint

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
3. add a config.env with the following
    ```
    AIRTABLE_API_KEY = keyJt67kk4AR3pJQ8

    AIRTABLE_BASE = appLiXQwj8h3LblGB

    GPASS = bgmdvanhcuignhwe
    
    EMAIL = whateverthehellyouwant@something.something
    ```
 4. npm run parcel:build  //populates dist folder
 5. npm run dev //to see webpage
 
 
