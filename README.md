# Monitoring & Docker

## Requirements

1. Node.js
2. NPM (Node Package Manager) or Yarn
3. Docker

## Installation

1.  Clone the repository to your local machine.
2.  Navigate to the project's root directory.
3.  Open a terminal and run the following command to install all dependencies:<br />
    `npm install` <br />
    or <br />
    `yarn install`

## Running

To run the application locally, follow these steps:

1.  Navigate to the project's root directory.
2.  In the terminal, run the command:<br />
    `npm run build`<br />
    next<br />
    `npm run dev`

Now application should work on http://localhost:3000.

3. Start docker and run the command in the terminal: <br />
   `docker compose up`<br />

Now grafana works on http://localhost:3010/ and Prometheus works on http://localhost:9090.
