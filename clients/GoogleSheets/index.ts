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
      range: "Lista de vídeos",
    });

    const rows = response.data.values;

    if (rows?.length) {
      return rows.slice(1, rows.length).map((row, index) => {
        const [title, description, videoUrl, isHighlighted] = row;
        const videoId = videoUrl.split("?v=").pop();
        const embedUrl = `https://www.youtube.com/embed/${videoId}`;
        const imgSrc = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
        return {
          index,
          id: videoId,
          slug: slugify(title),
          title,
          description: marked(description.replace(/\n/g, "<br />"), {
            renderer,
          }),
          videoUrl,
          embedUrl,
          imgSrc,
          isHighlighted: !!isHighlighted,
        };
      });
    }
  } catch (err) {
    console.log(err);
  }

  return [];
}
