# Just Another Todo App
Just another todo app, made in React and Redux. 

View it live on [Heroku]!
![UI](UI.JPG)


## Build & Deploy
This application is scaffolded using `create-react-app`, so the process is simple:

1. Make sure you have NodeJS and Git installed.
1. Clone the repo: `https://github.com/charliegdev/hacker-news-redux.git && cd hacker-news-redux`
1. Install dependencies: `npm i`
1. Start the dev server: `npm start`
1. Start the tests: `npm test`

## On Top of the Tutorial
This repo follows the steps in this [Redux official tutorial](https://redux.js.org/basics/usagewithreact); however, many things are done on top of the tutorial sample, such as:

1. In addition to the existing functionalities implemented in the tutorial, 2 new functionalities are implemented:
    * Delete a todo
    * Reorder the list
    * Display the total amount of todos under a category in filter buttons
1. Utilized Redux to avoid "ghost props": those props which are received by a parent, then passed down to its descendent without using it at all. This is an issue that comes with React's local state, that can also be solved by `react-redux`, so I created `ActionableTodo` container component to free `TodoList` from having to pass ghost props. No more ghost props.
1. All presentational components come with a rendering test and a snapshot test.
1. The UI is designed and implemented with Semantic UI, so it looks more completed than a bare minimal tutorial sample.


## Wishlist
During the development process, I eventually came up with a wishlist that I hope one day I can either solve it myself, or find a solution provided by the community. I didn't have time to research them myself this time, and maybe these will be the mysteries I'll attempt to solve after completing this project.

### ESLint with Plugins
It's weird that `create-react-app` doesn't come with ESLint configurations. I guess it's because `create-react-app` claims to be a "configuration-free" scaffolding tool, so it can't be opinionated, and things like linters can be highly opinionated and controversial. 

In the future, I hope to find a way of integrating my `.eslintrc` file inside a scaffolding tool, and add these 2 plugins into my `package.json`:

* `eslint-plugin-jest`
* `eslint-plugin-react`

This way, I don't have to change my `package.json` and copy `.eslintrc` from my other projects.

### Hot Module Replacement
Hot Module Replacement: when a component's code changes, HMR allows the browser to re-render that component only, without refreshing the whole page thus losing application state. 

Plain React allows HMR, and it's very joyful to use. Now with Redux 2.0 or newer, I have to use it explicitly. The migration guide is [here](https://github.com/reduxjs/react-redux/releases/tag/v2.0.0), but I haven't got time to look at how to use it. Will definitely get it working in the future.

### Semantic UI React
I have used Semantic UI in several of my past projects; however, this is my first time trying the teams' official React integration, [**Semantic UI for React**](https://react.semantic-ui.com/).

This means instead of writing HTML/JSX the old way, like this:
```html
<div class="ui menu">
  <a class="item" href="/home">
    Home
  </a>
</div>
```

I can write it like this:
```jsx
import { Link } from 'react-router-dom'

<Menu>
  <Menu.Item as={Link} to='/home'>
    Home
  </Menu.Item>
</Menu>
```

I fell in love with the new way at once, and started trying it in this project. Unfortunately, Semantic UI React causes jest test to slow down from 200ms to 10s. Googling reveals no solutions yet, and it seems neither the Semantic team nor the Jest team want to step in to fix it. Therefore, I had to remove it and revert to the old way. I'm not sure if there will be a solution in the future.
