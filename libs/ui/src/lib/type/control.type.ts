import { Validators } from "@angular/forms";

export type ButtonType =
    | "button"
    | "submit"
    | "reset";

export type InputType =
    | "text"
    | "password"
    | "email";

export type OnChangeType<T> = (value: T) => void;

export type OnTouchType = () => void;

export type FormControlType = [string, Validators | Validators[]];
