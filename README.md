# To-Do List Application

Welcome to the To-Do List Application! This web application allows you to manage your tasks efficiently, with separate routes for today's to-do list and your work list.

## Technologies Used

- HTML: Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. In this project, HTML is used to structure the content of the web pages, defining the layout and semantics of the elements.

  - [HTML Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML)
  ![HTML Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/64px-HTML5_logo_and_wordmark.svg.png)

- CSS: Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in HTML. CSS is used to enhance the visual presentation of the web pages, including colors, fonts, spacing, and layout.

  - [CSS Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS)
  ![CSS Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/64px-CSS3_logo_and_wordmark.svg.png)

- Node.js: Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript code outside of a web browser. In this project, Node.js is used to build the backend server, handle requests, and serve the web application to clients.

  - [Node.js Documentation](https://nodejs.org/en/docs/)
  ![Node.js Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/64px-Node.js_logo.svg.png)

- EJS (Embedded JavaScript): EJS is a simple templating language that lets you generate HTML markup with plain JavaScript. It allows you to embed JavaScript code directly into your HTML templates, making it easier to generate dynamic content based on data from the server.

  - [EJS Documentation](https://ejs.co/#docs)

- Express: Express is a minimal and flexible Node.js web application framework that provides a set of features for building web applications and APIs. It simplifies the process of handling HTTP requests, routing, middleware integration, and more. In this project, Express is used to define routes, handle requests, and manage the application's middleware.

  - [Express Documentation](https://expressjs.com/en/4x/api.html)
   ![Express Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Expressjs.png/64px-Expressjs.png)

- Nodemon: Nodemon is a utility that automatically restarts the node application when file changes in the directory are detected. It's commonly used during development to streamline the development process.

  - [Nodemon Documentation](https://nodemon.io/)


## Getting Started

To run this application locally, follow these steps:

1. Clone this repository:
   ```
   git clone https://github.com/Jaweria-B/to-do-list-v1
   ```

2. Navigate to the project directory:
   ```
   cd to-do-list-v1
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the server:
   ```
   nodemon start
   ```

5. Open your web browser and go to `http://localhost:3000` to view the application.

## Routes

- `/`: This is the home route, displaying today's to-do list for the current date and day. It lists all the tasks that need to be completed for the current day. Users can add, edit, and delete tasks from this list.

- `/work`: This route displays the work list. It includes tasks specifically related to work or professional responsibilities. Users can manage their work-related tasks separately from their personal to-do list.
