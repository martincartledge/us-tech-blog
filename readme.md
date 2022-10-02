# OpenTable Tech Europe Blog

The blog is built with [Next.js](https://nextjs.org/) and deployed as a static site to [GitHub Pages](https://pages.github.com/).

## Running locally

Start the Next.js development server to make changes:

```sh
# install dependencies
yarn install

# start dev server
yarn dev
```

## Deploying

Commits to the master branch will be automatically deployed.

## Writing blog posts

### Create a new file

Blog posts are stored in the `_posts` folder in markdown format. To create a new post you can use the GitHub UI and copy over the front matter from a previous blog post, or you can use the NPM scaffold script when drafting a blog post locally:

```sh
# scaffold new post
yarn new "Blog post title"
```

### Metadata

Blog posts need to specify the following metadata in the front matter:

| Name     | Description                                        |
| -------- | -------------------------------------------------- |
| title    | title as you want it to appear in the blog post    |
| date     | date in YYYY-MM-DD format (e.g. 2020-01-01)        |
| author   | author name (can be full name or preferred name)   |
| category | engineering, backend, frontend, culture, or events |

New authors should add a 400x400px headshot image to `/public/images/authors` with the file name matching the author name exactly.

### Publishing

Blog posts should first be published in draft mode. You can do this by adding `draft: true` to a post's metadata. Blog posts in draft mode are accessible at the blog post URL but they don't appear publicly on the blog. This allows you to see what a blog post looks like when deployed and check everything looks okay.
