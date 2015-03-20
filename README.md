## First Class Scout Tracking Web Application

A boy scout troop tracking app using the MEAN stack. Aimed primarily at helping troops assist their new scouts through
the first class rank.

A major goal of this app is to practice good design application design principles, so a lot of the work on it will
be dedicated to refactoring as I learn best practices.

Key design elements of this app:

- The backend is based on Node.js, Mongoose, MongoDB, Express, and Passport
- We are using session authentication, not token authentication. This may change in the future to accommodate
mobile apps
- Currently in the process of componentizing the app using directives - this should aid in the transition to
Angular 2 in the future
- The Scout and Requirement data is represented using an object model contained in the scout-object.service.js and
requirement.service.js files.
- All of the model logic is contained on the front end currently, minus some basic validation on the server. In the
future we will aim to make the logic available on both ends to speed up loading of the app in the browser.
- I will be exploring making the operations idempotent, so that they can be performed multiple times and have the
output remain the same. I believe this is largely the case already.

Future goals:
- Migrate to Angular 2 as soon as possible
- Use es6 or TypeScript
- Focus on componentization
- Create a build process using Gulp, Grunt, or Webpack
- Improve CSS structure and learn Sass in the process
- Build a framework for working with forms, similar to how Mongoose structures data.
- I will be moving much of the code to es6 or TypeScript in the near future.

Current pain points:
- Routing and multiple views in one route:
    - Updating data between two views currently uses eventing. This feels awkward, and I am looking for a better solution.
- Caching of data:
    - A lot of bandwidth goes into reloading data for each view
    - Improve the app structure so we only have to pull the data in once on application load and when data is updated
- There is no undo logic built in
- Custom CSS is unstructured
- Service overload in some controllers
    - Some controllers (especially ones that perform update functions for multiple scouts) have lots of dependencies
    - If we can improve the communication pattern between components, the need for dependencies will be reduced.
- Find ways to centralize the user notification process when data is updated. Currently we repeat a lot of that logic.
    - This is an issue in general with a lot of the data update process. We have a lot of repetition.
- Form logic is a pain. It is easy to make mistakes in building the validation logic.
    - If we built a framework for working with forms that is based on a data model definition for the entire app,
    we could always be sure that the forms perform the correct validation - every time they are used.
    - Some of this will come naturally by using components properly, so focus on components first.