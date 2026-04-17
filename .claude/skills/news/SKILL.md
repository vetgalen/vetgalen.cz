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
- **New image?**: whether the image is new (not yet in `src/content/news/images/`)

### Step 2 — Determine next file number

Look at `src/content/news/` and find the highest `novinky-N.md` number, then use N+1.

### Step 3 — Create the markdown file

Create `src/content/news/novinky-N.md` with this structure:

```markdown
---
image: './images/image_name.png'
---

## News Title

News body text...
```

**Styling conventions** (use HTML spans inside markdown):
- Red bold text: `<span class="bold text-danger">text</span>`
- Bold text: `<span class="bold">text</span>`
- Underline: `<span class="underline">text</span>`
- Em dash: `&mdash;`

**List bullet variants** (set via class on `<ul>`):
- `<ul class="stars">` — ☆
- `<ul class="hands">` — ☞
- `<ul class="arrows">` — →
- `<ul class="squares">` — ■

### Step 4 — If image is NEW

If the image doesn't already exist in the project:

1. **Copy image** to `src/content/news/images/<image_name>.png` (ask user where the source file is if needed)

No code changes are required — Astro Content Collections with the `image()` schema helper handle image processing automatically. The frontmatter path `./images/image_name.png` is resolved relative to the markdown file.

### Step 5 — Review before committing

Show the user the file content and any image additions. Ask for confirmation before proceeding.

### Step 6 — Local development check

Ask the user to verify the news item locally before committing:

```
npm run dev
```

Wait for the user to confirm the news looks correct in the browser before proceeding.

### Step 7 — Bump package.json version

Bump the patch version in `package.json` (e.g. `2.0.1` → `2.0.2`).

### Step 8 — Commit and create PR

Once confirmed:
1. Create a branch: `feat/<short-description>`
2. Commit all changes (news file + any new image + package.json)
3. Push and create a PR with `--base prod`
