CSO
Web Application introducing online-shop using Express, MongoDB, TypeScript.

That's the order to make things work:

npm i + npm run build - Webpack will build a single JS file called "bundle" in a "dist" directory. This script is connected to every single template. In order to improve the performance some of the scripts included in it only run in several cases.
npm run dev - Express server would run only after successful MongoDB connection and only if all ENV keys are available(src/config/env.ts should handle it right). If all conditions are met, there would be no trouble.
P.S: that's just a description of action sequence and you wouldn't be able to run this one without your own MongoDB connection-link and a few ENV keys (host, port)