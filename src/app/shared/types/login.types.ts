import { FormControl } from "@angular/forms"

export type LoginResponse = {
    token: string,
    id: string
}

export interface LoginForm {
    email: FormControl,
    password: FormControl
}