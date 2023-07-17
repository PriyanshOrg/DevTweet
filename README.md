<div align="center">
<h1>DevTweet - Unleash Your Developer Voice</h1>
</div>

## ‼ About

DevTweet is an exciting open-source project designed exclusively for developers. It serves as a microblogging platform, allowing developers to post their thoughts and updates through contributions. It's a space where developers can freely share their ideas and connect with the community.

## ❔ What to Post
You can post anything related to the developer community, such as code snippets, best practices, project showcases, tech news, opinions, learning resources, and more, including introducing yourself or showcasing your GitHub profile.

## 🤔 How to Contribute
> Thank you for your interest in contributing to our open-source project!

### 1. Forking the Repo
A fork is a local copy of the repository that is on your GitHub account, and you can make changes on that repository.
#### [Click here to Fork](https://github.com/oyepriyansh/DevTweet/fork)

### 2. Creating a Post
You can create a post super easily by making a new file in the `src/content/posts` directory.

For example, you could create the file `hello.md`. Now, you need to fill in the frontmatter of the post. This stores basic data about the post.

You can also supply `image` and `slug` to the frontmatter.

```md
---
layout: ../../layouts/PostLayout.astro # Always use this layout, it's so the post gets properly styled
title: the title of the post
excerpt: a short description about the post
createdAt: the date
author: your name
---

**This is the content of the post.**
```

### 3. Adding an Author

Go to  `src/util/authors.ts` file. just extend the array by adding your github username.

```ts
// Before:
export const AUTHORS = ["oyepriyansh"] as const;

// After:
export const AUTHORS = ["oyepriyansh", "YOUR_GITHUB_USERNAME"] as const;
```

### 4. Author Image

You can add an image for yourself by uploading an image to the `/public/authors` directory. Please make sure that is it spelt the exact same as your github username in the `src/util/authors.ts` file.

> **Note**:  Capitalization does not matter for the image file, make it all lower-case.

### 5. Pull Request
- You can now commit changes to tha t repository. Once you've made the changes you want, [create a pull request](https://github.com/oyepriyansh/DevTweet/pulls) on the main repository.
- Once you have submitted pull request, it will be reviewed and merged as soon as possible

## 👨‍💻 Contributing 
Contributions make the open source community such an amazing place to learn, inspire, and create. <br>
**Any contributions you make are truly appreciated!**

## 🆘 Need Help
Join our discord server for any kind of help. <br>

<a href="https://discord.com/invite/AeAjegXn6D"><img src="https://invidget.switchblade.xyz/AeAjegXn6D" alt="Discord Server"></a>

## 🙏 Support
Thank you for contributing to our open-source project! We appreciate your support 🚀 <br>
Don't forget to leave a star ⭐
