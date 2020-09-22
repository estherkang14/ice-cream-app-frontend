# Find My Ice Cream

Flatiron School - Module 4 Project - created by Michael Jester and Esther Kang (2020)

![findmyicecreamlogo]](https://cdn.discordapp.com/attachments/749783037281042626/758082506263101541/findnewer.png)

- Frontend: https://github.com/estherkang14/ice-cream-app-frontend
- Backend: https://github.com/mjester93/ice-cream-app-backend
- Demo Video: https://vimeo.com/460740989

## Project Details

Find My Ice Cream is an app that allows users to locate ice cream stores in the Washington D.C. and Baltimore areas. Users are able to search using an interactive map and search filters. Users, once signed up or logged in, are also able to leave reviews for ice cream stores and add ice cream stores to their favorites.

This application gathers API data from: 
- leafletmap.org (a Javascript library for interactive maps)

Libraries and gems used: 
- react-router-dom
- Semantic UI 
- gem `bcrypt` 
- gem `rest-client`
- gem `json`
- gem `jwt`

## Installation instructions:
1. Clone both the frontend and backend repositories to your computer
2. Run `bundle install` on the backend repository to install the required gems
3. Run `rails db:migrate && rails db:create`, then `rails db:seed` to migrate the schema and seed your data
4. Run `rails s` to start the backend server
5. Run `npm install` on the frontend repository (this one) to install the required libraries
6. Run `npm start` to start the frontend server
7. Open `http://localhost:3001` to view your server 
8. To end, `cmd + C` in the terminal that is running your server (for both your frontend and backend) to stop running the server.


