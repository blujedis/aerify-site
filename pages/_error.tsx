
import { NextPageContext } from 'next';
import Link from 'next/link';

export interface IErrorProps extends Partial<Error> {
  statusCode?: number;
  returnUrl?: string;
}

function ErrorPage(props = {} as IErrorProps) {

  props = {
    ...props,
    statusCode: 404,
    message: 'Page Not Found'
  };

  const { statusCode, message } = props;

  const returnUrl = '/';
  const code = statusCode || 404;
  const borderColor = code === 404 ? 'rgba(0, 0, 0,.3)' : 'red';

  return (
    <div className="error-wrapper">

      <div>
        <h1 className={code === 404 ? 'error-status error-status-404' : 'error-status'}>{code}</h1>
      </div>
      <div className="error-content">
        <div>
          <h2 className="error-message">{message}</h2>
          <Link href={returnUrl} passHref>
            <a className="error-link">Return Home</a>
          </Link>
        </div>
      </div>


      <style jsx>{`

          .error-wrapper {
            font-family:-apple-system, BlinkMacSystemFont, Roboto, 'Segoe UI', 'Fira Sans', Avenir, 'Helvetica Neue', 'Lucida Grande', sans-serif;
            height:100vh;
            text-align:center;
            display:flex;
            align-items:center;
            justify-content:center;
            letter-spacing: unset;
          }

          .error-status {
            border-right:1px solid ${borderColor};
            margin:0;
            margin-right:2rem;
            padding:0 2rem 0 0;
            vertical-align:top;
            color: red;
            height: 8rem;
            font-size: 6rem;
          }

          .error-status-404 {
            color: #807e9b !important;
          }

          .error-content {
            display: flex;
            flex-direction: column;
            text-align:left;
            text-align: center;
            position: relative;
          }

          .error-message {
            font-family: -apple-system, BlinkMacSystemFont, Roboto, 'Segoe UI', 'Fira Sans', Avenir, 'Helvetica Neue', 'Lucida Grande', sans-serif;
            font-size: 2.25rem;
            font-weight: 300;
            margin:0;
            padding:0;
          }

          .error-link {
            display: block;
            margin-top: .5rem;
          } 

        `}</style>

    </div>

  );

}

// deprecated.
ErrorPage.getInitialProps = ({ err, res }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  const message = res ? res.statusMessage : err ? err.message : 'Not Found';
  return { statusCode, message };
};

export default ErrorPage;
