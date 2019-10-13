export interface LoginCredentials {
	email?: string;
	password?: string;
	strategy?: string;
}

export interface User {
	_id: string;
	email: string;
	createdAt: Date;
	updatedAt: Date;
}
