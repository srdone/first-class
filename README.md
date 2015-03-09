## First Class Scout Tracking Web Application

Note: some of the code for the backend is based off code from MEAN Web Development by PACKT Publishing

# Bug Fixes:

4 - transition on choice of item to add (bottom sheet) - maybe use an intermediate bottom sheet
7 - code smell - need more directives - currently repeating a lot
8 - lose login state on refresh - save login state to cookie instead of rootScope?
9 - remaining requirements directive display needs polish
11 - removing requirement doesn't reset current rank properly
12 - ordering of various lists
13 - Hide remaining requirement directive when there is no data
14 - OA member checkbox label alignment in new scout sheet
15 - Name fit in small viewport
16 - Speed loading - create build process
17 - draw attention to add button (bouncing on first view?)
18 - detail button - replace with link on entire card?
19 - display of scout card when there is no data
20 - display of camping / service when there is no data
21 - add dialog boxes
22 - display of requirements too long - group in tabs?
23 - swipe to close nav (md-swipe-left)
24 - default add detail sheet should be requirement
25 - fancy select for add detail
26 - layout on sheet buttons

# Todos:

1 - Add summary card of all scouts
2 - Add ability to delete scout
3 - Add ability to delete requirement
4 - Add ability to edit scout name / OA status / picture url
5 - Add ability to edit position / service / campout information
6 - Deploy to Digital Ocean or Heroku
7 - Add asynchronous error handling
8 - Add tabs for details instead of cards
9 - Add toasts

8 - Add ability to edit possible requirements

9 - Add ability to allow different users to share same set of scouts

10 - implement roles