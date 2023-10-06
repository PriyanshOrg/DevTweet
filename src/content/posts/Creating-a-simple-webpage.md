---
layout: ../../layouts/PostLayout.astro # Always use this layout, it's so the post gets properly styled
title: Creating a Simple Web Page
excerpt: Let's dive into a beginner-friendly tutorial on creating a simple web page
author: maida12
createdAt: October 5, 2023
---

Tutorial: Creating a Simple Web Page
1. Setting Up Your Workspace:

Open a text editor of your choice. Notepad, Visual Studio Code, or Sublime Text are good options.

2. Creating the HTML File:

Create a new file and save it with a .html extension, for example, index.html. Add the following basic structure:

html
Copy code
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Page Title</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <!-- Your content goes here -->

</body>
</html>
This is the basic structure of an HTML document.

3. Adding Content:

Inside the <body> tag, add some content. For example:

html
Copy code
<h1>Hello, World!</h1>
<p>This is a simple web page created with HTML and CSS.</p>
4. Creating the CSS File:

Create a new file and save it with a .css extension, for example, styles.css. Link this file in your HTML file, as shown in the <head> section.

5. Styling with CSS:

In your styles.css file, you can style the HTML elements. For example:

css
Copy code
body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
}

h1 {
    color: #333;
}

p {
    color: #666;
}
Feel free to experiment with different styles and properties.

6. Preview Your Web Page:

Open your HTML file in a web browser to see your page. Right-click on the file and choose "Open with" and select your preferred browser.

Congratulations! You've just created a simple web page using HTML and CSS. This is just the beginning, and you can explore more advanced topics like JavaScript for interactivity, responsive design, and more as you progress in your web development journey.