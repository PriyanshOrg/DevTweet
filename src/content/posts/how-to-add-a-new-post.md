---
layout: ../../layouts/PostLayout.astro
title: How to add a new post on DevTweet?
excerpt: In this post, you will learn how to post on DevTweet and contribute to the developer community.
category: Learn
author: oyepriyansh
createdAt: July 17, 2023
---

## To add a post on DevTweet, follow these steps:

1. Fork the Repo:
   Click on [this link](https://github.com/oyepriyansh/DevTweet/fork) to fork the repository to your GitHub account. This creates a personal copy of the project under your account, where you can make changes.

2. Create a Post:
   After forking, go to your forked repository and navigate to the `src/content/posts` directory. Create a new file with a meaningful name like `hello.md` (replace "hello" with your post's title).

   Inside the newly created file, add the following content with relevant information filled in:

   ```md
   ---
   layout: ../../layouts/PostLayout.astro
   title: Your Post Title
   excerpt: A short description about the post
   createdAt: YYYY-MM-DD
   author: Your GitHub Username
   ---

   **This is the content of the post.**
   ```

   Replace `Your Post Title`, `A short description about the post`, `YYYY-MM-DD`, and `Your GitHub Username` with appropriate information. The `createdAt` should be representing the date when the post is created.

3. Adding Yourself as an Author:
   Open the `src/util/authors.ts` file in the repository. You'll find an array called `AUTHORS`. Simply extend the array by adding your GitHub username as a string:

   ```ts
   // Before:
   export const AUTHORS = ["oyepriyansh"] as const;

   // After:
   export const AUTHORS = ["oyepriyansh", "YOUR_GITHUB_USERNAME"] as const;
   ```

   Replace `"YOUR_GITHUB_USERNAME"` with your actual GitHub username. This step ensures that your name appears as an author for the post you create.

   Additionally, to add an author image, follow these steps:

   - Upload your image to the `/public/authors` directory in the repository.
   - The image file name should be exactly the same as your GitHub username, but all in lowercase. For example, if your GitHub username is `YourGitHubUsername`, the image file should be named `yourgithubusername.png` or `yourgithubusername.jpg`.

   > **Note**: Capitalization does not matter for the image file, make it all lower-case.

That's it! You have successfully added a post to DevTweet. Commit your changes and create a pull request to merge your post into the original repository. Once the pull request is accepted and merged, your post will be live on DevTweet.

**Happy coding!**
