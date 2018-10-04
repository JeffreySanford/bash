#  This build on the stub below, which creates some problems in production

Webpack is going to be a bit screwy until Angular 7 is released according to the developer.  Added types for googlemaps, google namespace, and webpack into the typing of tsconfig.json and tsconfig.app.json.

PM2 is being used to host on the digital ocean development server.  Building the package with ng b will create the dist folder, then move into that folder (cd dist) and issue the PM2 start command with:

pm2 start http-server --name BASH -- -p 4200 -d false



# angular-6-registration-login-example

Angular 6 User Registration and Login Example with Webpack 4

Full tutorial with example available at http://jasonwatmore.com/post/2018/05/16/angular-6-user-registration-and-login-example-tutorial