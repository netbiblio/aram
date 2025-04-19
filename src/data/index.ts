import { CONTENTS, PAGES } from '@/lib/constants';
import { readFile } from 'node:fs/promises';

const CWD = process.cwd();

async function getData(
	data = PAGES,
	separateContent = false
): Promise<Record<string, App.PageData>> {
	const texts = await Promise.all(
		data.map(function (page: string) {
			return readFile(`${CWD}/src/data/${page}.html`, 'utf-8');
		})
	);

	return data.reduce(function (acc, page, i) {
		const { datestring, datetime, title } = CONTENTS[page];
		return {
			...acc,
			[page]: {
				description: `Стихотворение Арама Гаспаряна «${title}».`,
				text: texts[i]
					.split('\n\n')
					.map(function (paragraph, i) {
						const delimiter = separateContent && i ? ` class="separated"` : '';
						return `<p${delimiter}>${paragraph.split('\n').join('</p><p>')}</p>`;
					})
					.join(''),
				time: `<time datetime="${datetime}">${datestring}</time>`,
				title
			}
		};
	}, {});
}

export { getData };
