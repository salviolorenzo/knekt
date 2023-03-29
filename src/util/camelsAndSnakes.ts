/** @format */

export const camelToSnakeCase = (str: string) =>
	str.replace(/[A-Z]/g, (letter: string) => `_${letter.toLowerCase()}`);

export const snakeToCamel = (str: string) =>
	str
		.toLowerCase()
		.replace(/([-_][a-z])/g, (group) =>
			group.toUpperCase().replace('-', '').replace('_', '')
		);
