import { HttpHeader } from "@solidjs/start";
import { Suspense } from "solid-js";
import { Router } from "@solidjs/router";
import { MetaProvider } from "@solidjs/meta";
import { FileRoutes } from "@solidjs/start/router";
import "./app.css";
import Layout from "./components/layout";

export default function App() {
  return (
    <Router
      root={props => (
        <MetaProvider>
          <HttpHeader name="cache-control" value="max-age=2592000" />
          <HttpHeader name="content-encoding" value="gzip" />
          <Layout>
            <Suspense>
              {props.children}
            </Suspense>
          </Layout>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
