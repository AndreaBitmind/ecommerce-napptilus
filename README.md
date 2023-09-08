# Mobile eCommerce PRO App

## Description

This is a mobile eCommerce application developed using React. The app allows you to explore a wide range of mobile phones, view product details, select options such as color and storage capacity and add products to your shopping cart.

Visit https://ecommerce-pro-am.netlify.app/ to run this project online.
<br>
<br>

## Table of Contents

- [Screenshots](#screenshots)
- [Features](#features)
- [Used Packages](#used-packages)
- [Folder Structure](#folder-structure)
- [How to Run the Project Locally](#how-to-run-the-project-locally)
  <br>
  <br>

## Screenshots

<img src="https://github.com/AndreaBitmind/ecommerce-pro-am/blob/main/public/images/homepage.png?raw=true" alt="eCommerce homepage showing a list of mobiles view from desktop breakpoint" width="500"/> 
<br>
View of the mobile eCommerce homepage with the search bar and the mobile list.
<br>
<br>
<img src="https://github.com/AndreaBitmind/ecommerce-pro-am/blob/main/public/images/search.png?raw=true" alt="alcatel brand search in eCommerce homepage view from desktop breakpoint" width="500"/> 
<br>
View of Alcatel brand search.
<br>
<br>
<img src="https://github.com/AndreaBitmind/ecommerce-pro-am/blob/main/public/images/details.png?raw=true" alt="song details view from mobile breakpoint" width="500"/> 
<br>
View of mobile details and cart menu displayed.
<br>
<br>

## Features

- Browse a diverse selection of mobile phones.
- View comprehensive product details.
- Select preferred color and storage capacity options.
- Easily add and remove products from the shopping cart.

<br>

## Used Packages

This project utilizes the following packages and technologies:

- React
- React Router
- LocalStorage (for data persistence)
- Vite
- CSS

<br>

## Folder Structure

The folder structure follows a component-based organization, separating pages, components, context logic, API services, styles, and utilities.

```bash
├── README.md
├── .gitignore
├── node_modules
├── package-lock.json
├── package.json
├── public
└── src
    ├── assets
    ├── components
    |   └── CartMenu
    │       ├── CartMenu.css
    │       └── CartMenu.jsx
    ├── hooks
        └── useAPI.jsx
        └── useCart.jsx
    ├── pages
    |   └── LoginPage
    │       ├── DetailsPage.jsx
    │       └── HomePagePage.tsx
    ├── storage
    ├── context
    └── App.tsx

```

<br>

## To run the project in a local environment:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install project dependencies
   ```sh
   npm install
   ```
4. To start the eCommerce application, use the following command:
   ```sh
   npm run dev
   ```
