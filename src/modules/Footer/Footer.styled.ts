import styled from "styled-components";

export const TextInput = styled.input`
  background: #fff;
  border: 1px solid #c5cee0;
  border-radius: 6px;
  height: 40px;
  padding: 0 12px;
  width: 100%;
  font-size: 14px;
`;

export const TextAreaInput = styled.textarea`
  background: #fff;
  border: 1px solid #c5cee0;
  border-radius: 6px;
  padding: 12px;
  width: 100%;
  height: 120px;
  resize: none;
  font-size: 14px;
`;

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

  input[type="checkbox"]:checked + &::before {
    content: "\\2713"; /* Unicode checkmark character */
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
`;
