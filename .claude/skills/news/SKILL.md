---
name: news
description: Create a new news panel for the vetgalen.cz website. Use when adding a news item with text content and an image.
---

# News Panel Creation (`/news`)

Create a new news panel for the vetgalen.cz website.

## Your task

When the user invokes `/news`, follow these steps:

### Step 1 — Gather information

Ask the user (or read from their message) for:
- **Content**: the text of the news item
- **Image**: the image name to use (without extension)
- **New image?**: whether the image is new (not yet in `content/images/` and `src/components/News/index.js`)

### Step 2 — Determine next file number

Look at `content/news/` and find the highest `novinky-N.md` number, then use N+1.

### Step 3 — Create the markdown file

Create `content/news/novinky-N.md` with this structure:

```markdown
---
image: 'image_name'
---

## News Title

News body text...
```

**Styling conventions** (use HTML spans inside markdown):
- Red bold text: `<span class="bold text-danger">text</span>`
- Bold text: `<span class="bold">text</span>`
- Underline: `<span class="underline">text</span>`
- Em dash: `&mdash;`

### Step 4 — If image is NEW

If the image doesn't already exist in the project:

1. **Copy image** to `content/images/<image_name>.png` (ask user where the source file is if needed)

2. **Add GraphQL query** in `src/components/News/index.js` inside the `useStaticQuery` block — follow the existing pattern, e.g.:
```js
image_name: file(name: {eq: "image_name"}) {
  childImageSharp {
    gatsbyImageData(width: 142, height: 157, placeholder: NONE, layout: FIXED)
  }
}
```
Ask the user for the image dimensions, or use `CONSTRAINED` layout if unknown.

3. **Add to newsImages map** in the same file:
```js
image_name: getImage(data.image_name),
```

### Step 5 — Review before committing

Show the user the file content and any code changes. Ask for confirmation before proceeding.

### Step 6 — Local development check

Ask the user to verify the news item locally before committing:

```
npm run develop
```

> **Note:** Gatsby sometimes has a stale StaticQuery cache after adding new markdown files. If the user sees a StaticQuery error, they should run:
> ```
> npm run clean && npm run develop
> ```

Wait for the user to confirm the news looks correct in the browser before proceeding.

### Step 7 — Bump package.json version

Bump the patch version in `package.json` (e.g. `1.4.4` → `1.4.5`).

**Why this matters:** Netlify uses the `version` field to detect changes and trigger a fresh deployment. Without bumping the version, Netlify or CDN caches may not pick up the new content.

### Step 8 — Commit and create PR

Once confirmed:
1. Create a branch: `feat/<short-description>`
2. Commit all changes (news file + any image/index.js changes + package.json)
3. Push and create a PR with `--base prod`
