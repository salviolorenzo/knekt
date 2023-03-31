/** @format */

import { ImpressionsDao } from './ImpressionsDao';

export class LikeDao extends ImpressionsDao {
	constructor() {
		const TABLE_NAME = 'likes';
		super(TABLE_NAME);
	}
}
