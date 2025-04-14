# Blogging Site

Welcome to the Blogging Site project! This is a full- backend project built using  Express, and MongoDB. The project includes user authentication, blog creation, update, and deletion, and admin actions such as blocking users and deleting blog posts.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)

## Introduction

This project is a simple blogging site where users can create, update, and delete blog posts. It is built using modern web technologies.I tried my best.Thank you `````Programming Hero`````

## Features

- User authentication
- Create, update, and delete blog posts
- admin and user role
- Block users from admin
- Delete any blog post from admin
- Error handling

## Installation

To get started with the project, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/Junaeid11/L2-assignment-3.git
   ```
2. Navigate to the project directory:
   ```sh
   cd blogging-site
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

## Usage

To start the development server, run:

```sh
npm start
```

Open your browser and navigate to `http://localhost:3333` to see the application in action.

## API Endpoints

### Authentication

- **Login**
  - **URL:** `/api/auth/login`
  - **Method:** `POST`
  - **Description:** Authenticates a user and returns a JWT token.

### Blogs

- **Create Blog**
  - **URL:** `/api/blogs`
  - **Method:** `POST`
  - **Description:** Allows a logged-in user to create a blog.
  - **Request Header:**
    ```
    Authorization: Bearer <token>
    ```


- **Update Blog**
  - **URL:** `/api/blogs/:id`
  - **Method:** `PUT`
  - **Description:** Allows a logged-in user to update their own blog.
  - **Request Header:**
    ```
    Authorization: Bearer <token>
    ```

- **Delete Blog**
  - **URL:** `/api/blogs/:id`
  - **Method:** `DELETE`
  - **Description:** Allows a logged-in user to delete their own blog.
  - **Request Header:**
    ```
    Authorization: Bearer <token>
    ```


    
### Admin Actions

- **Block User**
  - **URL:** `/api/admin/users/:userId/block`
  - **Method:** `PATCH`
  - **Description:** Allows an admin to block a user by updating the `isBlocked` property to `true`.
  - **Request Header:**
    ```
    Authorization: Bearer <admin_token>
    ```

- **Delete Blog**
  - **URL:** `/api/admin/blogs/:id`
  - **Method:** `DELETE`
  - **Description:** Allows an admin to delete any blog by its ID.
  - **Request Header:**
    ```
    Authorization: Bearer <admin_token>
    ```

## Project Structure

The project directory structure is as follows:
## Project Structure

The project directory structure is as follows:

```
blogging-site
├── dist
├── node_modules
├── src/
│   ├── app/
           ├── builder/
              ├── queryBuilder.ts
           ├── config/
                ├── index.ts
           |── error/
              |── AppError.ts
              |── handleCastError.ts
              |── handleDuplicateError.ts
              |── handleValidateError.ts
              |── handleZodError.ts

           |── middleware/
                |── auth.ts
                |── globalErrorHandler.ts
                |── notFound.ts
                |── validateRequest.ts
           |── routes/
                |── index.ts
                
           |── modules/
                |── user/
                    |── userController.ts
                    |── userModel.ts
                    |── userRouter.ts
                    |── userService.ts
                    |── userValidation.ts
                |── admin/
                    |── adminController.ts
                    |── adminRouter.ts
                    |── adminService.ts
                |── auth/
                    |── authController.ts
                    |── authModel.ts
                    |── authRouter.ts
                    |── authService.ts
                    |── authValidation.ts
                |── Blog/
                    |── blogController.ts
                    |── blogModel.ts
                    |── blogRouter.ts
                    |── blogService.ts
                    |── blogValidation.ts    
           |── utils/
                |── catchAsync.ts
                |── sendResponse.ts
           |── interface/
                |── Error.ts
                |── index.d.ts
│   ├── app.ts/
│   ├── server.ts/
├── .env
├── gitignore
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
└── vercel.json
```


This structure includes the main directories and files you will work with:


## Project Author
Junaeid Ahmed Tanim

