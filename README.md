# Github Portfolio

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Development server

Run `yarn start` for a dev serverr at `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

## Publishing

Make a folder called "dist" that contains the repository where the files should be pushed to
```
git clone --branch=dist git@github.com:MikeECunningham/mikeecunningham.github.io.git dist
```
First `yarn build`
Then run the command `yarn dist`

This command will copy all files from the build folder to the dist and then publish them to the remote