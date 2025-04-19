import { getData } from '@/data';

import type { PageServerLoad } from './$types';

async function load({ params }: Parameters<PageServerLoad>[0]) {
	const key = `/${params.id}`;
	const data = await getData([key], true);
	return data[key];
}

export { load };
