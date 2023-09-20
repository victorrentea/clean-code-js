import get from "request-promise";
import { promises as fs } from 'fs';


try {
    let body = await get("https://en.wikipedia.org/wiki/Robert_Cecil_Martin");
    await fs.writeFile("article.html", body);
    console.log("File written");
} catch (e) {
    console.error(e);
}
