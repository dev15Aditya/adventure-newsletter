import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import NewsLetter from './news-letter';

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpen?: string[];
}

const Accordion = ({ items, defaultOpen = [] }: AccordionProps) => {
  const [openItems, setOpenItems] = React.useState<string[]>(defaultOpen);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const isOpen = (id: string) => openItems.includes(id);

  return (
    <div className="space-y-2 mt-2">
      {items.map((item) => (
        <div key={item.id} className="rounded-lg">
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors duration-150 ease-in-out rounded-lg"
          >
            <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
            <div className="text-gray-500">
              {isOpen(item.id) ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </div>
          </button>

          {isOpen(item.id) && <NewsLetter heading="" newsletterContent={item.content} />}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
