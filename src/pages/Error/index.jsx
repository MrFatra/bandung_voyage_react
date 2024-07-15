import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}

export const NotFoundPage = () => {
    return (
        <div id="not-found-page">
            <h1>Oops!</h1>
            <p>Sorry, the page you are looking for doesn't exist.</p>
        </div>
    );
}
