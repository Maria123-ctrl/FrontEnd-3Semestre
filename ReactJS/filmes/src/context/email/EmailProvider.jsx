import { use, useEffect, useState } from "react";
import { EmailContext } from "./EmailContext";

export const EmailProvider = ({children}) => {
    const [email, setEmail] = useState(JSON.parse(localStorage.getItem("email")) || null);
    useEffect(() => {
        setEmail(JSON.parse(localStorage.getItem("email")));
    }, []);
    return (
        <EmailContext.Provider
        value={{
            email,
            setEmail
        }}
        >
            {children}
        </EmailContext.Provider>
    )
}

export default EmailProvider;