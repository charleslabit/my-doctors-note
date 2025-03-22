"use client";

import { Accordion, Container, List, ListItem, Text } from "@mantine/core";

const faqs = [
  {
    question: "Will my employer accept this doctor’s note?",
    answer:
      "Yes! Our notes are formatted in a widely recognized style and include all key details employers typically require. Thousands of people across the U.S. have successfully used our service without issues. If you ever need adjustments, we’re here to ensure you have exactly what you need—your satisfaction is our top priority.",
  },
  {
    question: "What if I need changes to my note?",
    answer:
      "No problem! If you need modifications, simply reach out, and we’ll make any necessary adjustments. We’re committed to ensuring you have a document that meets your needs.",
  },
  {
    question: "What if my employer has questions about the note?",
    answer:
      "Our notes are designed to be clear and straightforward, minimizing the chance of any questions. However, if your employer does request additional details, we’re here to help you navigate the situation.",
  },
  {
    question: "How fast will I receive my doctor’s note?",
    answer:
      "Immediately. Once you complete your order, your note is generated and delivered straight to your email within minutes.",
  },
  {
    question: "What is a doctor’s note?",
    answer:
      "A doctor’s note is an document that explains your need for time off from work or school due to a medical reason. It includes essential absence details, such as the date of examination, recommended rest period, and return-to-work date, all while maintaining your privacy.",
  },
  {
    question: "When is a doctor’s note required?",
    answer: (
      <>
        <List spacing="sm" size="md" withPadding>
          <ListItem>
            <b>Work Absences</b> – Many employers require documentation for
            medical leave.
          </ListItem>
          <ListItem>
            <b>School or University Leave</b> – Some institutions mandate a note
            for missed classes.
          </ListItem>
          <ListItem>
            <b>Extended Sick Leave</b> – If you’re absent for multiple days, an
            official document may be necessary.
          </ListItem>
          <ListItem>
            <b>Medical Accommodations</b> – Employers may need documentation for
            modified work duties.
          </ListItem>
          <ListItem>
            <b>Proof of Illness for Travel or Events</b> – Some airlines and
            event organizers request documentation for rescheduling or refunds.
          </ListItem>
        </List>
      </>
    ),
  },
  {
    question: "How secure is my information?",
    answer:
      "Your privacy is our top priority. We follow strict confidentiality standards, and your information is never shared with third parties.",
  },
  {
    question: "Can I get a doctor’s note online?",
    answer:
      "Yes! Our service allows you to obtain a fully formatted note without the hassle of an in-person visit. No waiting rooms, no appointments—just a fast, convenient solution delivered straight to your inbox.",
  },
  {
    question: "How much does a doctor’s note cost?",
    answer:
      "We offer a transparent, flat rate of $29.99 with no hidden fees. Unlike traditional doctor visits, which can cost hundreds of dollars, our service provides a simple and affordable alternative.",
  },
  {
    question: "Can I pay for a doctor’s note with insurance?",
    answer:
      "Our service is out-of-pocket to ensure a fast and seamless experience. We’ve chosen a direct payment model to eliminate delays and provide instant documentation—at a cost lower than most copays.",
  },
  {
    question: "What conditions qualify for a doctor’s note?",
    answer:
      "Our notes can be used for a variety of common conditions that may require time off, including:• Flu, colds, and respiratory illnesses• Stomach viruses or food poisoning• Migraines and severe headaches• Stress-related conditions• Mild injuries requiring rest• And more",
  },
  {
    question: "What if I don’t receive my email?",
    answer:
      "Check your spam or promotions folder just in case. If you still don’t see it, contact us, and we’ll make sure you receive it right away.",
  },
  {
    question: "What if I have an urgent issue with my order?",
    answer:
      "We’re here to help! Our support team is available 24/7, ensuring that you always have assistance when you need it.",
  },
];

export default function FAQSection() {
  return (
    <Container py={50}>
      <Text fz={48} ta="center" mt={50} fw="bold">
        FAQ
      </Text>
      <Accordion
        variant="separated"
        styles={{
          label: {
            fontWeight: "bold",
            fontSize: 18,
          },
        }}
      >
        {faqs.map((faq, index) => (
          <Accordion.Item key={index} value={faq.question}>
            <Accordion.Control>{faq.question}</Accordion.Control>
            {faq.answer && <Accordion.Panel>{faq.answer}</Accordion.Panel>}
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
}
