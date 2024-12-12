import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "Qu'est-ce qui est inclus dans le forfait à 1000€ ?",
      answer: "Notre forfait tout inclus couvre tout, de la consultation initiale au déploiement final, incluant le développement personnalisé, le design responsive, l'optimisation SEO et 3 mois de support."
    },
    {
      question: "Combien de temps dure le processus de développement ?",
      answer: "Généralement, les projets sont terminés en 4-6 semaines, selon la complexité et les exigences."
    },
    {
      question: "Proposez-vous une maintenance continue ?",
      answer: "Oui, nous incluons 3 mois de support et maintenance avec chaque projet. Après cela, nous proposons des forfaits de maintenance flexibles."
    },
    {
      question: "Quelles technologies utilisez-vous ?",
      answer: "Nous utilisons des technologies modernes comme React, Next.js et Node.js, garantissant que votre projet est construit avec les outils les plus récents et fiables."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Questions Fréquentes</h2>
      <div className="max-w-2xl mx-auto">
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}