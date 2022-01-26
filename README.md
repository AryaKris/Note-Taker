# Express.js: Note Taker

![Github licence](http://img.shields.io/badge/license-MIT-green.svg)

Modifying starter code to create an application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file. The entire application is deployed in Heroku. 

## Walkthrough Video

Full link to the functionality of application - https://watch.screencastify.com/v/C2OAiFbVXthio5aGF26c

## Table of Contents 

  * [Process](#Process)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)


## Process

On the back end, the application uses  a `db.json` file that will be used to store and retrieve notes using the `fs` module.

The following HTML routes should be created:

* `GET /notes` return the `notes.html` file.

* `GET *` return the `index.html` file.

The following API routes are created:

* `GET /api/notes`  read the `db.json` file and return all saved notes as JSON.

* `POST /api/notes`  receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

* `DELETE /api/notes/:id` receive a query parameter that contains the id of a note to delete. All the notes from the`db.json` file is read and , the note with the given `id` property can be removed.

* Application is deployed to `Heroku`

  ## Usage


 ## Contributing

  Please follow the fork and pull Git workflow. 

  ## Tests
  npm

  ## Questions
  Feel free to contact on any questions related with this repo at dr.aryakris@outlook.com



