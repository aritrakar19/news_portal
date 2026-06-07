import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQS = [
  {
    question: "What is the registration fee used for?",
    answer: "The registration fee covers the cost of background verification, processing your documents, and issuing your official Digital Press ID and physical card delivery."
  },
  {
    question: "How long does the verification process take?",
    answer: "Once you submit your application and complete the payment, our backend team verifies your documents. This process typically takes 24 to 48 business hours."
  },
  {
    question: "How do I earn money as a reporter?",
    answer: "Reporters earn money through a performance-based model. You receive payouts based on the number of verified news stories you submit, overall engagement (views, shares), and bonuses for exclusive coverage."
  },
  {
    question: "Can I upgrade or renew my Press ID later?",
    answer: "Yes! Your initial registration provides platform access for 1 year. You can renew your ID directly from your Reporter Dashboard before it expires."
  }
]

export function FaqSection() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/30">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-extrabold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">Everything you need to know about joining our network.</p>
        </div>

        <Accordion type="single" collapsible className="w-full bg-white dark:bg-card p-6 rounded-2xl shadow-soft border border-border">
          {FAQS.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-bold text-lg hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2 pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
