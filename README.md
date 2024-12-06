# Trello Site Checking

Training project is set to check (confirmed):
-Can user can log to profile
-Can user edits their user profile
-Can User create a board
-Can user search for a board
-Can user can create a list
-Can user create a card in the list
-Can user filter cards in a list
-Can user edit their workspace

Test is set to run in headless mode, executing in parallel using 2 instances, tests 2 times before marking it as failed and can run in any browser language BUT:
Chrome browser in headless mode can't log in due to authentication numbers beeing send on private mail and need to be filled to proceed.
Chrome browser in window mode can run no problem with previously set cookies(manually login).
Safari browser is not checked due to system difference (Windows) and not support for older version of browser (tested).
Test is running in headless mode on Firefox with no problems.

I tried to login thru Google(commented selectors and methods), but Google has also protection for automation. I even tried recreating human lag, but it also didn't work.

# Before running test you should replace mailPlaceholder on your email and passwordPlaceholder on your Password in test.spec.js file UC-1.

# Clone the repository
git clone git@github.com:Shameless25/Trello.git

# Install dependencies
npm install

# Usage
npm test