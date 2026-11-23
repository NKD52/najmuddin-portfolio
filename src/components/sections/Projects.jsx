import { RevealOnScroll } from "../RevealOnScroll";

const projects = [
  {
    title: "AI Agents & Automations",
    summary: "An n8n workflow collection for lead follow-up, quotation generation, order rescheduling, and day-to-day operations.",
    skills: ["n8n","GoHighLevel","AI workflows"],
    url: "https://github.com/NKD52/AI-Agents",
    action: "Browse automations",
  },
  {
    title: "Attentify",
    summary: "A university project exploring classroom attention cues with computer vision. The prototype detects and tracks faces in classroom video.",
    skills: ["Python","OpenCV","Computer vision"],
    url: "https://github.com/NKD52/Attentify",
    action: "View Attentify",
  },
  {
    title: "Ecommerce Store",
    summary: "A responsive clothing storefront with a REST API and MongoDB-backed data storage.",
    skills: ["React","Node.js","Express","MongoDB"],
    url: "https://ecommerce-app-rose-psi.vercel.app/",
    action: "Visit storefront",
  },
  {
    title: "Chess Engine",
    summary: "A two-player chess game with move validation, castling, en passant, and checkmate detection.",
    skills: ["Java","OOP"],
    url: "https://github.com/NKD52/Chess",
    action: "View Chess Engine",
  },
  {
    title: "Emojidle",
    summary: "A browser-based emoji puzzle game built around guessing and immediate feedback.",
    skills: ["React","HTML","CSS"],
    url: "https://nkd52.github.io/Emojidle/",
    action: "Play Emojidle",
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 text-center bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map(({ title, summary, skills, url, action }) => (
              <article
                key={title}
                className="flex flex-col items-start p-6 rounded-xl border border-white/10 transition-colors hover:border-blue-500/30"
              >
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-400 mb-4">{summary}</p>
                <ul className="flex flex-wrap gap-2 mb-4">
                  {skills.map((skill) => (
                    <li
                      key={skill}
                      className="bg-blue-500/10 text-blue-300 py-1 px-3 rounded-full text-sm"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
                <a
                  href={url}
                  className="mt-auto text-blue-400 hover:text-blue-300 underline underline-offset-4"
                >
                  {action}
                </a>
              </article>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
