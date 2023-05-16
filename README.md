# RESTAPI-Kurssi

## Description

You will learn to build a website with REST API for blogging, utilizing SQL database for post storage. Pair programming and Git usage will be encouraged. The website will include features such as displaying blog posts, an admin panel for post creation with authentication.

## Needed software

You need vs code from [here](https://code.visualstudio.com/) and I highly recomend using [github desktop](https://desktop.github.com/) for git usage. Now open vs code and click open folder. next open folder where you have this project on your computer. in vs code open terminal and type ```winget install nodejs``` to install nodejs. 

To create sql database and manage it I recomed using [UniServerZ](https://www.uniformserver.com/) and launch php my admin from it for easy use.

## Installation

1. Fork the repository and Clone it to your local machine.
2. Navigate to the project directory.
3. Install the dependencies by running the following command:``` npm install```
4. Start the application by running the following command:```node index```
5. Open your web browser and visit `http://localhost:3000` to access the application.

## API Routes
### Route 1: `/createnew/:passWord`
This route allows you to create a new password hash using bcrypt. It shows on browser
### Route 2: `/`
This route allows you to see all blog posts. 
### Route 3: `/blogPost`
This is restAPI for blog posts
### Route 4: `/accounts`
This is restAPI for accounts
### Route 4: `/adminBlogpostcreation`
This is where you can add blog posts 

## Task 1
You need to create sql database for this project and it need to have tvo tables one for one that have primary id, blog post headline and the actual blogpost. Other table is needed for admin user verification and it need to have primary id, username and crypted password.
next task is to modify blogpost model and accounts model file so it can be used for RESTAPI. You can see from previos course codes how it is done and apply it for this one.

## Task 2
You need to modify admininterface so it can add stuff to blogpost database.
Remember change code on database.js so it is correct for you sql server.
Next step is to populate database with information and test is evrything okay. 


## tutorial links
[phpmyadmin](https://www.youtube.com/watch?v=JgAyGjcNrIQ&t=400s) how to create new database.
[javascript](https://www.w3schools.com/js/default.asp) good tutorial for javascript.
[sql](https://www.w3schools.com/sql/default.asp)
[previos course codes](https://github.com/banksimul-2023-22spo/group_x)

## My information
if you counter eny problems that you can't solve be contacted to me on t2rymi00@students.oamk.fi or on whatsapp. I try to solve problems when ever I have time for that.