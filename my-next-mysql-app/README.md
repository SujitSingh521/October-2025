<!-- ✅ MySQL Table Setup

Make sure you have this in your DB: -->

CREATE DATABASE IF NOT EXISTS myapp;

USE myapp;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  age INT,
  city VARCHAR(100)
);



<!-- Chatgpt :- https://chatgpt.com/c/68dce5e9-0fe8-832c-8154-05d9d9e4a9d3 -->