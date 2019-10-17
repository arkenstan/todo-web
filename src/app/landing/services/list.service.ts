import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { FeathersService } from '@core/services/feathers.service';
import { List } from '../models/list.model';

@Injectable({
	providedIn: 'root'
})
export class ListService {
	constructor(private feathers: FeathersService) {}

	loadLists(): Promise<any> {
		return this.feathers.service('clientApi/v1.0/list').find();
	}

	createList(listName: string): Promise<any> {
		return this.feathers.service('clientApi/v1.0/list').create({ listName });
	}
}
