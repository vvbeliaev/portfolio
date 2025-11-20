<script>
  const quadrants = [
    {
      title: "WebDev",
      desc: "Modern, reactive frontends built for performance and SEO.",
      items: [
        { name: "SvelteKit", icon: "devicon-svelte-plain", href: "" },
        { name: "Astro", icon: "devicon-astro-plain", href: "" },
        { name: "Tailwind", icon: "devicon-tailwindcss-plain", href: "" },
        { name: "DaisyUI", icon: "devicon-daisyui-plain", href: "" },
        { name: "NextJS", icon: "devicon-nextjs-plain", href: "" },
      ],
    },
    {
      title: "Backend",
      desc: "Scalable APIs and robust data management systems.",
      items: [
        { name: "FastAPI", icon: "devicon-fastapi-plain", href: "" },
        { name: "Node.js", icon: "devicon-nodejs-plain", href: "" },
        { name: "Postgres", icon: "devicon-postgresql-plain", href: "" },
        { name: "Meilisearch", icon: "fas fa-search", href: "" },
        { name: "Hexagonal Architecture", icon: "fas fa-search", href: "" },
        { name: "SOLID", icon: "fas fa-search", href: "" },
      ],
    },
    {
      title: "Infrastructure",
      desc: "Reliable deployment pipelines and cloud orchestration.",
      items: [
        { name: "Docker", icon: "devicon-docker-plain", href: "" },
        { name: "Coolify", icon: "fas fa-cloud", href: "" },
        {
          name: "GitHub Actions",
          icon: "devicon-githubactions-plain",
          href: "",
        },
        { name: "Linux", icon: "devicon-linux-plain", href: "" },
        { name: "Hetzner", icon: "devicon-linux-plain", href: "" },
      ],
    },
    {
      title: "LLM / AI",
      desc: "Integrating state-of-the-art models into practical workflows.",
      items: [
        { name: "LangChain", icon: "fas fa-brain", href: "" },
        { name: "Pydantic AI", icon: "fas fa-robot", href: "" },
        { name: "Custom Agents", icon: "fas fa-cogs", href: "" },
        { name: "RAG", icon: "fas fa-database", href: "" },
        { name: "Pytorch", icon: "fas fa-database", href: "" },
      ],
    },
  ];
</script>

<div class="h-full flex flex-col justify-center max-w-6xl mx-auto px-4">
  <h2 class="text-3xl font-bold mb-12 text-center md:text-left">
    <span class="text-primary">/</span> stack
  </h2>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
    {#each quadrants as quadrant}
      <div
        class="card-terminal p-6 md:p-8 hover:border-primary/30 transition-colors flex flex-col"
      >
        <div class="mb-6 border-b border-base-content/10 pb-4">
          <h3 class="text-xl font-bold text-base-content/90 mb-2">
            {quadrant.title}
          </h3>
          <p class="text-sm text-base-content/60 leading-relaxed">
            {quadrant.desc}
          </p>
        </div>

        <div class="grid grid-cols-2 gap-4 mt-auto">
          {#each quadrant.items as item}
            <div
              class="flex items-center gap-3 text-base-content/70 hover:text-primary transition-colors"
            >
              <i class="{item.icon} text-lg"></i>
              <span class="text-sm">{item.name}</span>
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</div>
