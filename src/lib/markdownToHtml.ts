import { remark } from 'remark';
import html from 'remark-html';

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(html, {
      sanitize: false
    })
    .process(markdown);
  

  const htmlString = result.toString();
  const updatedHtml = htmlString.replace(
    /<a /g,
    '<a target="_blank" rel="noopener noreferrer" '
  );
  
  return updatedHtml;
}
