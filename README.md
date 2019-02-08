# Arcandemy 101 🧙
This is the repository for my personal project - React Native app for witches. I create it for those who want to
learn the basics of witchcraft. ✨🔮 Go and checkout my [witchy instagram](https://www.instagram.com/arcandemy/).

## Technical information
Basic tools:
* React Native
* React Navigation
* Redux
* Firebase

## Progress
### Done
✔️ Created basic components (Button, TextInput, Link) and modules (auth, home). <br />
✔️ Added Login and Signup scenes for auth module. <br />
✔️ Added react-navigation (navigator module). <br />
✔️ Added Chapter and Page scenes in chapters module. <br />
✔️ Styled App Drawer. <br />
✔️ Added Firebase login, registration and add Redux actions (login, logout, register). <br />
✔️ Added AsyncStorage. <br />
✔️ Added List of Pages for Chapters and pass info from JSON file <br />
✔️ Added User object in Firebase database <br />
✔️ Added Chapters logic (block next Chapter unless current is finished and change Main Altar image with every new Chapter). <br />
✔️ Create Navigator dynamically for Chapters. <br />
✔️ Add animations. <br />
✔️ Add helpers for Pages to render JSON page content. <br />
✔️ Add user's Chapter progress in Firebase - updates on many devices and updates after wifi connection loss. <br />
✔️ Add field validation in auth module (for password in Sign Up). <br />
✔️ Send e-mail verification after registration. <br />

### TODO
* Add Facebook login and signup.
* Add Forgot Password scene in auth module.

## Current views
![Login and registration](./assets/01.png) <br /><br />

The picture on the main screen changes with user's progress (new items are added to the cauldron).
To access the next Chapter user has to finish reading the current Chapter (blocked Chapters have a locker in the Drawer Menu while unlocked ones are marked with a key). <br />
![Main screen and drawer menu](./assets/02.png) <br />
![Chapter and page screens](./assets/03.png) <br />
![Settings](./assets/04.png) <br />
