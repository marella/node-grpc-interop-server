# [grpc-interop-server](https://github.com/marella/node-grpc-interop-server)

An implementation of gRPC [interop server][interop server] for Node.js

## Installation

```sh
npm install grpc-interop-server --save-dev
```

## Usage

Run from the command line:

```sh
npx grpc-interop-server --port 8080
```

or use in a CommonJS module:

```js
const createServer = require('grpc-interop-server');

createServer({ port: 8080 }).then((server) => {
  server.start();
});
```

or use in an ECMAScript module:

```js
import createServer from 'grpc-interop-server';

const server = await createServer({ port: 8080 });
server.start();
```

## License

Code is taken from [grpc/grpc-node][source] repo which is available under the [Apache License Version 2.0][license]

[interop server]: https://github.com/grpc/grpc/blob/master/doc/interop-test-descriptions.md#server
[source]: https://github.com/grpc/grpc-node/tree/master/test/interop
[license]: https://github.com/marella/node-grpc-interop-server/blob/main/LICENSE
