/** @format */

import { ImpressionsDao } from './ImpressionsDao';

export class DislikeDao extends ImpressionsDao {
	constructor() {
		const TABLE_NAME = 'dislikes';
		super(TABLE_NAME);
	}
}
