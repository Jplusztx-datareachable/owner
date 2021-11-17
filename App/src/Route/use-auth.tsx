/**
 * @file ProvideAuth
 * @date 2021-04-13
 * @author Andy Jiang
 * @lastModify Andy Jiang 2021-04-13
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { createContext, useContext, useState } from 'react';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */

/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
type AuthContextProps = {
    // login state
    loginStatus: boolean;
    // login succeed function
    login: (redirect: () => void) => void;
    // logout succeed function
    logout: (redirect: () => void) => void;
};

const authContext = createContext<AuthContextProps>({
    // init login state in context
    loginStatus: false,
    login: () => {
        console.log('login');
    },
    logout: () => {
        console.log('logout');
    },
});

// export context props
export const useAuth = (): AuthContextProps => useContext(authContext);
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
export const ProvideAuth: React.FC = ({ children }): JSX.Element => {
    /* <------------------------------------ **** HOOKS START **** ------------------------------------ */
    // this hook used to record login status for all pages
    const [loginStatus, setLoginStatue] = useState(false);
    /**
     * call this function when succeed log in
     * @param redirect redirect function
     */
    const login = (redirect: () => void) => {
        setLoginStatue(true);
        redirect();
    };
    /**
     * call this function when succeed log out
     * @param redirect redirect function
     */
    const logout = (redirect: () => void) => {
        setLoginStatue(false);
        redirect();
    };
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <authContext.Provider
            value={{
                loginStatus,
                login,
                logout,
            }}
        >
            {children}
        </authContext.Provider>
    );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
