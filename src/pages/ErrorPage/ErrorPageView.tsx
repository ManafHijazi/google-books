import { useRouteError } from 'react-router-dom';

interface CustomError {
  statusText?: string;
  message?: string;
}

const ErrorPage = () => {
  const error = useRouteError() as CustomError;

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;