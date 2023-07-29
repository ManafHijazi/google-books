# Google Books ReactJS Application

This is a front-end web application built with ReactJS and Typescript, utilizing the Google Books API to fetch a list of books and display their details. The application includes a catalog page with search options to filter the books and a detail page showing the complete information of each book.

- **_To view a live demo: https://palmhr-googlebooks.surge.sh_**

![Google Books ReactJS Application](/src/assets/images/logo.png)

## Table of Contents

- [Google Books ReactJS Application](#google-books-reactjs-application)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Technologies](#technologies)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#testing)
  - [Folder Structure](#folder-structure)
  - [Contributing](#contributing)
  - [License](#license)

## Introduction

The goal of this project is to design and implement a front-end application that interacts with the Google Books API to retrieve and display information about various books. The application provides users with a catalog page where they can search for books using keywords and apply filtering criteria for main fields such as title, authors, publisher, ISBN, etc. Additionally, users can view the complete details of each book on a separate detail page.

## Features

- Search for books using keywords and filter criteria.
- View a list of books retrieved from the Google Books API.
- Access the full details of a book on a dedicated detail page.
- Utilize the selfLink property from the Google Books API to get the book's API URL.

## Technologies

The project is built using the following technologies and frameworks:

- ReactJS
- Typescript
- Jest (Testing framework)
- Vite (Build Tool)

## Installation

Follow these steps to set up the project locally:

1. Clone the repository from GitHub:

```sh
git clone https://github.com/ManafHijazi/google-books.git
```

2. Change to the project directory:

```sh
cd google-books
```

1. Install the dependencies:

```sh
npm install
```

## Usage

To run the application locally, execute the following command:

```sh
npm run dev
```

This will start a development server, and the application will be accessible at `http://localhost:3000`.

## Testing

This app is using Jest for unit tests:

- To run these tests run the following command:

```sh
npm run test
```

## Folder Structure

```sh
├── assets                   # Static assets
│   └── images               # Image files
├── helpers                  # Utility functions
├── layouts                  # Project layouts
│   ├── Home.tsx             # The Main Layout component
│   ├── Forbidden.tsx        # Custom Error Handling component
│   ├── NotFound.tsx         # Custom Error Handling component
│   └── ServerError.tsx      # Custom Error Handling component
├── pages                    # React.js pages
│   ├── BooksCataloguePage   # The Main Page component with the books list
│   ├── BooksDetailsPage     # Selected book details component
│   └── ErrorPage            # Custom Error Handling component
├── routes                   # React.js routes
├── services                 # Backend API services
├── jest.setup.js            # Jest configuration
├── .gitignore
├── README.md
├── package.json
└── package-lock.json
```

## Contributing

Contributions to this project are welcome. If you find any issues or want to add new features, feel free to submit a pull request. When contributing, please follow the existing code style, write clear commit messages, and make sure your changes do not break any existing functionality.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code for any purpose. Refer to the LICENSE file for more details.
