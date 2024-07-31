# Moratorium Option Calculator

This is a moratorium option calculator application built using TypeScript, Webpack, HTML, and CSS. The application allows users to calculate the interest overdue based on selected moratorium options.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Input fields for loan amount, loan tenure, interest rate, and EMIs paid.
- Radio buttons for selecting interest options and moratorium months.
- Calculates interest overdue based on user inputs and selected options.
- Responsive UI styled with Bootstrap and custom CSS.

## Requirements

- Node.js (>= 14.x)
- npm (>= 6.x)

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/SamayJain10/moratorium-calculator.git
    cd moratorium-calculator
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

## Usage

### Development Server

1. **Build the project**:
    ```bash
    npm run build
    ```

2. **Start the development server**:
    ```bash
    npm start
    ```

3. Open your browser and navigate to `http://localhost:9000/`.

### Build for Production

To create a production build, run:
```bash
npm run build
```

## Project Structure

moratorium-calculator/
├── dist/
│   └── app.js              
├── src/
│   ├── index.html           
│   ├── style.css            
│   ├── index.ts               
│   ├── Calculator.ts          
│   └── UI.ts                 
├── package.json               
├── tsconfig.json              
├── webpack.config.js          
└── README.md    


## Contributing
Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch with your feature or bug fix.
3. Commit your changes.
4. Push to your branch.
5. Open a pull request.

## License
This project is licensed under the MIT License.
This `README.md` provides all necessary information to set up, use, and contribute to your Moratorium Option Calculator project.
