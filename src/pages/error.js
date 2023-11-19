import { useRouteError } from 'react-router-dom';
import Errors from '../components/errors';
export default function ErrorPage({}) {
  const error = useRouteError();
  return <Errors title={error.message} status={error.statusText} />;
}
