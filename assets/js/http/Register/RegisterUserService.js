import RegisterUserGateway from "./RegisterUserGateway.js";

export default class RegisterUserService {
    static Register(userData) {
        return new RegisterUserGateway().Register(userData);
    }
}