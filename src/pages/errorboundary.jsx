import { Routes, Route, useRouteError, isRouteErrorResponse } from 'react-router-dom';

function ErrorBoundary(){
    const error = useRouteError();
    const isError = isRouteErrorResponse(error);
    var errorMsg;

    if(isError){
        var errorVal = error.status;
        switch(errorVal){
            case 404:
                errorMsg = "Page not found.";
            case 410:
                errorMsg = "Page not available.";
            case 500:
                errorMsg = "Server error, check again later!";
            default:
                errorMsg = "Hm, we don't know what went wrong! Email dearasianyouth.usc@gmail.com what happened!"
        }
    }

    return <>
        <div> {errorVal} Error: </div>
        {isError? <div>OOPS you found an error!</div>: <div> It looks like this page may not exist yet, <a>click this to return to home.</a></div>}
    </>;
};

export default ErrorBoundary;