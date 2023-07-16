import getReadingtime from 'reading-time';
import { toString } from 'mdast-util-to-string';

export const remarkReadingTime = () =>
  (tree, { data }) => {
    const textOnPage = toString(tree);
    const readingTime = getReadingtime(textOnPage);

    data.astro.frontmatter.readingTime = readingTime.text;
  };
