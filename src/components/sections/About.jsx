import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkils = [
    "JavaScript",
    "React",
    "Redux",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "React Native",
  ];

  const backendSkills = [
    "Node.js",
    "Express.js",
    "MongoDB",
    "GraphQL",
    "AWS Lambda",
    "PostgreSQL",
    "Redis",
    "Elasticsearch",
    "Svelte",
    "Expo",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 text-center bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I am a full-stack developer with a passion for creating visually
              stunning websites and applications. I specialize in JavaScript,
              React, and Node.js. My experience includes working on various
              projects from small startups to large-scale companies.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkils.map((skill, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* backend */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((skill, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 ">Education</h3>

              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>
                    Bachelor of Computer Science from Bahria Univeristy
                  </strong>
                  (2023-2027)
                </li>
                <li>
                  Certified Full-Stack Developer with MongoDB and ReactJs
                  Certification from IBM (2024)
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 ">Work Experience</h3>

              <div className="space-y-4 text-gray-300 ">
                <div>
                  <h4 className="font-semibold">
                    Frontend Developer Intern at InternsPk (2024-2024)
                  </h4>
                  {/* <p>
                  Built and improved 3 UI-focused projects using HTML, CSS,
                  Bootstrap, and jQuery.
                </p>
                <p>Login Page – optimized for fast loading.</p>
                <p>
                  App UI Redesign – converted rough UI into polished layouts.
                </p>
                <p>
                  Completed 50 coding challenges with an 89.5% success rate
                  (248/277 points).
                </p> */}

                  <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
                    <li>
                      Built and improved 3 UI-focused projects using HTML, CSS,
                      Bootstrap, and jQuery.
                    </li>
                    <li>Login Page – optimized for fast loading.</li>
                    <li>
                      App UI Redesign – converted rough UI into polished
                      layouts.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Content Writer at E-Write-Solutions (Full-time: Jun 2023–Aug
                    2024)
                  </h4>
                  {/* <p>
                  Coordinated with editors and project managers to meet weekly
                  deliverables.
                </p>
                <p>
                  Created and edited articles related to technology,
                  programming, and business.
                </p> */}

                  <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
                    <li>
                      Coordinated with editors and project managers to meet
                      weekly deliverables.
                    </li>
                    <li>
                      Created and edited articles related to technology,
                      programming, and business.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
