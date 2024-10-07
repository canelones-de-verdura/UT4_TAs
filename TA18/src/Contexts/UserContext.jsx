import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserContextManager({ children }) {
    const [logged, setLogged] = useState(false);
    const manager = {
        logged,
        setLogged,
        authenticate(passwd) {
            const supersecretpassword = "1234";

            if (passwd === supersecretpassword)
                this.setLogged(true)

            return this.logged;
        },
        logout() {
            this.setLogged(false)
            return this.logged;
        }
    }

    return (
        <UserContext.Provider value={manager}>
            {children}
        </UserContext.Provider>
    );
}
