import { Validators } from "@angular/forms";

export type FormControlType<T> = [T, Validators | Validators[]];
