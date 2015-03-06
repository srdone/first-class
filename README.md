## First Class Scout Tracking Web Application

Note: some of the code for the backend is based off code from MEAN Web Development by PACKT Publishing

# Bug Fixes:

1 - icons not displaying on fcs-needed-requirement-summary directive
3 - rendering issue on transition between routes
4 - transition on choice of item to add (bottom sheet) - maybe use an intermediate bottom sheet
5 - Patrol Patrol (scout view)
6 - padding between OA badge and rank name
7 - code smell - need more directives - currently repeating a lot
8 - lose login state on refresh - save login state to cookie instead of rootScope?
9 - requirement data not loaded for neededReqSummary value on initial load

# Todos:

1 - Add summary card of all scouts
2 - Add ability to delete scout
3 - Add ability to delete requirement
4 - Add ability to edit scout name / OA status / picture url
5 - Add ability to edit position / service / campout information
6 - Deploy to Digital Ocean or Heroku

8 - Add ability to edit possible requirements

9 - Add ability to allow different users to share same set of scouts

10 - implement roles