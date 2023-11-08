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
    content: "\u2713"; /* Unicode checkmark character */
    font-size: 16px; /* Adjust the font size of the checkmark */
    color: #ffffff; /* Color of the checkmark when checkbox is checked */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .custom-checkbox:checked + & {
    background-color: #006fee; /* Background color when checkbox is checked */
    border-color: #006fee; /* Border color when checkbox is checked */
  }
  }
`;

export const RectImg = styled.img`
max-width: 519px;
  @media (max-width: 1104px) {
    display: none;
  }
`;

export const ContactForm = styled.div`
 max-width: 628px;
  margin-top: 24px;
  font-size: 12px;
  color: #2e3a59;
`;

export const InputSection = styled.div`
// w-[100%] flex justify-between gap-[24px]
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 24px;
  
  @media (max-width: 599px) {
    flex-direction: column;
    gap: 12px;
    
  }
`;

export const SubmitSection = styled.div`
 display: flex;
  align-items: end;
  @media (max-width: 599px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
`;

export const FooterInfo = styled.div`
//flex justify-between max-w-[423px]
  display: flex;
  justify-content: space-between;
  max-width: 423px;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
