import { motion } from "framer-motion";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "JavaScript", level: 90, icon: "devicon-javascript-plain" },
      { name: "TypeScript", level: 85, icon: "devicon-typescript-plain" },
      { name: "React.js", level: 90, icon: "devicon-react-original" },
      { name: "Next.js", level: 85, icon: "devicon-nextjs-plain" },
      { name: "HTML5", level: 95, icon: "devicon-html5-plain" },
      { name: "CSS3/SASS", level: 90, icon: "devicon-css3-plain" },
      { name: "Redux", level: 80, icon: "devicon-redux-original" },
      { name: "Tailwind CSS", level: 85, icon: "devicon-tailwindcss-plain" },
      { name: "Bootstrap", level: 80, icon: "devicon-bootstrap-plain" },
      { name: "Material UI", level: 75, icon: "devicon-materialui-plain" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 85, icon: "devicon-nodejs-plain" },
      { name: "Express.js", level: 80, icon: "devicon-express-original" },
      { name: ".NET Core", level: 35, icon: "devicon-dotnetcore-plain" },
    ],
  },
  {
    title: "Database & Storage",
    skills: [
      { name: "MongoDB", level: 80, icon: "devicon-mongodb-plain" },
      { name: "MySQL", level: 65, icon: "devicon-mysql-plain" },
      {
        name: "SQL Server",
        level: 50,
        icon: "devicon-microsoftsqlserver-plain",
      },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", level: 85, icon: "devicon-git-plain" },
      { name: "Docker", level: 75, icon: "devicon-docker-plain" },
      { name: "AWS EC2", level: 50, icon: "devicon-amazonwebservices-plain" },
      { name: "AWS S3", level: 70, icon: "devicon-amazonwebservices-plain" },
    ],
  },
];

function SkillBar({
  name,
  level,
  icon,
}: {
  name: string;
  level: number;
  icon: string;
}) {
  return (
    <div className="w-full mb-4">
      <div className="flex items-center mb-1">
        <i className={`${icon} text-lg mr-2 text-gray-700`} />
        <span className="text-sm font-medium text-gray-700 flex-1">{name}</span>
        <span className="text-xs text-gray-500">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <motion.div
          className="h-2 rounded-full bg-gray-800"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection({ active }: { active: boolean }) {
  return (
    <section
      id="skills"
      className={`relative overflow-hidden ${active ? "block" : "hidden"}`}
      style={{
        backgroundColor: "#ffffff",
        paddingTop: "80px",
        paddingBottom: "80px",
        scrollMarginTop: "64px",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gray-600 font-medium tracking-wider text-lg uppercase">
            Technical Expertise
          </span>
          <Title
            level={2}
            className="text-gray-900 mt-3 text-3xl md:text-4xl font-bold"
          >
            Skills & Technologies
          </Title>
          <div className="w-20 h-1 bg-gray-800 mx-auto mt-4" />
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <Paragraph className="text-gray-600 text-base leading-relaxed text-center">
            With nearly 4 years of experience in full-stack development, I've
            worked extensively with modern JavaScript technologies to build
            scalable web applications.
          </Paragraph>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Title
                level={3}
                className="m-0 text-gray-800 text-lg mb-6 border-b pb-2"
              >
                {category.title}
              </Title>

              <div className="space-y-2">
                {category.skills.map(({ name, level, icon }) => (
                  <SkillBar key={name} name={name} level={level} icon={icon} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 p-6 bg-gray-50 rounded-lg border border-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Title level={4} className="text-gray-800 mb-4 text-center">
            Soft Skills
          </Title>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Teamwork & Collaboration",
              "Problem Solving",
              "Time Management",
              "Adaptability",
              "Analytical Thinking",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm text-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
