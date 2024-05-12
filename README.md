# Quotes Website

This is a simple quote website where users can add quotes along with the author's name and date. The quotes are displayed on the website for viewing.

[View Preview: https://harshrb2424.github.io/quote-app](https://harshrb2424.github.io/quote-app)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This website allows users to add their favorite quotes to a collection. Users can enter the quote, the author's name, and the date the quote was made. Once added, the quotes are displayed on the website for everyone to view.

## Features

- Add quotes with author names and dates.
- View added quotes.
- Local storage of author names and dates using cookies.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js installed on your local machine.
- PostgreSQL installed and running on your local machine.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Harshrb2424/quote-app.git
```

2. Navigate to the project directory:

```bash
cd quote-app
```

3. Open the `app.js` file in your preferred text editor.

4. Find the section where the PostgreSQL configuration is defined:

```javascript
// PostgreSQL connection configuration
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '2424',
    port: 2424
});
```

5. Update the configuration as required:

```javascript
// PostgreSQL connection configuration
const pool = new Pool({
    user: 'your_username',
    host: 'your_host',
    database: 'your_database',
    password: 'your_password',
    port: your_port
});
```

Replace `'your_username'`, `'your_host'`, `'your_database'`, `'your_password'`, and `your_port` with your actual PostgreSQL credentials.

6. Save the `app.js` file.

7. Commit your changes and push them to GitHub:

```bash
git add app.js
git commit -m "Update PostgreSQL configuration"
git push origin main
```

Now, your PostgreSQL configuration in the `app.js` file has been updated according to your requirements.

## Usage

1. Start the server:

```bash
npm start
```

2. Open your web browser and visit `http://localhost:3000` to access the website.
3. Click on "Add Quote" to add a new quote, author, and date.
4. The added quotes will be displayed on the website.

## Contributing

Contributions are welcome! If you find any bugs or have any feature requests, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
