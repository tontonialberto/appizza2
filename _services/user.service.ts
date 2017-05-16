import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import 'rxjs/Rx';
import { TokenService } from "app/_services/token.service";

@Injectable()
export class UserService {
    apiURL = "https://appizza.altervista.org/php/api/get_users.api.php";

    constructor(private http: Http, private tokenService: TokenService) {}

    getUsers() {
        if(this.tokenService.loggedIn) {
            var headers = new Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

            const body = 
                "token=" + this.tokenService.getToken();
            
            console.log("UserService.. Sending HTTP request: " + body);

            return this.http.post(this.apiURL, body, {headers: headers})
            .map(
                (response) => {
                    const users = response.json();
                    console.log(users);
                    return users.response;
                }
            ).share();
        } else {
            console.log("Non puoi eseguire quest'operazione perchè non sei loggato");
        }
    }
}