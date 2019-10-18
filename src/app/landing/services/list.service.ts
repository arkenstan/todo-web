import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { FeathersService } from '@core/services/feathers.service';
import { List } from '../models/list.model';

@Injectable({
	providedIn: 'root'
})
export class ListService {
	SERVICE_NAME = 'clientApi/v1.0/list';

	constructor(private feathers: FeathersService) {}

	loadLists(): Promise<any> {
		return this.feathers.service(this.SERVICE_NAME).find();
	}

	createList(listName: string): Promise<any> {
		return this.feathers.service(this.SERVICE_NAME).create({ listName });
	}

	updateList(listId: string, list: List): Promise<any> {
		return this.feathers.service(this.SERVICE_NAME).patch(listId, list);
	}

	deleteList(listId: string): Promise<any> {
		return this.feathers.service(this.SERVICE_NAME).remove(listId);
	}
}
