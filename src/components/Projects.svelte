<script>
  import Quizbee from "../assets/quizbee.png";
  import Growplex from "../assets/growplex.png";
  import LLMAgent from "../assets/llmagent.png";
  import YS from "../assets/ys.png";

  const projects = [
    {
      title: "YouStory.nl",
      url: "https://ys.cogitosoftware.nl/",
      desc: "An interactive platform where users co-create stories with AI. Features real-time text generation, dynamic plot branching, and character consistency checks using custom LLM pipelines.",
      stack: ["SvelteKit", "Node.js", "LLM", "Coolify"],
      image: YS.src,
    },
    {
      title: "Quizbee.academy",
      url: "https://quizbee.academy",
      desc: "AI-powered quiz generator for educators. Automatically converts lecture notes and PDFs into interactive quizzes, tracking student progress and providing analytics.",
      stack: ["Sveltekit", "FastAPI", "Redis", "PydanticAI", "SOLID"],
      image: Quizbee.src,
    },
    {
      title: "Growplex.dev",
      url: "https://growplex.dev",
      desc: "Seamless AI integration for CRM systems. Automates customer data entry, sentiment analysis, and follow-up scheduling, reducing manual workload by 40%.",
      stack: ["Astro", "LangChain", "Postgres"],
      image: Growplex.src,
    },
    {
      title: "LLMAgent.ru",
      url: "https://llmagent.ru",
      desc: "Enterprise-grade AI knowledge base. Ingests corporate documentation to answer employee queries with high accuracy, featuring citation tracking and role-based access control.",
      stack: ["FastAPI", "Elastic", "Qdrant", "Postgres"],
      image: LLMAgent.src,
    },
  ];
</script>

<div class="h-full flex flex-col justify-center max-w-6xl mx-auto px-4 py-12">
  <h2 class="text-3xl font-bold mb-12 text-center md:text-left">
    <span class="text-primary">/</span> work
  </h2>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    {#each projects as project}
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        class="card-terminal group hover:border-primary/50 transition-all duration-300 overflow-hidden flex flex-col h-full"
      >
        <div
          class="h-48 overflow-hidden relative border-b border-base-content/10"
        >
          <img
            src={project.image}
            alt={project.title}
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div
            class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <span class="badge badge-primary badge-outline bg-base-100"
              >visit ↗</span
            >
          </div>
        </div>

        <div class="p-6 flex flex-col flex-1">
          <h4
            class="text-xl font-bold text-base-content group-hover:text-primary transition-colors mb-3"
          >
            {project.title}
          </h4>

          <p
            class="text-sm text-base-content/70 mb-6 leading-relaxed line-clamp-3"
          >
            {project.desc}
          </p>

          <div class="flex flex-wrap gap-2 mt-auto">
            {#each project.stack as tech}
              <span
                class="text-xs text-base-content/50 bg-base-content/5 px-2 py-1 rounded border border-base-content/5"
              >
                {tech}
              </span>
            {/each}
          </div>
        </div>
      </a>
    {/each}
  </div>
</div>
