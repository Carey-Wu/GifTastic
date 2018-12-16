# GifTastic

This project utilizes javascript to dynamically generate buttons from an array and continuously add to the array as the user enters new names into the form and submits them.
It then calls the Giphy API to generate 10 gifs related to the topic listed in the button.  Each gif is displayed in a still state to start but can become animated upon clicking it.

The steps to generate this should be as follows:

The first step was to create an array of strings that are related to a similar topic.

Next the strings are used to dynamically create buttons using javascript.

Clicking on each button will result in an API call to Giphy related to what is listed in the button.  This call will pull 10 gifs to be displayed in a still state to start.

Clicking on the gifs once will cause them to animate and a second click will return them to their still state.

With each gif is a rating display as well.  This can be accessed from the object that is called for each gif using the API call.

Buttons can be added by adding a form input and taking the value from it to insert into the original array. This is done using javascript.



For questions about this project, you can reach out to Carey at Carey-Wu on GitHub.

