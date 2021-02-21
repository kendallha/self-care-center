# Self Care Center

### Creating an app that give users encouragement in the form of mantras and affirmations.

*Work on this project has slowed or stopped as of February 21, 2021 at 9PM.*

## Overview
How can I care for myself? One way is with affirmations and mantras!
Affirmations are thoughts of positive self-empowerment, meant to assert your self-worth.
Mantras are repetive phrases that are repeated again and again during mindfulness practices. Your challenge is to build an app that helps users remind themselves of their inherent value!

In this Solo Challenge, I have built a web app that matches a provided comp exactly, and have built functionality for users to log in, select a mantra or affirmation, and save/delete their favorite messages. More information on the functionality can be found in the "Functionality Goals" section.

The spec for this project can be found [here](https://frontend.turing.io/projects/module-1/self-care-center.html).

## Learning Goals

- Gain experience building an application that utilizes HTML, CSS and JavaScript
- Write HTML and CSS to match a provided comp
- Understand how to listen to and respond to user events
- Individualize your programming skill set

## Setup

- Fork this project to your own Github account
- Clone the repository to your local machine
- `cd` into the project
- To interact with the finished project, either open index.html in your browser, or use the deployed page link below.
- To see full functionality, a user should login, view multiple affirmations/mantras, save favorite messages, visit the favorites page, and delete a saved message.

## Project Links

  * [Repo](https://github.com/kendallha/self-care-center)
  * [Deployed Page](https://kendallha.github.io/self-care-center/)

## Contributors

  * [Kendall Haworth](https://github.com/kendallha)

## Technologies Used

  * `Javascript`
  * `HTML`
  * `CSS`

## Functionality

  * A user is greeted with a log in page, on which they can enter their name to enter the site. If the form is left blank, the greeting will replace the name with "beautiful". After entering a name and clicking 'submit', the main page is shown.
  * On the main page, the user receives a personalized greeting using the name they entered, and can select to receive either an affirmation or a mantra. The user can use the heart icon to favorite a message if it has not been saved yet.
  * After a message has been favorited a button appears to navigate to the favorited messages section. By double-clicking a message in the favorites section, a user can delete a favorited message. There is a button to navigate back to the main page.

## Road Map

  * Future iterations should include error handling in the login page. The current version uses the word "beautiful" instead if no name is entered.
  * The heart icon should be updated to be hollow if a message has not been favorited, and be filled red if the message has already been saved. The changes in the icon should be carried through if a repeat message that has already been saved is presented again.
  * A user doesn't see any repeat messages until they have viewed each message at least once.
  * Users should be able to add or finely edit messages on the favorites page.

## Preview

<p align="left">Login Page</br>
 <img width="1000" height="500" src="./assets/Self-Care Preview/LoginPage.png">
</p>
<p align="left">Main Page</br>
 <img width="1000" height="500" src="./assets/Self-Care Preview/MainPage.png">
</p>
<p align="left">View and Save Messages</br>
 <img width="1000" height="500" src="./assets/Self-Care Preview/Message_Favorite_Display.png">
</p>
<p align="left">Saved Messages</br>
 <img width="1000" height="500" src="./assets/Self-Care Preview/FavoritesPage.png">
</p>
