# Promptfolio / Rebecca CLI

A command-style portfolio website built with React and TypeScript.

Instead of using a traditional navigation menu, users can type commands such as `about`, `skills`, `projects`, `resume`, and `contact` to explore the portfolio.

This project was also created as a practice project for learning Playwright and writing automated end-to-end tests for user-facing web workflows.

## Overview

Promptfolio is a small interactive portfolio project that uses a prompt-style interface. Users type commands into an input field, and the page returns matching information, links, or helpful messages.

The project focuses on both frontend development and quality assurance. It demonstrates React and TypeScript skills while also showing how important user flows can be tested with Playwright automation.


## Tech Stack

* React
* TypeScript
* CSS
* Vite
* Playwright

## Available Commands

| Command    | Description                                |
| ---------- | ------------------------------------------ |
| `about`    | Shows a short introduction                 |
| `skills`   | Shows technical and testing skills         |
| `projects` | Shows project information or project links |
| `resume`   | Shows resume link                          |
| `contact`  | Shows LinkedIn, GitHub, and email links    |
| `cmds`     | Shows all available commands               |
| `clear`    | Clears command history                     |

## Testing Focus

This project includes Playwright automated end-to-end tests for:

* Landing page content
* Prompt input visibility
* Valid command behavior
* Invalid command handling
* Contact links
* Resume and project links
* Link href validation
* Contact logo visibility
* Command history clearing
* Reusable Page Object Model-style helper for prompt command actions


## Purpose

This project is designed to demonstrate:

* Frontend development with React and TypeScript
* Command-based UI design
* Basic accessibility-minded selectors
* Automated end-to-end testing with Playwright
* A QA mindset through positive, negative, and link validation test cases

## Author

Rebecca Liu
