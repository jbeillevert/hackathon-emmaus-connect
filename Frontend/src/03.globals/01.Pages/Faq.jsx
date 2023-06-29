import React from 'react';

const Faq = () => {

  const data = [
    {
      question: "Question 1",
      answer: "answer"
    },
    {
      question: "Question 2",
      answer: "answer"
    },
    {
      question: "Question 3",
      answer: "answer"
    },
    {
      question: "Question 4",
      answer: "answer"
    },
  ]
  


  console.log(data)

  return (
    <div className="accordion-container w-full h-full">
      <div className="accordion w-fit h-60">
        {data.map((item, i) => (
          <div className="item">
            <div className="title">
              <h3>{item.question}</h3>
            </div>
            <div className="content">{item.answer}</div>
          </div>
        ))}
      </div>

    </div>

    
  );
};


export default Faq;