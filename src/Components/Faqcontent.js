import React, { useState } from "react";
import FAQ from "./Faq";

export default function Faqcontent() {
  const [faqs, setFaqs] = useState([
    {
      question: "What Is Lorem Ipsum?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      open: true
    },
    {
      question: "Why do we use it?",
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      open: false
    },
    {
      question:
        "Where can I get some?",
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div className="faq-sectionss">
        <div className="container">
                    <h3>Frequently Asked Questions</h3>

                <div className="faqs">
                    {faqs.map((faq, index) => (
                    <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
                    ))}
                </div>
        </div>                
      </div>
  );
}
