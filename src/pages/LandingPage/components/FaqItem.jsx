"use client"

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { motion } from "framer-motion"

export default function FaqItem({ faqs }) {
  return (
    <Accordion type="single" collapsible className="space-y-4">
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="border border-gray-200 rounded-2xl shadow-sm"
        >
          <AccordionTrigger className="px-6 py-4 text-left text-gray-900 font-medium focus:outline-none focus:ring-0">
            <div className="flex items-center justify-between w-full">
              <span className="text-base">{faq.question}</span>

              <div
                className="transition-all duration-300 transform w-8 h-8 flex items-center justify-center rounded-full 
                border border-gray-300 text-gray-600 bg-white
                data-[state=open]:rotate-180"
              >
                <motion.span
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 90 }}
                  transition={{ duration: 0.2 }}
                  className="text-lg font-bold"
                >
                  +
                </motion.span>
              </div>
            </div>
          </AccordionTrigger>

          <AccordionContent className="px-6 pb-4 pt-0 text-sm text-gray-600 leading-relaxed">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
