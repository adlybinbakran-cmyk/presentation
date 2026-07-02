# IT Support Update & Progress — Web Presentation

This is a browser-based slide presentation for the IT Support Update & Progress report.

## How to open

1. Open the folder.
2. Double-click `index.html`.
3. Use the sidebar, Previous/Next buttons, or keyboard arrow keys to navigate.

## How to edit future updates

Most updates only require editing **`data.js`**.

Open `data.js` and update:

```js
const deckData = {
  title: "IT Support Update & Progress",
  preparedBy: "Prepared by: IT Department",
  reportDate: "Report Date: 3 July 2026",
  slides: [ ... ]
};
```

### Common edits

- Change the report date: edit `reportDate`.
- Change a slide title: edit the slide `title`.
- Change bullet points: edit the text inside `details`, `highlights`, or `notes`.
- Add a new task card: copy one card block and paste it under `cards`.
- Add a printer row: add a new row inside `rows`.
- Add a new project: add a new item inside `items`.

## Slide types included

- `hero` — cover slide
- `summary` — number cards and highlights
- `cards` — support tasks and status cards
- `table` — printer patrol and structured lists
- `timeline` — project progress
- `nextActions` — follow-up action tracker
- `closing` — final slide

## How to print or export as PDF

Open `index.html`, click **Print / PDF**, then choose **Save as PDF** from your browser print settings.

## How to upload online

You can upload all files to:

- GitHub Pages
- Netlify
- Vercel
- Your company website hosting

Make sure `index.html`, `styles.css`, `app.js`, and `data.js` stay in the same folder.
