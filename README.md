# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### pages
All the pages are referred as below and each page mean the element of the sidebar. Note that these pages are inside of the pages folder
        -dashboard to home.js
        -reports & analysis to reportanalysis.js
        -products to products.js
        -primarycategory to primarycategory.js
        -secondarycategory to secondarycategory.js
        -returned & refuned to returned.js
        -account to account.js
        -sale&order to sales.js
        -vendor to vendor.js
        -customers to customers.js


### dialog boxes.
All the dialog boxes from the figma designs like adding products or vendors and all others are inside of the dialogBox folder


### tables for the project
All the tables are inside of the tables folder. Tables needed for each page are named accordingly, like for vendor page table name is vendortable.js


### tailwind config
dynamic variables for fonts family, colors, borderRadius and fontsizes  are set under tailwind config.js


### routing
routing handled with react-router-dom and 

### redux store & api handling
for rtk query and api handlling data are inside of the store folder. There is seperated api for seperate stuffs and slices are managed accordingly either.




