import { Validators } from "@angular/forms";

export type OnChangeType<T> = (value: T) => void;

export type OnTouchType = () => void;

export type FormControlType<TValue> = [TValue, Validators | Validators[]];
