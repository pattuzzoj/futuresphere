import { Router } from '@solidjs/router';
import { MetaProvider } from '@solidjs/meta';
import routes from './routes';
import Layout from "components/layout"

export default function App() {
  return (
    <MetaProvider>
      <Router root={Layout}>
        {routes}
      </Router>
    </MetaProvider>
  );
}