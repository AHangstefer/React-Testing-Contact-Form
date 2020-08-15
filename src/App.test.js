import React from "react";
import { render, getByRole, getAllByPlaceholderText, getByLabelText, getByPlaceholderText, getAllByLabelText, fireEvent } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm"
import { act, async } from "react-dom/test-utils";

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
  const {getByLabelText} = render(<ContactForm/>)
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

test("Are the forms Empty?", ()=>{
  const {getByPlaceholderText} = render(<App/>)
  const firstName = getByPlaceholderText(/Edd/i);
  const lastName = getByPlaceholderText(/Burke/i)
  expect(firstName).toBeEmpty();
  expect(lastName).toBeEmpty();
})

test("get by Role", ()=> {
  const {getbyRole} =render(<App/>)
 // let firstname = getByRole('textbox', {name: /first name/i})
})




describe("firstName", ()=> {

  describe("with valid name length", ()=>{

    it("should pass with no error", async () =>{
      const mockOnSubmit =jest.fn()
      const {getByPlaceholderText, getAllByTestId} = render(<App onSubmit={mockOnSubmit}/>)
      
     await act(async () => {
      fireEvent.change(getByPlaceholderText(/Edd/i), {target:{value: "Sam"}})
     // fireEvent.click(getByTestId("submit"))
    })
      //expect(mockOnSubmit).toHaveBeenCalled() 
  })
})

  describe("with invalid name length", ()=>{

    it("should show error", async ()=>{
      const mockOnSubmit =jest.fn()
      const {getByPlaceholderText, container} = render(<App/>)
      //const firstName = getByPlaceholderText(/Edd/i);

      await act (async ()=> {
        const nameInput = getByPlaceholderText(/Edd/i)
       fireEvent.change(nameInput, {target:{value: "Rebecca"}})
       fireEvent.blur(nameInput)
       })

       expect(container.innerHTML).toMatch("Looks like there was an error: maxLength")
    })
      
  })

})





