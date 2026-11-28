
import {
  MessageCircle,
  Mail,
  HelpCircle,
  ExternalLink,
  MessageSquare
} from "lucide-react";
import { Card, SectionHeading, Button } from "../components/UI";

const supportOptions = [
  {
    title: "Discord Community",
    description: "Join the Discord community for help and announcements.",
    icon: MessageCircle,
    action: "Join Discord",
    link: "https://discord.com"
  },
  {
    title: "Contact Support",
    description: "Get help with questions or technical issues.",
    icon: Mail,
    action: "Contact Us",
    link: "mailto:support@example.com"
  },
  {
    title: "Suggestions",
    description: "Share ideas that could improve Quest Master.",
    icon: MessageSquare,
    action: "Share Ideas",
    link: "https://discord.com"
  }
];

const faqs = [
  {
    question: "What is Quest Master?",
    answer:
      "Quest Master is a Discord bot project focused on quests, economy, rewards, XP, and community progression."
  },
  {
    question: "How do I view bot commands?",
    answer:
      "Visit the Commands page to explore the commands currently documented for the project."
  },
  {
    question: "Can I manage my server using the dashboard?",
    answer:
      "The dashboard currently provides a frontend preview. Live Discord login and server configuration will be connected later."
  },
  {
    question: "Where can I get help?",
    answer:
      "Use the support links above once the official community and support contact details have been configured."
  }
];

export default function SupportPage() {
  return (
    <div className="min-h-screen px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="We're here to help"
          title="Quest Master Support"
          description="Find help, get answers, and share your suggestions."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {supportOptions.map((option) => {
            const Icon = option.icon;

            return (
              <Card key={option.title} className="flex flex-col">
                <div className="mb-5 w-fit rounded-xl bg-purple-500/15 p-4 text-purple-300">
                  <Icon size={27} />
                </div>

                <h2 className="text-xl font-bold">{option.title}</h2>

                <p className="mt-3 flex-1 text-sm leading-7 text-gray-400">
                  {option.description}
                </p>

                <a
                  href={option.link}
                  target={option.link.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="mt-6"
                >
                  <Button className="w-full">
                    {option.action}
                    <ExternalLink size={16} />
                  </Button>
                </a>
              </Card>
            );
          })}
        </div>

        <section className="mx-auto mt-20 max-w-3xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Quick answers to common questions about Quest Master."
          />

          <div className="space-y-4">
            {faqs.map((faq) => (
              <Card key={faq.question}>
                <div className="flex items-start gap-3">
                  <HelpCircle
                    size={21}
                    className="mt-1 shrink-0 text-purple-300"
                  />
                  <div>
                    <h3 className="font-bold">{faq.question}</h3>
                    <p className="mt-2 text-sm leading-7 text-gray-400">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

