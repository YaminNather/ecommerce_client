import Token from "../token";
import User from "../models/user";
export interface AuthenticationResponse {
    token: Token;
    user: User;
}
export default class Authentication {
    signup: (email: string, password: string) => Promise<AuthenticationResponse>;
    login: (email: string, password: string) => Promise<AuthenticationResponse>;
    getToken: () => Token | null;
    isLoggedIn(): boolean;
}
//# sourceMappingURL=authentication.d.ts.map