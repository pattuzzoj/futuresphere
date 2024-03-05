import { Router } from '@solidjs/router';
import routes from './routes';
import { MetaProvider } from '@solidjs/meta';

export default function App() {
  return (
    <MetaProvider>
      <Router>
        {routes}
      </Router>
    </MetaProvider>
  );
}