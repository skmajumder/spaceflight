# Your Project Name

## SpaceX Launches Information App

This is a React (React + Vite) application that provides information about SpaceX launches. It utilizes various modern web development technologies and best practices to offer a user-friendly and responsive interface for exploring SpaceX launch data.

## Live URL

[live-url](https://spaceflight-assignment.netlify.app)

## Features

- Context: Utilizes React Context for managing global state and avoiding prop drilling.
- Hooks: Implements React Hooks for state management and side effects.
- Routing: Utilizes React Router DOM v6 for handling routing and navigation within the app.
- Functional Components: Emphasizes the use of functional components with minimal or no prop drilling.

## Data Source

- The application fetches launch data from the SpaceX API using the following source:
  - [SpaceX API] (https://api.spacexdata.com/v3/launches)

## User Interface

- The user interface is designed following the layout provided in a Figma design.
- External UI Framework: Utilizes Bootstrap 5 for styling and UI components.
- Customization: The project leverages SCSS and CSS variables for customizing typography and colors.
- Responsiveness: The UI is designed to be responsive, matching the specifications in the Figma file.
- Minimal CSS: Efforts are made to avoid writing unnecessary or extra CSS classes.

## Search Functionality

- Search is implemented by Rocket Name.

## Filtering Data

- The application provides options for filtering data based on:
- Launch Date:
- Last Week
- Last Month
- Last Year
- Launch Status:
- Failure
- Success
- All upcoming launches.

## Pagination

- A pagination feature is added, displaying 9 items per page.
- The application remembers the user's selected page even after a page reload.

## Getting Started

To set up and run the application, follow the installation and usage instructions in the project's README file.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: [Install Node.js](https://nodejs.org/) on your system.

## Dependencies

This project relies on the following dependencies:

- **Bootstrap (v5.3)**: A popular CSS framework for building responsive and mobile-first websites.
- **React Router Dom (v6.17.0)**: A library for handling routing in React applications.
- **React Icons (v4.11.0)**: A set of high-quality SVG icons for React projects.
- **LocalForage (v1.10.0)**: A fast and simple storage library for web and mobile applications.
- **React (v18.2.0)**: The core library for building user interfaces with React.

## Installation

To get started with this project, follow these steps:

1. Clone this repository: `git clone https://github.com/skmajumder/spaceflight.git`
2. Change to the project's directory: `cd spaceflight`
3. Install project dependencies: `npm install`

## Usage

After installing the project and its dependencies, you can run it using the following command:

```bash
npm run dev
```

## Build the Project

To build the project

```
npm run build
```
