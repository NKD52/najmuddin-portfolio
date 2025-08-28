import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 ">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 text-center bg-clip-text text-transparent">
            Featured Projects
          </h2>
          {/* ecom */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2 not-[]:">
                Ecommerce Store
              </h3>
              <p className="text-gray-400 mb-4">
                Built a full-featured ecommerce clothing website. Implemented
                secure RESTful APIs, integrated MongoDB for dynamic data
                storage, and ensured responsive design for seamless shopping
                experience across devices.
              </p>

              <div className="flex flex-wrap flex-row gap-2 mb-4">
                {["React", "Node", "MongoDB", "Expresss"].map((skill, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center mt-4">
                <a
                  href="https://ecommerce-app-rose-psi.vercel.app/"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project ➤
                </a>
              </div>
            </div>

            {/* Ai agents */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2 not-[]:">
                Inbound Lead Qualifier Bot{" "}
              </h3>
              <p className="text-gray-400 mb-4">
                Instead of having to pay someone to manually qualify leads OR
                using arbitrary rules that may end up cutting out potentially
                valuable leads, this automation can immediately qualify and
                trigger the next steps for the sales team.
              </p>

              <div className="flex flex-wrap flex-row gap-2 mb-4">
                {["Gemini", "Gmail", "Relevance AI", "AI Agent"].map(
                  (skill, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>

              <div className="flex justify-between items-center mt-4">
                <a
                  href="https://github.com/NKD52/AI-Agents"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project ➤
                </a>
              </div>
            </div>

            {/* RAG */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2 not-[]:">Chess Engine</h3>
              <p className="text-gray-400 mb-4">
                Created a complete 2-player chess engine with castling, en
                passant, and checkmate logic. Focused on class hierarchy, move
                validation, and game state management.
              </p>

              <div className="flex flex-wrap flex-row gap-2 mb-4">
                {["Java", "OOP"].map((skill, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center mt-4">
                <a
                  href="https://github.com/NKD52/Chess"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project ➤
                </a>
              </div>
            </div>

            {/* emojidle */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2 not-[]:">Emojidle Game</h3>
              <p className="text-gray-400 mb-4">
                Built a web-based emoji puzzle game to test logical reasoning in
                a fun way. Applied component-based design and user feedback
                handling.
              </p>

              <div className="flex flex-wrap flex-row gap-2 mb-4">
                {["React", "Node", "HTML", "CSS"].map((skill, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center mt-4">
                <a
                  href="https://nkd52.github.io/Emojidle/"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project ➤
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
