# Marrfa Assignment

This project is a web application designed to implement a **Blog Search** functionality. It allows users to search for blog posts, view individual blog details, and filter them based on categories or tags. The application is built with **React.js**, styled using **CSS**/**SCSS**, and is structured to be responsive and user-friendly.

## Features Implemented
- **Search Bar**: Users can search for blog posts by entering keywords.
- **Filter Functionality**: Blog posts can be filtered by categories or tags.
- **Pagination**: Blog posts are paginated to avoid long lists.
- **Detailed View**: Users can click on a blog post to view the full details.
- **Responsive Design**: The application is responsive and adjusts to different screen sizes (mobile, tablet, desktop).
- **Animations**: Smooth animations are added to improve user experience using **Framer Motion**.

## Technologies Used
- **React.js**: Frontend library for building the user interface.
- **CSS/SCSS**: For styling the components.
- **Framer Motion**: For adding animations to the app.
- **Node.js**: JavaScript runtime for backend (if needed).
- **npm**: Package manager for handling dependencies.

## Installation and Setup

To run this project locally, follow the steps below:

### Prerequisites
- Install [Node.js](https://nodejs.org/) (which includes npm) if not already installed.
- Ensure you have a GitHub account to clone the repository.

### Steps to Run Locally

1. **Clone the repository:**

   Open your terminal and clone the repository using the following command:

   ```bash
   git clone https://github.com/Fardeeeeen/marrfa-assignment.git
Navigate into the project folder:

bash
Copy code
cd marrfa-assignment
Install dependencies:

Run the following command to install the required dependencies:

bash
Copy code
npm install
Start the development server:

After the dependencies are installed, run the following command to start the development server:

bash
Copy code
npm start
This will open the application in your default browser at http://localhost:3000.

Running Tests
To run tests (if applicable), you can use the following command:

bash
Copy code
npm test
Build for Production
To build the app for production, use:

bash
Copy code
npm run build
This will create an optimized build of your app in the build/ folder, ready to be deployed.

Project Structure
The project is organized in the following manner:

bash
Copy code
/marrfa-assignment
  ├── /public
  |   └── index.html
  ├── /src
  |   ├── /components
  |   |   ├── Header.js
  |   |   ├── SearchBar.js
  |   |   ├── BlogCard.js
  |   |   ├── BlogDetail.js
  |   |   ├── FilterSidebar.js
  |   ├── /assets
  |   |   ├── logo.png
  |   ├── App.js
  |   ├── index.js
  ├── /node_modules
  ├── package.json
  ├── package-lock.json
  ├── README.md
Key Components Explained
Header.js:

Displays the website header.
Contains the application title and navigation (if applicable).
SearchBar.js:

A functional component that allows users to search for blog posts by keywords.
Contains input handling and a button to submit the search.
BlogCard.js:

Displays each blog post in a card format with the title, an excerpt, and a preview image.
Clicking on the card navigates to the detailed view of the blog post.
BlogDetail.js:

Displays the full details of a selected blog post, including the content, images, and any metadata such as the date and author.
FilterSidebar.js:

A sidebar component that allows users to filter blog posts based on categories or tags.
Supports multi-filtering for more precise search results.
App.js:

The main component that contains the routing logic and renders other components.
Manages the state for blogs, search keywords, and filter options.
index.js:

Entry point for the React app that renders the App.js component to the DOM.
Animations with Framer Motion
The application uses Framer Motion to add smooth animations to various components. For example:

SearchBar Animation: Smooth fade-in effect when the search bar appears.
Blog Card Animation: Each blog card fades in with a slight slide-up effect as the user scrolls.
These animations enhance the user experience and make the application feel more interactive.

Contributing
If you'd like to contribute to this project, feel free to open a pull request. Here's how you can contribute:

Fork the repository.
Create a new branch for your feature or fix.
Make your changes.
Submit a pull request.
License
This project is licensed under the MIT License - see the LICENSE file for details.