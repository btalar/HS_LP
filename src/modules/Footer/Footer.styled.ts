import styled from "styled-components";

export const TextInput = styled.input`
  background: #FFF;
  border: 1px solid #c5cee0;
  border-radius: 6px;
  height: 40px;
  padding: 0 12px;
  width: 100%;
  font-size: 14px;
`

export const TextAreaInput = styled.textarea`
  background: #FFF;
  border: 1px solid #c5cee0;
  border-radius: 6px;
  padding: 12px;
  width: 100%;
  height: 120px;
  resize: none;
  font-size: 14px;
`

export const CheckboxLabel = styled.label`
  display: inline-block;
  width: 24px;
  height: 24px;
  border: 1px solid #c5cee0;
  border-radius: 6px;
  cursor: pointer;
  min-height: 24px;
  min-width: 24px;
 position: relative;
 
  input[type='checkbox']:checked + &::before {
   content: '\\2713'; /* Unicode checkmark character */
   font-size: 16px; /* Adjust the font size of the checkmark */
   color: transparent; /* Make the checkmark transparent by default */
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
  }
  
  .custom-checkbox:checked + & {
   background-color: #006fee; /* Background color when checkbox is checked */
   border-color: #006fee; /* Border color when checkbox is checked */
  }
 `

export const SubmitButton = styled.button`
  padding: 0 16px;
  background: #d5a240;
 box-shadow: 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 10px 15px -3px rgba(213, 162, 64, 0, 0.40);
 font-size: 16px;
 font-weight: 500;
 line-height: 24px;
 color: #fff;
 border-radius: 12px;
 width: 235px;
 height: 48px;
 min-width: 235px;
 min-height: 48px;
`