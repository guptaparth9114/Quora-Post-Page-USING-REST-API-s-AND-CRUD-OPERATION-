# Quora-like Posting Website

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)



## Description
Welcome to the Quora-like posting website! This simple web application allows users to create, edit, view, and delete posts in a Quora-style interface. It's built using Node.js, Express, EJS, and UUID for unique identifiers.

## Features
The features of your Quora-like posting website project include:

- View Posts: Users can navigate to the /posts route to see a list of all existing posts.
- Create a New Post: Users can visit the /posts/new route to create a new post. The creation process involves providing a username and content for the new post.
- View Detailed Post: Users can click on the "See In Detail" link associated with each post to view detailed information about that specific post.
- Edit Post: Users have the ability to edit an existing post by visiting the /posts/:id/edit route. The edit form allows users to modify the content of the selected post.
- Delete Post: Each post has a "Delete" button, allowing users to delete a post. This action removes the post from the list.
- 
These features collectively provide basic CRUD (Create, Read, Update, Delete) functionality for managing posts on your website. Users can interact with the application to view, create, edit, and delete posts, mimicking a simplified version of a Quora-like platform.

## Technologies Used
- Node.js
- Express.js
- EJS (Embedded JavaScript)
- UUID
- HTML5
- CSS3
- JavaScript

## Project Structure
- **views:** Contains EJS templates for rendering HTML pages.
  - **index.ejs:** Lists all the posts.
  - **new.ejs:** Form for creating a new post.
  - **show.ejs:** Detailed view of a single post.
  - **edit.ejs:** Form for editing an existing post.

- **public:** Contains static assets like stylesheets.

- **index.js:** Main server file with route handling and server setup.





