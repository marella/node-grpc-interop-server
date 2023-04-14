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
const startServer = require('grpc-interop-server');

startServer({ port: 8080 }).then((server) => {
  //
});
```

or use in an ECMAScript module:

```js
import startServer from 'grpc-interop-server';

const server = await startServer({ port: 8080 });
```

## License

Code is taken from [grpc/grpc-node][source] repo which is available under the [Apache License Version 2.0][license]

[interop server]: https://github.com/grpc/grpc/blob/master/doc/interop-test-descriptions.md#server
[source]: https://github.com/grpc/grpc-node/tree/master/test/interop
[license]: https://github.com/marella/node-grpc-interop-server/blob/main/LICENSE
