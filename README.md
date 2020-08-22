
# Summer of Tech - Create Camp Hackathon
Summer of Tech Create Camp 2020

# Team 1
Team Won Direction

| Position                          | Name            |
| --------------------------------- | --------------- |
| Designer / Thinker                | Piyush          |
| Coder                             | Gelan Ejeta     |
| Coder                             | Fai             |
| Coder                             | Cherie          |
| Coder                             | Gene            |
| Extra  Designer / Thinker / Coder | Cristi ilagan   |


# App Name
COVID Tracker For Transit

## Three C's for the focuses of Create Camp 2020
+ Customers
+ Community
+ Cloud

## Design ( 5 pts )
### End Product
+	Does it fit in (loosely) with our 2020 themes: Customer, Community?
+	Does it deliver a compelling and captivating user experience? 
+	Were design best practices and guidelines used? (accessible, responsive)
+	Does it have a professional look and feel?
### Design Process
+	Was there design iteration during the project?
+	How well was the user experience tested?
+	How well was feedback incorporated into the application?

## Execution ( 10 pts )
+	Does the app work?
+	Did the story/app/product make sense?
+	Was the project goal accomplished?
    +	Technical difficulty and complexity of the project
    +	Level of detail achieved
+	Was one or more APIs/Datasets used, including at least one from NZ?
+	Have they established a "Minimal Viable Product" for the weekend?

## Impact and Innovation ( 5 pts )
+	Is the project a unique take on the data chosen?
+	Would people use this or find this interesting in real life?
+	How much would it affect users who did?
+	Does the project have follow-up options or growth/pivot/extension potential?
+	Is it memorable? 
**Note: projects don’t have to have a specific money making model to have impact, but having business potential would be one method of demonstrating impact.**


## Technology & Process (10 pts)
### Technological Choices
+	Were the right tooling/libraries used for the problem space?
+	Did they explore/experience our 2020 theme: Cloud?
### Development
+	How detailed an accounting of the good and bad things in the codebase has taken place? Ie How transparent has the group been about the things they’re proud of, and the things they know could be better next time?
+	How functional is the thing that was built? Does it do what it’s supposed to do? Are there any glaring bugs visible?
+	What was the testing methodology? More points should be awarded for testing the prototype with users in real time, rather than testing with unit or integration tests, although the presence of these things should be worth more then if there are none
### Process
+	Is there evidence of an agile mindset & tools?
+	How did the team work together?



# A starter webpack project for React

This is a starter project that uses webpack to transpile and bundle ES6 React code. To use, consider these steps:

* Fork this repo
* Rename your repo according to the app you're building

```sh
git clone https://github.com/[your-account]/[your-app].git
cd [your-app] && npm i
```

To start the development server with a watcher that rebuilds your code, run `npm run dev`. The assets built by webpack are placed in `server/public`. This folder is defined as a static folder in an Express.js server that can be started with `npm run server`.

Additional components should be placed in `client/components`.

## Separate client/server

The boilerplate is also set up to host the client using `webpack-dev-server` with hot module reloading etc. To use this method, in one terminal run:
```sh
npm run client
```
and in the other:
```sh
npm run server
```
The client will be available on http://localhost:8080 and the server on http://localhost:3000. Note that you will still need to manage CORS between the two, as they are on different ports.

