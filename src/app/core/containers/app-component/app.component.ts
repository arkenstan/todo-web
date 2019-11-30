import { Store, select } from "@ngrx/store";
import { Component } from "@angular/core";
import { MatDialog } from "@angular/material";

import { ToolbarActions } from "@core/actions";
import * as fromSplash from "@app/splash/reducers";
import * as fromRoot from "@app/reducers";

import { CreateTaskDialogComponent } from "@core/components/create-task-dialog/create-task-dialog.component";
import { LoginPageActions } from "@app/splash/actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  isLoggedIn = this.store.pipe(select(fromSplash.getLoggedIn));
  constructor(
    private store: Store<fromRoot.State & fromSplash.State>,
    private dialog: MatDialog
  ) {}

  logoutUser() {
    this.store.dispatch(LoginPageActions.logout({ payload: null }));
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateTaskDialogComponent, {
      data: null
    });
    const globRef = this;
    dialogRef.afterClosed().subscribe(result => {
      if (result.isSubmit) {
        globRef.store.dispatch(
          ToolbarActions.createTask({ task: result.data })
        );
      }
    });
  }
}
