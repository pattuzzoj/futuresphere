// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta http-equiv="X-UA-Compatible "content="IE-edge" />
          <meta http-equiv="pragma" content="cache"/>
          <meta name="author" content="Júlio Pattuzzo"/>
          <meta name="robots" content="index, folow"/>
          <meta property="og:type" content="website"/>
          <meta property="og:site_name" content="FutureSphere"/>
          <meta name="og:image" content="assets/icons/logo.svg"/>
          <meta property="og:url" content="https://futuresphere.vercel.app/"/>
          <meta property="og:image:height" content="32px"/>
          <meta property="og:image:width" content="32px"/>
          <meta name="twitter:card" content="summary"/>
          <meta name="twitter:image" content="assets/icons/logo.svg"/>
          <link rel="icon" href="assets/icons/logo.svg" />
          {assets}
        </head>
        <body>
          <div id="app">{children}</div>
          <noscript>
            <p>Your current browser does not support JavaScript or it is disabled. Please enable JavaScript or consider using another browser.</p><a href="https://www.enable-javascript.com/">How to enable JavaScript</a>
          </noscript>
          {scripts}
        </body>
      </html>
    )}
  />
));
