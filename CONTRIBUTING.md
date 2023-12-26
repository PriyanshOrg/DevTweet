# 👨‍💻 Contributing


1. Forking the Repository
click on that fork button to fork the repository.
[![Fork the repository](https://oyepriyansh.pages.dev/i/f56b265fb21.png)](#-contributing)


2. Clone the repository 
```
git clone https://github.com/<YOUR-USERNAME>/DevTweet.git
```

3.  Navigate to the repository folder
```
cd DevTweet
```

4. Add a reference(remote) to the original repository.
```
git remote add upstream https://github.com/oyepriyansh/DevTweet.git
```
5.  Now go ahead and create a new branch and move to the branch
```
git checkout -b newpost
```

6.  Install dependencies and run in local
```
pnpm i
```
```
pnpm dev
```

> [!NOTE]
>  If you don't have pnpm installed in your system then run this command `npm i -g pnpm`

&nbsp;
7. Make your changes
<details open>
<summary><h5>Creating a post</h5></summary>
  
Go to `src/content/posts` directory. </p>

Create a markdown file, for example `hello.md`.

Now copy the template code from below, and put into your markdown file and replace the placeholder with actual values.

```md
---
layout: ../../layouts/PostLayout.astro
title: The title of the post
excerpt: A short description of the post
author: your-author-username
createdAt: Month Day, Year
---

**Post content goes here.**
```


#### Adding an Author

Go to  `src/util/authors.ts` file. just extend the array by adding your author username. Make sure it is in lowercase.

```ts
// Before:
export const AUTHORS = ["oyepriyansh",
  "william"];

// After:
export const AUTHORS = ["oyepriyansh",
  "william",
  "your-author-username"];
```

#### Author Image

You can add an image for yourself by uploading an image to the `/public/authors` directory. 
Please make sure to rename the image exact same as your author username in the `src/util/authors.ts` file.

> **Note**:  Capitalization does not matter for the image file, but still make it all lowercase.
</details>

8.  After done you can now push this changes, for doing that follow the following command in order

- `git add --all` (will add all the files to staging area)
- `git commit -m "<commit message>"`
> **Note**: replace the `<commit message>` with a good commit message, for example if you are adding a new post; the commit message will be **feat: new post by your-name`**.
- `git push origin newpost`

9.  After this go to your forked GitHub repository. Now you will see a popup saying **Compare & pull request**, click on it and create a pull request. <br>
    [![Compare & pull request](https://oyepriyansh.pages.dev/i/e98th7898r9h.png)](https://github.com/oyepriyansh/DevTweet/pulls) <br>
    **Make sure to add a good PR title, example: `feat: new post by your-name`.** 

That’s it! You have successfully contributed to DevTweet. Once the pull request is accepted and merged, your post will be live on DevTweet.