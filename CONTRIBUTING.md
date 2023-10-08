# 👨‍💻 Contributing

### 1. Forking the Repo
A fork is a local copy of the repository that is on your GitHub account, and you can make changes on that repository.

[**Click here to fork the repository.**](https://github.com/oyepriyansh/DevTweet/fork)

### 2. Creating a Post
You can create a post easily by making a new file in the `src/content/posts` directory.

For example, you could create the file `hello.md`. Now, you need to fill in the frontmatter of the post. This stores basic data about the post.

You can also supply `image` and `slug` to the frontmatter.

```md
---
layout: ../../layouts/PostLayout.astro # Always use this layout, it's so the post gets properly styled
title: The title of the post
excerpt: A short description of the post
category: What category/section does your post fall into? 
author: your-author-username
createdAt: Month Day, Year
---

**Post content goes here.**
```

*List of categories: TechNews, HowTo..?, Learn, Perspective, Miscellaneous, Introductions, Workshops, Competitions, Resource*
**Note:**
    - TechNews: self explanatory. post about job market, ceos/leaders of industry, companies and so on.
    - Learn: post about any explaining technical concept/application/software etc. Not necessarily involves any code. But having is a plus!
    - Perspective/Experience: Personal/Informal view/opinion/take on something(could be an ongoing topic, a custom way to do something etc. Something of your own/your perspective) (OR) an experience you would like to share.
    - Introductions: post about introducing oneself, sharing github/linkedin profiles.
    - Workshops: post about online/offline workshops that are going to be held.
    - Innovate: post about new ideas, projects,  
    - Resource: post sharing resource(s) of any kind. Repositories, pdfs etc. 
    - Miscellaneous: post that doesn't fall into any of the above categories.

### 3. Adding an Author

Go to  `src/util/authors.ts` file. just extend the array by adding your desired username. Make sure it is in lowercase.

```ts
// Before:
export const AUTHORS = ["oyepriyansh", "william"] as const;

// After:
export const AUTHORS = ["oyepriyansh", "william", "your_desired_username"] as const;
```

### 4. Author Image

You can add an image for yourself by uploading an image to the `/public/authors` directory. Please make sure that is it spelt the exact same as your username in the `src/util/authors.ts` file.

> **Note**:  Capitalization does not matter for the image file, but still make it all lowercase.

### 5. Pull Request
- You can now commit changes to the DevTweet repository. Once you've made the changes you want, [create a pull request](https://github.com/oyepriyansh/DevTweet/pulls). **Make sure to add a good PR title, example: `feat: add post by johndoe`.**
- Once you have submitted your pull request, it will be reviewed and merged as soon as possible.
