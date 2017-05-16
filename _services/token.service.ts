export class TokenService {
    tokenName: string = "currentUser";

    loggedIn(): boolean {
        if(localStorage.getItem(this.tokenName)) {
            return true;
        } else {
            return false;
        }
    }

    getToken(): string {
        return localStorage.getItem(this.tokenName);
    }
}