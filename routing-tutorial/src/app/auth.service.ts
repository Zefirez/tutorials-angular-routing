export class AuthService {
    loggedIn = false;

    isAuthenticated() {
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(() => { resolve(this.loggedIn) }, 2000);
            }
        );
        return promise;
    }

    logIn() {
        this.loggedIn = true;
    }

    logout() {
        this.loggedIn = false;
    }


}