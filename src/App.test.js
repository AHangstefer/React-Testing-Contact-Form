import React from "react";
import { render, getByRole, getAllByPlaceholderText, getByLabelText, getByPlaceholderText, getAllByLabelText } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm"

test("renders App without crashing", () => {
   render(<App />);
});


test("renders Contact Form", ()=>{
  render(<ContactForm/>);
});

test("there are inputs", () =>{
  const {getByText} = render(<App/>)
  getByText(/Last Name/i);
  getByText(/First Name/i);
  getByText(/Email/i);
  getByText(/Message/i);
});

test("testing input behavior", ()=>{
  const {getByLabelText} = render(<App/>)
  //getByLabelText(/Email*/)
  //getByLabelText(/email/i)
})

test("testing form behavior", ()=>{
  const {getByRole} = render(<App/>)
  //getByRole('form', {name: /firstName/i})
  //only accessible roles textbox, button
  //getByRole('textarea',{name:/Message/i})
  //getByRole('input', {type: /submit/i})
  //getByRole('textbox', {name: /"message"/i})
  //getByRole('textbox', {name: /message/i})

})

test('attempting again to test form', ()=>{
  //const {getByLabelText} = render(<App/>);
  //const input = getByLabelText('email');
})

test('button?', ()=>{
  const {getByTestId} =render(<App/>);
  getByTestId('submit');
})

test("strings in forms?", ()=>{
  const {getByText} = render (<App/>)
  const firstName = getByText(/first name/i);
  //expect(firstName).toBe(String);
  //expect(firstName).toBeEmpty();
})