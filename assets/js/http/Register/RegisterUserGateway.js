export default class RegisterUserGateway {
    async Register(userData) {
        const res = await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(userData)
        });
        const data = await res.json();
        return data;
    }
}