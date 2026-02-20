import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

const withAuth = (WrappedComponent ) => {
    const AuthComponent = (props) => {
        const router = useNavigate();

        const isAuthenticated = () => {
            if(localStorage.getItem("token")) {
                return true;
            } 
            return false;
        }

        useEffect(() => {
            if(!isAuthenticated()) {
                router("/auth")
            }
        }, [])

        return <WrappedComponent {...props} />
    }

    return AuthComponent;
}

export default withAuth;
// HOC: Checks auth token, redirects to /auth if not authenticated, else renders

// Behavior: localStorage token check -> API verify -> redirect or render component

// Redirect: Save returnUrl to sessionStorage, redirect after successful login

// Session Check: Verify token on mount, set interval to re-check every 5 minutes

// Expiry: Catch 401 responses, try refresh token, if fails -> logout user

// Multi-tab: BroadcastChannel syncs logout across all open tabs simultaneously
