import React, { useState } from "react";
import {
  FAQContainer,
  NavigationPanel,
  QuestionList,
  QuestionItem,
  MainContent,
  QuestionTitle,
  AnswerText,
  TopicList,
  TopicCard,
  QuestionCard,
  H1Title,
} from "./SupportElements";
import { useTranslation } from "react-i18next";

const FAQPage = () => {
  const { t } = useTranslation();

  const [selectedTopic, setSelectedTopic] = useState(0);

  const topicsAndQuestions = [
    {
      topic: "Seekr",
      questions: [
        {
          question: "What is Seekr?",
          answer: "This is Seekr, a wearable device and app specifically designed for visually impaired people to navigate and understand their surroundings.",
        },
        {
          question: "Why is this Product Needed?",
          answer: "We have fewer than 50 guide dogs available for 200,000 visually impaired people in Hong Kong, so the majority of visually impaired people will unfortunately not have access to one. Also, a guide dog usually can only serve for 5-10 years depending how early it is trained.",
        },
        {
          question: "What About Other Alternatives?",
          answer: "Canes are decent for basic safety, but our device will help users identify objects, texts, and more, meaning they can look for shops and buildings, shop for themselves, read menus, and do other everyday tasks with more ease!",
        },
      ],
    },
    // {
    //   topic: "Product",
    //   questions: [
    //     {
    //       question: "What is the purpose of this website?",
    //       answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    //     },
    //     {
    //       question: "How do I create an account?",
    //       answer: "Nullam id dolor id nibh ultricies vehicula ut id elit...",
    //     },
    //   ],
    // },
    // {
    //   topic: "Customers",
    //   questions: [
    //     {
    //       question: "What is the purpose of this website?",
    //       answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    //     },
    //     {
    //       question: "How do I create an account?",
    //       answer: "Nullam id dolor id nibh ultricies vehicula ut id elit...",
    //     },
    //   ],
    // },
    // {
    //   topic: "Contact",
    //   questions: [
    //     {
    //       question: "What is the purpose of this website?",
    //       answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    //     },
    //     {
    //       question: "How do I create an account?",
    //       answer: "Nullam id dolor id nibh ultricies vehicula ut id elit...",
    //     },
    //   ],
    // }
    // Add more topics and questions as needed
  ];

  const handleTopicClick = (topicIndex) => {
    setSelectedTopic(topicIndex);
  };

  return (
    <div>
     <H1Title>Frequently Asked Questions</H1Title>
       <FAQContainer>
      <TopicList>
        {topicsAndQuestions.map((topic, topicIndex) => (
          <TopicCard
            key={topicIndex}
            onClick={() => handleTopicClick(topicIndex)}
            style={{
              backgroundColor: selectedTopic === topicIndex ? "#ddd" : "",
            }}
          >
            {topic.topic}
          </TopicCard>
        ))}
      </TopicList>
      <QuestionList>
        {selectedTopic !== null &&
          topicsAndQuestions[selectedTopic].questions.map((question, index) => (
            <QuestionCard key={index}>
              <QuestionTitle>{question.question}</QuestionTitle>
              <AnswerText>{question.answer}</AnswerText>
            </QuestionCard>
          ))}
      </QuestionList>
    </FAQContainer>
    </div>
    
  );
};

export default FAQPage;