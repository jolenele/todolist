# todolist

Description : Build a http server to support a todolist web app UI/UX.

---

### Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environment.

### Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

## Install and Run the project locally

    $ git clone https://github.com/jolenele/todolist.git
    $ cd todolist
    $ node index.js

### Routes

More Details: Todolist.postman_collection.json

### Outcome self-assessment:

- Strayed way from http api and use express framework as a bad habit.
- Did not apply async/await practice from the beginning causing downtime while debugging.
- Overall: the outcome does not perform well as planned.

### What areas need improvement:

- PostgreSQL syntax
- DevOps: Choose the technologies that are compatible, and deliver the best product.
