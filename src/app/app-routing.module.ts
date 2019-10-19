import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@app/splash/services/auth.guard';

const routes: Routes = [
	{
		path: '',
		loadChildren: '@app/task/task.module.ts#TaskModule',
		canActivate: [ AuthGuard ]
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
