#  This build on the stub below, which creates some problems in production

Webpack is going to be a bit screwy until Angular 7 is released according to the developer.  Added types for googlemaps, google namespace, and webpack into the typing of tsconfig.json and tsconfig.app.json.

PM2 is being used to host on the digital ocean development server.  Building the package with ng b will create the dist folder, then move into that folder (cd dist) and issue the PM2 start command with:

pm2 start http-server --name BASH -- -p 4200 -d false

This worked for development under production but isn't initializing the config namespace which is initialize through webpack using localstorage.

use this command for the pm2 startup script:

[] use 'npm build' to build in new changes and create the dist folder

pm2 start npm --name "{app_name}" -- run {script_name}

pm2 start npm --name BASH -- run start


###  This should be pasrt of the production build process:

pm2 deploy production setup
pm2 deploy production update
pm2 deploy production exec "npm config set {app name}:{env variable} {env variable value}" // beauty!
pm2 deploy production exec 'pm2 start npm --name "{app name}" -- start'
pm2 deploy production exec 'pm2 save'


# angular-6-registration-login-example

Angular 6 User Registration and Login Example with Webpack 4

Full tutorial with example available at http://jasonwatmore.com/post/2018/05/16/angular-6-user-registration-and-login-example-tutorial