
# This repo was created as an example code to [this issue](https://github.com/yessky/hotrun/issues/5) on [Hotrun library](https://github.com/yessky/hotrun)

The problem is that routes that are included are working fine with hot reload but when a new route needs to be added chokidar would call the `hot` event  
but the route would not be loaded.

To start the server run `npm install` and `npm start`.


### Works fine:

1. Make a request to `http://localhost:3000`. The server responds with `hello world!`.
2. On file `./src/routes/index.js` comment `line 4` and uncomment `line 5`. Look at the terminal and see how the `module hot compiled done!`
3. Make another request to `http://localhost:3000`. Now the server responds with `This message works with hot reload!`


### Does not work:

5. Make a request to `http://localhost:3000/one`. The browser should show a `Not Found` message since this route does not exist yet.
6. On file `./src/server.js` uncomment lines `11` and `14` and save. Look at the terminal and see how the `module hot compiled done!` is displayed.
7. Make a request to `http://localhost:3000/one`. The browser still shows a `Not Found` message as the hot reload didn't work correctly for the new route.