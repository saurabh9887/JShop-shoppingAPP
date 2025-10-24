import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How long will it take to deliver my order?",
      answer:
        "We usually dispatch all orders within 2 days. Delivery typically takes 7–12 business days depending on your location.",
    },
    {
      question: "What is your return policy?",
      answer:
        "You can return your order within 7 days after delivery if the product is unused, unwashed, and in its original packaging.",
    },
    {
      question: "Do you offer cash on delivery (COD)?",
      answer:
        "Yes, we offer cash on delivery on most products. You can select the COD option during checkout.",
    },
    {
      question: "How can I check my order status?",
      answer:
        "Once your order is shipped, you’ll receive a tracking link via email or WhatsApp. You can track it directly from there.",
    },
    {
      question: "Are your jerseys authentic?",
      answer:
        "Yes, our jerseys are high-quality replicas featuring detailed embroidery or sublimation print patterns for an authentic look and feel.",
    },
  ];

  return (
    <section className=" py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl bg-white shadow-sm"
            >
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center text-gray-900 font-medium focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
