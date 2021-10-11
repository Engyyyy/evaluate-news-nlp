# evaluate-news-nlp

This is a simple project that setups webpack and configures it for both development and production modes. It supplies a form with an input field in which users can enter a URL of an article and submit it. A sentiment analysis of the article will appear in the form results including polarity of the article, subjectivity, agreement, irony and the percentage of confidence of this analysis. This application uses MeaningCloud Sentiment Analysis API for natural language processing. For further knowledge about the API, please refer to the Documentation [here](https://www.meaningcloud.com/developer/sentiment-analysis)


## Prerequisites

Make sure you have npm installed locally on your machine.

## Installation

1. `cd` to the root directory of the project after you clone this project.
2. run `npm install` to install all the dependencies of the project.

##### To run the project in production mode:

3. run `npm run build-prod` command.
4. run `npm run start` command.

Now the application is running on port 8081 locally.

##### To run the project in development mode:

3. Just run `npm run build-dev` and the webpack-dev-server will open automatically in the browser on port 8080 with the Live Reloading Feature enabled.

## Usage

For the Sentiment Analysis to run successfully, you must enter a valid URL of an article. The project contains a validator that validates the URL entered by the user using RegEx. If the entered URL is valid, the results of sentiment analysis will appear in the form results. On the other hand, for an invalid URL, a message with:
 > Please enter a valid URL...

is going to show up.


## Example

* An example of a valid URL is `https://en.wikipedia.org/wiki/Main_Page`
and the output of the analysis is:

```
agreement: DISAGREEMENT
confidence: 94
subjectivity: SUBJECTIVE
irony: NONIRONIC
polarity: P
```

* An example of an invalid URL is `http:// www.en.wikipedia.org/wiki/Main_Page`. Note the space after the `://`.
The output of the analysis is:

```
Please enter a valid URL...
```

## Testing

The application uses Jest framework for unit testing. The test cases are included in the `__test__` folder with two files to test each of the two JavaScript files. Also, the `package.json` file includes a `test` script to run Jest. Therefore all you have to do is to run `npm run test` command to run the testcases. The project passes all the testcases in the `__test__` folder.

## Additional Features

The application uses `workbox-webpack-plugin` to register `service worker` in order to cache the website. This way the website is available even if the server cannot be reached. For more information about `service worker`, refer to [Google Workbox Service Worker Documentation](https://developers.google.com/web/tools/workbox/guides/generate-service-worker/webpack)
