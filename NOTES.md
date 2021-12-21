Build notes:
_- Build nav bar
_- Build Movie Show page
[a] Make cards smaller and picture resolution more crisp.
[2] Nav bar, start with one link
[3] onClick on movie card take to a page with more info on the movie, (show page)
[4] Build a review model/form - remember key categories to include in the review: Violence, Sex, Language, etc.
[5] Will need to build a login at this point
[6] Associate the reviews to the movie through the user model
[7] Create an icon for the browser for movie safe
[8] Create a logo for movie safe on Canva

\*Then, work more on api and what data we are pulling thru.
1 - Need capability to search for a movie, Build search bar.
Movies in the last three months are priority/current movies or movies in the last year.

# Requirements [ 8/12 ]

[X] The code should be written in ES6 as much as possible

- Arrow syntax =>
- Destructuring - destructure your variables (props)

[X] Use the create-react-app generator to start your project.

[X] Follow the instructions on this repo to setup the generator: create-react-app (Links to an external site.)

[X] Your app should have one HTML page to render your react-redux application

- Single Page Application
- Page should not refresh
- URL can change using router

[X] There should be 2 container components
[X] 1-MovieList connected to Redux store
2-ReviewList
3-Account

[X] There should be 5 stateless components- the idea here is to use redux for your state, 5 components connected to your redux store for your state
1-User
2-Review
3-ReviewForm
[X] 4-MovieCard - connected to MovieList
5-UserForm
[X] 6-SearchBar

[X] There should be 3 routes, good rule for back end and your front end
/movies
/movies/:id
/users => need to configure this to be an account route like /login or /account or /user (with slug)

[X] The Application must make use of react-router and proper RESTful routing (should you choose to use react-router v3 please refer to the appropriate docs (Links to an external site.); docs for v4 can be found here (Links to an external site.)) \*see restular.com

[X] Use Redux middleware to respond to and modify state change

[X] Make use of async actions and redux-thunk middleware to send data to and receive data from a server. Put fetches in your action creators. Components should not be doing your fetch, your props that you get from map dispatch to props should be doing your fetch, can only be done with thunk.

[X] Your Rails API should handle the data persistence with a database. You should be using fetch() within your actions to GET and POST data from your API - do not use jQuery methods.

[X] Your client-side application should handle the display of data with minimal data manipulation. (Serializers and backend should do almost all of the work of getting data. model methods, waiter should not be platng your food. Use serializers.)

[X] Your application should have some minimal styling: feel free to stick to a framework (like react-bootstrap), but if you want to write (additional) CSS yourself, go for it!
