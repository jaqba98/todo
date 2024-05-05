import { Validators } from "@angular/forms";

export type ButtonType =
    | "button"
    | "submit"
    | "reset";

export type InputType =
    | "text"
    | "password"
    | "email";

export type OnChange<T> = (value: T) => void;

export type OnTouch = () => void;

export type FormControlType = [string, Validators | Validators[]];
