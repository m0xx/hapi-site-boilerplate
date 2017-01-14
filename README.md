## hapi-site-boilerplate

## Features

- Client assets optimization with webpack
    - **less** (compile/autoprefix/source-map/minify)
    - **js** (compile/optimize, shared `commons` bundle)
- [Pug template engined](https://pugjs.org) 
- Invalidate cached resources based on project version
 
 
 ## Structure
 ```
 |
 |-- .build             // Build output
 |  |-- js              // Compiled client code (served by server @ /js/**)
 |  |-- css             // Compiled less (served by server @ /css/**)
 |
 |-- assets             // Client source assets
 |  |-- js
 |  |   |-- commons     // Commons entry point to be shared across pages
 |  |   |-- home        // Home page entry point
 |  |   |-- <entry>     // Each folder is an entry point
 |  |-- less
 |  |   |-- site.less   // Global site sytle
 |  |   |-- <*.less>    // Each file is compiled as a css files
 |
 |-- public             // Content served via /public/{filePath}
 |
 |-- src                // Server code
 |  |-- config          // Server configuration
 |  |   |-- plugins     // Server plugins definition
 |  |-- pages           // Pages handlers
 |
 |-- tasks              // Gulp tasks
 |
 |-- config.js          // Config file
 |-- gulpfile.js        // Gulp entry file
 |-- server.js          // Server entry point
 |-- webpack.config.js  // Webpack config file
 
```

## Usage

### development
```sh
# Install deps
$ npm install

# Start development server
$ npm run dev
```

### production

Set environment variables:
- `SERVER_HOST`
- `SERVER_PORT`

```sh
# Build for production
$ npm run build

# Start server
$ npm run start
```
