# Frontend

## Requirements

To enable things such as live reload ensure that `@ionic/cli` as well as `native-run` are installed globally.

To do so, use the following commands:

```
npm i -g @ionic/cli native-run
-- or --
yarn global add @ionic/cli native-run

```

## Running the project

### Web

To be able to view the frontend on the web:  
`yarn start`  
This will open up `cra`.

### Emulator

To be able to view the frontend on the emulator:  
`ionic cap run android -l --external`

This enables live reload on the app, while also using an external ip.  
Take note of that external ip, as it's needed to connect to the backend.

The output should be something like this once ready:

```
Local: http://localhost:8100
External: http://192.168.2.112:8100
```

Change any endpoints connecting to the backend to use that URL.
