
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

interface TechnicalSkillsSectionProps {
  skillCategories: any[];
  fadeInUp: any;
  staggerContainer: any;
  cardVariants: any;
  backgroundVariants: any;
}

export const TechnicalSkillsSection = ({ 
  skillCategories, 
  fadeInUp, 
  staggerContainer, 
  cardVariants, 
  backgroundVariants 
}: TechnicalSkillsSectionProps) => {
  return (
    <section className="py-20 neo-blur">
      <div className="container px-4 mx-auto">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-gradient">Technical Skills</h2>
          <p className="text-muted-foreground">
            Comprehensive expertise in robotics, automation, and software development
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={fadeInUp} className="flex">
              <motion.div
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
                animate="animate"
                className="w-full"
              >
                <Card className="p-6 h-full neo-blur hover:bg-white/5 transition-colors duration-300 flex flex-col">
                  <div className="flex items-center gap-4 mb-6 pb-3 border-b border-white/10">
                    <div className="p-2.5 rounded-xl bg-white/5">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gradient">{category.title}</h3>
                  </div>
                  <div className="flex-1 grid gap-2">
                    {category.skills.map((skill: any, idx: number) => (
                      <div 
                        key={idx} 
                        className="group flex items-center p-2.5 rounded-lg hover:bg-white/5 transition-all duration-200"
                      >
                        <div className="flex items-center gap-3 w-full">
                          <div className="p-1.5 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors duration-200">
                            {skill.icon}
                          </div>
                          <span className="text-sm text-white/80 group-hover:text-white transition-colors duration-200">
                            {skill.name}
                          </span>
                        </div>
                      </div>
                    ))}
                    {/* Add empty slots to maintain consistent height */}
                    {Array.from({ length: Math.max(0, 7 - category.skills.length) }).map((_, idx) => (
                      <div 
                        key={`empty-${idx}`} 
                        className="h-[44px] rounded-lg border border-dashed border-white/5"
                      />
                    ))}
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
