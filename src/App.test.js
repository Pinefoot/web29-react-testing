import React from 'react';
import { render } from '@testing-library/react';
import App from './App';



test('renders header', () => {
//Arrange, Act, Assert -> 3 A's of setting up integration test.

//Arrange -> sets up testing environment:
//Gets the Dom REady(render it)
//sets up any test data that we want in the DOM

const { getByText } = render(<App />);
//debug statements

// const result = render(<App/>);
// console.log(result.debug());


//Act -> take the user 'action' that we want to test:
//fill out inputs, click submit, clear form, any action the application would take from a user side.

//assert -> assertions are what make tests work. Tests that the data or app responded the way you expected it too.
//testing that something is visibible to the user
//tests something like router, checking to make sure you were routed to the specific place
//tests for new components in the ui.






  
  const linkElement = getByText(/add new animal/i);
  expect(linkElement).toBeInTheDocument();
});
