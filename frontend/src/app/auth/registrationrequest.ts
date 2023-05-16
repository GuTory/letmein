/**
 * Registration request DTO
 */
export interface RegistrationRequest {
    email: string,
    firstName: string,
    lastName: string,
    password: string,
    company: string,
    team: string,
    roles: string[]
}
