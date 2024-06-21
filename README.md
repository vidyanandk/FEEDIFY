# Feedify - Student Feedback Analysis Platform

# Overview
```
Feedify is a comprehensive student feedback analysis platform designed to streamline the process of collecting, analyzing, and understanding student feedback. This project utilizes modern web technologies, including ReactJS, NodeJS, ExpressJS, and TailwindCSS, alongside advanced Natural Language Processing (NLP) techniques powered by Hugging Face. The goal of Feedify is to enhance the feedback analysis process for college students, teachers, and administration, ultimately leading to improved educational experiences and institutional policies.
```
# Features
```bash
● Form Creation and Assignment: Admins can create feedback forms for specific subjects and 
  assign them to the corresponding teachers and students.
● Student Submission: Students can easily fill out the assigned feedback forms, providing their 
  insights and opinions.
● NLP Analysis:
    ● Sentiment Analysis: Automatically assesses the overall sentiment of the feedback 
      (positive, negative, or neutral) and provides a percentage breakdown.
    ● Text Summarization: Generates concise summaries of all responses to reduce the time 
      required for teachers to review feedback.
● Data Visualization: Provides bar and pie chart analyses for multiple-choice questions, 
  offering clear and intuitive visual representations of the feedback data.
● Teacher and Admin Dashboards: Teachers can analyze feedback to identify their strengths and 
  weaknesses, while administrators can gain insights into overall college performance and make 
  informed policy decisions.
```

# Technologies Used
```bash
● Frontend:
      ● ReactJS
      ● TailwindCSS
      ● HTML
      ● JavaScript
● Backend:
      ● NodeJS
      ● ExpressJS
● NLP:
     ● Hugging Face
```
-- in server
```bash

npm init --yes
npm i express mongoose dotenv nodemon cors
npm i bcrypt  
npm i jsonwebtoken cookie-parser
```

-- in frontend
```bash

npm install
npm i react-router-dom axios
npm install react-hot-toast

```
-- // CAUTION
```bash

1. THERE IS SOME PROBLEM IN USEEFFECT IN USECONTEXT SO AFTER SUCCESSFUL LOGGED IN 
   . RELOAD AGAIN.....

2. ==>ADMIN EMAIL: nitjalandhar@nitj.ac.in
      ADMIN PASSWORD: 123456789

3. ==>FACULTY EMAIL: sansa@nitj.ac.in
       ADMIN PASSWORD: 123456789

```
-- ** ADDED ANALYSIS, SUBMISSIONS, DELETE, NLP SUMMARIZER  ETC
```bash
1.  It's better to use your own BEARER {HF_API_KEY} IN getNLP() in authController.js
    as it may have api limit use, make HF_API_KEY from huggingface site .
```

```bash

===> Register with your own gmail(nitj domain) and then fill the form "Feedback of Courses and Teachers"
     then login as given admin email and faculty email see submissions & analysis .
===> plzz in additional comments/ suggestion write about 250-300 words to see nlp summarizer 
===> avoid using NLP SUMMARIZER for one word or short answer
 
```
-- ** ADDED FACULTY, ACCESSIBLE TO  ETC
-- ** ADDED NLP SENTIMENT ANALYSIS 
