import styled from "styled-components";

export const FAQContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 50px auto;
  margin-top:20px;
`;

export const TopicList = styled.div`
  width: 20%;
  padding-right: 20px;
  @media screen and (max-width: 768px) {
    display:none;
  }
`;

export const TopicCard = styled.div`
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ddd;
  }
`;

export const QuestionList = styled.div`
  width: 80%;
`;

export const QuestionCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const QuestionTitle = styled.h2`
  color: #092e49;
  font-size: 24px;
  margin-bottom: 10px;
`;

export const AnswerText = styled.p`
  font-size: 16px;
  color: #555;
`;

export const H1Title = styled.h1`
color: #092e49;
font-size: 36px;
text-align: center;
margin-top:90px;
`;
