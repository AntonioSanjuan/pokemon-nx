import { Injectable, inject } from "@angular/core";
import { MessageTypes } from "@gt-motive-app/libs/models";
import { MatSnackBar, MatSnackBarDismiss, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from "@angular/material/snack-bar";
import { Observable, map } from "rxjs";

@Injectable()
export class MessageService {
    private snackBar: MatSnackBar = inject(MatSnackBar)

    public showAlertMessage(messageType: MessageTypes, message: string): Observable<boolean> {
        const horizontalPosition: MatSnackBarHorizontalPosition = 'right'
        const verticalPosition: MatSnackBarVerticalPosition = 'top'
        return this.snackBar.open(message, undefined, { 
            horizontalPosition,
            verticalPosition,
            duration: 3000
        }).afterDismissed().pipe(
            map((dismiss: MatSnackBarDismiss) => dismiss.dismissedByAction)
        );
    }
}