import { FormControl } from "@angular/forms"

export type LoginResponse = {
    token: string,
}

export interface LoginForm {
    email: FormControl,
    password: FormControl
}