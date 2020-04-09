// import the right stuff!
import React from 'react';
import AnimalForm from './AnimalForm';
import { render } from '@testing-library/react';

test('Current Animals Test Species header is appearing', () => {
    // arrange - render the component
    // act - no action to take
    // assert - get the text from the DOM and expect it to be in the document
    const { getByText } = render(<AnimalForm />);
    const headerText = getByText(/current animals test species/i);
    expect(headerText).toBeVisible();
  });

  test('inputs are visible', () =>{
    const { getByLabelText } = render(<AnimalForm/>);

    const labelText = getByAllLabelText(/species/i);
    expect(labelText).toBeVisible();

  })


  test('form submit adds new animals to list', () =>{

  })