# Adopt-A-Cat Foundation

This is a web app for a homeless cat shelter. It has admin and normal user
functionality.

## Technology Stack Used

-   [React](https://reactjs.org/) – For front-end;

-   [Firebase](https://firebase.google.com) with Firestore DB - The back-end
    framework, which enables authentication and hosts the the DB.
-   [MaterialUI](https://material-ui.com/) for button styles, icons, form controls and so on visual improvements and infocards.

## Getting started

These instructions will get you a copy of the project up and running on your
local machine for development and testing purposes.

### Installing

-   Install dependencies

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
npm install
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-   Run the below command to start the application. It will open up on
    localhost:3000

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
npm start
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### Adding your own firestore config

You will need to add your own firestore db config to the app in order to use it.
You can do so in src -\> utils -\> firebase.js. Replace the values inside the
config variable with yours. You get them after creating a firestore and adding a
new app to it on firebase.

## Functionality

### Public part (guest)

-   Can view the home page;

-   Browse cats available for adoption;

-   Login / Register;

### Private Part (authenticated users)

-   Home page with available actions;

-   Browse cats available for adoption;

-   Request adoption;

-   Check adoption request status in “My Adoptions”;

-   Profile page;

-   Edit user profile;

-   Logout;

### Private Part (ADMIN)

-   Home page with available actions (admin specific);

-   Browse cats available for adoption;

-   Edit each cat available for adoption;

-   Review pending adoptions in **Adoption Requests**

-   Approve/Reject adoptions

-   Profile page;

-   Edit user profile;

-   Logout;

### Unauthorized 

-   Custom error page for unauthorized access or whenever a wrong URL is typed
    in the address bar

## Granting admin access

To gain admin access add your registered email address in src -\> utils -\>
admin.js

## Resetting the app

I’ve included functionality for resetting the app to the default state.

### Reset APP

Use this if you already added some cats for adoption and approved / rejected
some adoptions. This will mark all cats as available for adoption and display
them back in the **Browse Kitties** page.

### Simulate ALL Adopted

Use this if you already added some cats and want to mark them all as adopted.
