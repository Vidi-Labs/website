import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 50px auto;
`;

export const FormContainer = styled.div`
background-color: #f0f0f0;  
border-radius: 10px;

flex: 1;
  padding: 20px;
`;

export const ImageContainer = styled.div`
  flex: 1;
  @media screen and (max-width: 768px) {
  display:none;
}
`;

export const ContactForm = styled.form`
  background-color: #f0f0f0;
  padding: 20px;
`;

export const Title = styled.h1`
  text-align: center;
  color: #092e49;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: #d9d9d9;
  border: none;
  
`;

export const InputField2 = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: #d9d9d9;
  border: none;
  padding-bottom: 100px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #092e49;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;