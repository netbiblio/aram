const BASE_URL = 'https://netbiblio.github.io/aram';

const PROJECT_NAME = 'Арам Гаспарян';

const PROJECT_DESCRIPTION = 'Сборник стихотворений Арама Гаспаряна.';

const PAGES = ['/1', '/2', '/3', '/4', '/5'];

const CONTENTS: Record<
	string,
	{
		datestring: string;
		datetime: string;
		title: string;
	}
> = {
	'/1': {
		datestring: 'Декабрь 2000, Санкт-Петербург',
		datetime: '2000-12',
		title: 'Снежок'
	},
	'/2': {
		datestring: 'Октябрь 2001, Санкт-Петербург',
		datetime: '2001-10',
		title: '«Осень, дождь. И листопад…»'
	},
	'/3': {
		datestring: 'Ноябрь 2001, Санкт-Петербург',
		datetime: '2001-11',
		title: 'Ангел'
	},
	'/4': {
		datestring: 'Декабрь 2001, Санкт-Петербург',
		datetime: '2001-12',
		title: '«В один прекрасный день с утра…»'
	},
	'/5': {
		datestring: 'Февраль 2002, Санкт-Петербург',
		datetime: '2002-02',
		title: '«Унылый день. Слепа надежда…»'
	}
};

export { BASE_URL, CONTENTS, PAGES, PROJECT_DESCRIPTION, PROJECT_NAME };
