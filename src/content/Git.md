---
layout: ../../layouts/PostLayout.astro
title: Deep understanding of git essentials
excerpt: Git commands and version controls
author: Rahmaaaan
createdAt: Jan 13, 2024
---

# Deep understanding of git essentials

## What is Git?

Git is a distributed version control system designed for tracking changes in source code during software development. Unlike centralized version control systems, Git operates as a distributed system, allowing every developer to have a complete copy of the repository on their local machine. This decentralization enables offline work and collaboration without constant reliance on a central server.

## Getting Started with Git

### Installation Guide

- **Linux:**
  Use the package manager (apt, yum, etc.) to install Git.

- **Mac OS X:**
  Git can be installed through Homebrew, MacPorts, or by downloading the installer from the [official Git website](https://git-scm.com/).

- **Windows:**
  Download the installer from the [Git website](https://git-scm.com/) and follow the installation wizard.

### Configuration

Once Git is installed, configure user credentials:

```bash
# Open a terminal or command prompt
git config --global user.name "Your Name"
git config --global user.email "your_email@example.com"
```

To list all configurations set in Git:

```bash
git config --list
```

## Git Commands

### Repository Initialization and Cloning

#### Initializing a Repository

Initialize a new Git repository:

```bash
git init
```

This creates a hidden `.git` folder containing version control information.

#### Cloning a Repository

Clone an existing repository:

```bash
git clone <repository_url>
```

This copies the entire repository history and files to the local machine.

### Staging Changes

#### Adding a particular file

Add specific file changes to the staging area:

```bash
git add <file_name>
```

#### Adding all the files

```bash
git add .
```

Stages all modifications and additions within the current directory.

```bash
git add --all
```

Stages all modifications, additions, and deletions across the entire project.

### Reviewing

#### Checking Status

Use `git status` to check the current state of the repository.

#### Viewing Differences

```bash
git diff
```

Showcases disparities between the current state and the last commit.

```bash
git diff --staged
```

Spotlights alterations currently staged for the next commit.

### Committing Changes

```bash
git commit -m "Commit message"
```

Records changes staged in the commit with a descriptive message.

```bash
git commit -am "Commit message"
```

Combines "add" and "commit" actions, staging all modified files and immediately committing them with a message.

### Inspecting Commits

#### Viewing Commit History

```bash
git log
```

Presents a chronological history of commits with essential details.

```bash
git log --oneline
```

Provides a condensed log with abbreviated commit hashes alongside commit messages.

#### Inspecting Specific Commits

```bash
git show <commit_hash>
```

Displays detailed information about a specific commit.

### Undoing Changes

#### Unstaging changes

```bash
git reset <file_name>
```

Removes specific files from the staging area while retaining changes in the working directory.

#### Resetting changes

```bash
git reset --hard HEAD
```

Resets both the staging area and the working directory to match the state of the last commit (HEAD).

#### Reverting commits

```bash
git revert <commit_hash>
```

Creates a new commit that effectively undoes the changes introduced by a particular commit.

## Branching and Merging in Git

### Creating and Switching Branches

```bash
git branch
```

Lists all branches with an asterisk denoting the current active branch.

```bash
git branch <branch_name>
```

Creates a new branch starting from the current commit.

```bash
git checkout <branch_name>
```

Switches the working directory to the specified branch.

### Merging Changes

```bash
git merge <branch_name>
```

Integrates changes from a specified branch into the current branch.

## Remote Repositories

A remote repository is a version of your project hosted on a different location or server.

```bash
git remote add origin <remote_url>
```

Links the local repository to a remote repository identified by the name "origin" and the specified URL.

```bash
git remote -v
```

Lists all remote repositories associated with the local repository.

```bash
git pull <remote> <branch>
```

Fetches changes from a remote repository and merges them into the current branch.

```bash
git push <remote> <branch>
```

Pushes committed changes from the local repository to the specified remote repository and branch.

## Miscellaneous

- `.gitignore` file specifies files and directories to be excluded by Git from tracking or being committed.

```bash
git rm <file_name>
```

Removes a file from the repository and stages its deletion for the subsequent commit.

```bash
git clean -df
```

Clears out untracked files and directories from the working directory.

This comprehensive guide provides developers with a strong foundation in Git, facilitating efficient collaboration, precise version control, and streamlined project management. Mastering these essentials unlocks Git’s potential, propelling software development toward greater efficiency and collaboration.
