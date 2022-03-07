import { google } from "googleapis";
import { marked } from "marked";

const renderer = new marked.Renderer();
renderer.link = (href, title, text) =>
  `<a target="_blank" rel="noopener noreferrer" href="${href}" title="${
    title || ""
  }">${text}</a>`;

function slugify(str: string) {
  if (!str) {
    return;
  }
  return str
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export async function getPosts() {
  try {
    const scopes = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
    const jwt = new google.auth.JWT({
      email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      scopes,
    });

    const sheets = google.sheets({ version: "v4", auth: jwt });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: "Why Next.js?",
    });

    const rows = response.data.values;

    if (rows?.length) {
      return rows.map((row, index) => ({
        id: index,
        slug: slugify(row[0]),
        title: row[0],
        description: marked(row[1].replace(/\n/g, "<br />"), { renderer }),
        href: row[2] || null,
      }));
    }
  } catch (err) {
    console.log(err);
  }

  return [];
}
