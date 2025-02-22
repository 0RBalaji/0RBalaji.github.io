
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GetInTouchSectionProps {
  handleContactClick: () => void;
  fadeInUp: any;
  staggerContainer: any;
}

export const GetInTouchSection = ({ handleContactClick, fadeInUp, staggerContainer }: GetInTouchSectionProps) => {
  const socialLinks = [
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      action: handleContactClick,
      variant: "default" as const,
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/balaji-r-288b43211/",
      variant: "secondary" as const,
    },
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/0RBalaji",
      variant: "outline" as const,
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle className="w-5 h-5" />,
      href: "https://wa.me/+919363417280",
      variant: "secondary" as const,
    },
  ];

  return (
    <section id="contact" className="py-16 relative">
      <div className="container px-4 mx-auto">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground">
              Feel free to reach out for collaborations or just a friendly hello
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {socialLinks.map((link) => (
              <Button
                key={link.name}
                variant={link.variant}
                className="w-full"
                onClick={link.action}
                {...(link.href && { as: "a", href: link.href, target: "_blank", rel: "noopener noreferrer" })}
              >
                {link.icon}
                {link.name}
              </Button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
