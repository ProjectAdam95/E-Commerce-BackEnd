# E-Commerce Back End

This project uses modern technologies to build a back-end for an e-commerce platform, enabling efficient server-side operations, database interactions, and data management.

# Introduction
 
 This project is designed to create a powerful back-end system for an e-commerce platform using modern web technologies. The combination of Node.js, Express.js, Sequelize, and PostgreSQL enables the application to handle server-side operations, interact with a relational database, and manage data.

## :ledger: Index

- [About](#beginner-about)
- [File Structure](#file_folder-file-structure)
- [Build](#hammer-build)  
- [Deployment](#rocket-deployment)  
- [Community](#cherry_blossom-community)
- [Contribution](#fire-contribution)
- [Resources](#page_facing_up-resources)
- [Gallery](#camera-gallery)
- [Credit/Acknowledgment](#star2-creditacknowledgment)
- [License](#lock-license)

##  :beginner: About

The E-Commerce Back End is a RESTful API built using Node.js, Express.js, and Sequelize. It provides the necessary infrastructure for managing an e-commerce store's inventory, including products, categories, and tags.
 
Features include:
- Product Management: Create, read, update, and delete products in the store's inventory.
- Category Management: Organize products into categories, allowing for easy filtering and organization.
- Tag Management: Assign multiple tags to products, enabling advanced filtering and search capabilities.
- Database Integration: Uses PostgreSQL as the database, with Sequelize ORM for efficient data management.
- API Documentation: Fully documented API routes for interacting with products, categories, and tags.

Additional Features:

- Preview Photos: Includes a preview image/gif that demonstrate the application's output and functionality. Assisting with the user navigating through.
- Directory Structure: Easy-to-navigate file structure and readm-me.md.

###  :file_folder: File Structure

Below is a view of the file structure deployed to GitHub.

```plaintext

E-Commerce-BackEnd/
│
├── config/
│   └── connection.js        # Database connection setup
│
├── db/
│   └── schema.sql           # SQL script for creating the database schema
│
├── models/
│   ├── Category.js          # Category model definition
│   ├── index.js             # Model associations
│   ├── Product.js           # Product model definition
│   ├── ProductTag.js        # ProductTag model definition
│   └── Tag.js               # Tag model definition
│
├── node_modules/            # Node.js dependencies (auto-generated)
│
├── routes/
│   ├── api/
│   │   ├── category-routes.js  # Routes for category management
│   │   ├── index.js            # Main API route handler for API routes
│   │   ├── product-routes.js   # Routes for product management
│   │   └── tag-routes.js       # Routes for tag management
│   └── index.js               # Main API route handler
│
├── seeds/
│   ├── category-seeds.js     # Seed data for categories
│   ├── index.js              # Main seed file to run all seeds
│   ├── product-seeds.js      # Seed data for products
│   ├── product-tag-seeds.js  # Seed data for product-tag associations
│   └── tag-seeds.js          # Seed data for tags
│
├── .env                      # Environment variables
├── .gitignore                # Git ignore file
├── package-lock.json         # Lockfile for installed dependencies
├── package.json              # Project metadata and dependencies
├── README.md                 # Project documentation
└── server.js                 # Main server file


```

###  :hammer:

Build

- Requirements
- Node.js (v14 or higher)
- PostgreSQL
- NPM (Node Package Manager)

- File changes updated and modified using terminal eg. Git bash to add, commit and pull e.t.c.
- Code Editor: Used code editor e.g VS code , to modify existing code and make changes to the javascript code as per request.
- Version Control: Regularly committed changes to a Git repository to track progress and maintain version history.
- Testing and Debugging: Tested the application to ensure compatibility and responsiveness.
- Documentation: Documented code changes, setup instructions to facilitate collaboration and future maintenance.
- Code notes: Notes explaining what each piece of code does, such as a function in Javascript. It is displayed above the corresponding code.
- This enables developers to easily read the code and identify how the application works. Notes have been added to the JS files.

### :rocket: Deployment

  To deploy this application please follow the below instructions:

- 1. Navigate to your terminal so you can save the file to your computer
- 2. Clone the repository using "git clone "ENTER URL HERE"
- 3. Install dependencies using "npm install"
- 4. Set up your environment variables in a .env as per below:
    DB_NAME='ecommerce_db'
    DB_USER='your_postgresql_username'
    DB_PASSWORD='your_password'
- 5. Create the database schema using "psql -U your_postgresql_username -d ecommerce_db -f db/schema.sql" in the terminal.
- 6. Seed the database with initial data using "npm run seed".
- 7. Start the server using "npm start".
- 8. The server will start on http://localhost:3001.
- 9. Run this on your local machine such as an API client or API testing tool such as Insomnia/Postman or other testing software.

    If you are stil stuck and unable to resolve an issue do not hesitate to contact me on 
    my email or leave a comment in the issues links below under the contribution section!

 ###  :fire: Contribution

    Your contributions are always welcome and greatly appreciated. Here are some ways you can contribute to the project:
    Steps to contribute are listed below:
  1. Fork the repository.
  2. Create a new branch (git checkout -b feature-branch).
  3. Make your changes and commit them (git commit -m 'Add new feature').
  4. Push to the branch (git push origin feature-branch).
  5. Open a pull request. Links are provided below for ease.

 1. **Report a bug** <br>
 If you think you have encountered a bug, and I should know about it, feel free to report it here [here](https://github.com/ProjectAdam95/E-Commerce-BackEnd/issues). I will look into it and take the necessary steps.
 
 2. **Request a feature** <br>
 If you have a feature idea that you think would enhance the project, you can request it [here](https://github.com/ProjectAdam95/E-Commerce-BackEnd/issues), If the feature is deemed viable, it will be considered for development. 

 3. **Create a pull request** <br>
 The best way to contribute is by creating a pull request. The community will appreciate your efforts. You can start by pic ing up any open issues from [here](https://github.com/ProjectAdam95/E-Commerce-BackEnd/issues)and submitting a pull request.

##  :page_facing_up: Resources

Technologies used
- Node.js: JavaScript runtime for executing server-side code.
- Express.js: Web framework for building server-side applications and APIs.
- Sequelize: ORM for interacting with SQL databases using JavaScript.
- PostgreSQ: Relational database for storing and managing structured data.

Software used
- VS Code -  A powerful code editor for writing and managing code across various programming languages.
- Git Bash - A command-line interface for Git, providing Unix-like shell commands for version control and repository management.
- LICEcap - A screen recording software

##  :camera: Gallery
Below is a preview photo of the website.

- Click here to view preview video/gif!: ENTER WEBSITE HERE

You may also download the image/gif for your own reference :D

## :star2: Credit/Acknowledgment
Adam Todorovic

##  :lock: License
This project is licensed under the MIT License.
