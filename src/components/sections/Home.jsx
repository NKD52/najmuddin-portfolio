import { RevealOnScroll } from "../RevealOnScroll";
export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="z-10 text-5xl md:text-7xl font-bold py-3 mb-6 bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text leading-tight text-transparent">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
              {/* gradient text applies here */}
            </span>
            <span className="text-black">👋</span> Hi! I'm Najmuddin
          </h1>

          <p className="text-gray-200 text-lg mb-8 max-w-lg mx-auto">
            I build full-stack applications and AI automations for customer follow-up, document workflows, and business operations.
          </p>

          <div className="flex justify-center space-x-4">
            <a
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]
            "
              href="#projects"
            >
              View Projects
            </a>

            <a
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]
            hover:bg-blue-500/10
            "
              href="#contact"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
