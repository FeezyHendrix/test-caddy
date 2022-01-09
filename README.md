# Canny Debugging Test

Howdy Candidate, we've created this pared down version of Canny to get a better idea of your experience debugging web applications. Best of luck!

## Getting Started

1. **Initialize your environment**

  This assessment was intended for node v14.15.1, we recommend using nvm for managing node versions.

  Install nvm from [here](https://github.com/brew install nvmcreationix/nvm)

  Then install the node version for this assessment:
  ```sh
  nvm install v14.15.1
  ```

1. **Install dependencies**

  Next you'll need to install this app

  ```sh
  npm install
  ```

1. **Run the backend**

  The backend is a node server. Everything to do with the server lives in `/server`.

  Terminal tab #1:

  ```sh
  npm run backend
  ```

1. **Run the frontend**

  Webpack is used to bundle and serve our app. Everything to do with the frontend lives in `/app`.

  Terminal tab #2:

  ```sh
  npm run frontend
  ```

  Once everything is running, you should see the app running http://127.0.0.1:8080.

## Customer Issues

For each of the following issues:
  1. Identify the issue
  1. Apply the fix
  1. Provide a response to each technical customer in 1-2 sentences


**Customer 1:** When I open the application, my posts do not load and all I see is a 'server error'.

**Solution Customer 1:** There was an issue with our server and authentication which has been resolved partially. An hot fix has been pushed for you to see your post pending the issue is totally resolved. 
- Side Note: I used partially as I asumming the fix of for changing the key from  `name` to `nayme` can be a typo error from auth server generating the  jwt token.

**Customer 2:** When I click on "Top" or "Old", the selector does not update with my new selection.

**Customer 3:** When I sort by "Top", there are posts with only 28 votes ranking higher than posts with 180 votes!

**Customer 4:** When I page through posts, although the posts are changing, the vote count in the top left corner does not match the total count of votes of the displayed posts.


## 🎉 You're Done 🎉

Congrats on completing our assessment. All that is left for you to do is submit your assessment. We made a command that will zip your submission and send it to us. Send us an email to confirm that we got it.

```sh
npm run submit
```
