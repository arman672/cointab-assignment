# cointab-assignment

# To run the app use the command "npm start" from the frontend directory to start the frontend part and to start the backend server again use the command "npm start" form the backend directory.

# database table used --->

create database users;

create table user
(
    email varchar(50),
    password varchar(20),
    loginAttempts int,
    bolckedTime varchar(20)
);

# Data used for testing --->

insert into user values('hello@gmail.com','testing', 0,0);

insert into user values('batman@gmail.com','bats', 2,1671436656860);

insert into user values('shazam@gmail.com','thunder', 0,0);

insert into user values('ironman@gmail.com','3000', 0,0);

insert into user values('superman@gmail.com','3000', 3,1671480442049);
