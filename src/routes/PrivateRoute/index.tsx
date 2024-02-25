import { createSignal } from 'solid-js';
import { Navigate } from '@solidjs/router';
import { routes } from './routes';

export const privateRoutes = routes;

export function PrivateRoute(props) {
  const [auth, setAuth] = createSignal(true);

  const checkAuth = () => auth() ? props.children : <Navigate href=''/>;

  // setTimeout(() => setAuth(false), 2000);

  return (
  <>
  {checkAuth()}
  </>)
}