<script>
  import ThemeController from "./ThemeController.svelte";
  import {
    Github,
    Linkedin,
    Mail,
    User,
    Layers,
    Briefcase,
    FileUser,
    Send,
    Phone,
  } from "lucide-svelte";
  import { uiState } from "../lib/ui.svelte";

  function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      uiState.setActiveSection(id);
    }
  }
</script>

<aside
  class="fixed bottom-0 left-0 w-full h-16 md:w-20 md:h-screen bg-base-100/80 backdrop-blur-md border-t md:border-t-0 md:border-r border-base-content/10 z-50 flex md:flex-col justify-between items-center px-6 md:px-0 md:py-8"
>
  <div class="hidden md:flex flex-col items-center gap-4">
    <img
      class="size-12 bg-primary/20 rounded-md flex items-center justify-center text-primary font-bold"
      src="/favicon/android-chrome-512x512.png"
      alt="Vladimir Beliaev"
    />
  </div>

  <nav
    class="flex md:flex-col gap-8 md:gap-6 items-center justify-center w-full md:w-auto flex-1 md:mt-20"
  >
    <!-- Desktop Links -->
    <div class="hidden md:flex md:flex-col gap-8 text-sm tracking-wider">
      <button
        onclick={() => scrollToSection("profile")}
        class="cursor-pointer hover:text-primary transition-colors {uiState.activeSection ===
        'profile'
          ? 'text-primary font-bold'
          : 'text-base-content/60'}">/me</button
      >
      <button
        onclick={() => scrollToSection("stack")}
        class="cursor-pointer hover:text-primary transition-colors {uiState.activeSection ===
        'stack'
          ? 'text-primary font-bold'
          : 'text-base-content/60'}">/stack</button
      >
      <button
        onclick={() => scrollToSection("projects")}
        class="cursor-pointer hover:text-primary transition-colors {uiState.activeSection ===
        'projects'
          ? 'text-primary font-bold'
          : 'text-base-content/60'}">/work</button
      >
    </div>

    <!-- Mobile Icons -->
    <div class="flex md:hidden gap-8 w-full justify-center">
      <button
        onclick={() => scrollToSection("profile")}
        class="btn btn-ghost btn-circle btn-sm {uiState.activeSection ===
        'profile'
          ? 'text-primary bg-primary/10'
          : 'text-base-content/60'}"
        aria-label="Profile"
      >
        <User class="size-5" />
      </button>
      <button
        onclick={() => scrollToSection("stack")}
        class="btn btn-ghost btn-circle btn-sm {uiState.activeSection ===
        'stack'
          ? 'text-primary bg-primary/10'
          : 'text-base-content/60'}"
        aria-label="Stack"
      >
        <Layers class="size-5" />
      </button>
      <button
        onclick={() => scrollToSection("projects")}
        class="btn btn-ghost btn-circle btn-sm {uiState.activeSection ===
        'projects'
          ? 'text-primary bg-primary/10'
          : 'text-base-content/60'}"
        aria-label="Projects"
      >
        <Briefcase class="size-5" />
      </button>
    </div>

    <div class="hidden md:flex md:flex-col gap-4 mt-auto mb-8">
      <a
        href="https://github.com/vvbeliaev"
        target="_blank"
        class="btn btn-ghost btn-circle btn-sm md:btn-md"
        aria-label="GitHub"
      >
        <Github class="size-5 md:size-6" />
      </a>
      <a
        href="https://t.me/vvbeliaevv"
        target="_blank"
        class="btn btn-ghost btn-circle btn-sm md:btn-md"
        aria-label="Telegram"
      >
        <Send class="size-5 md:size-6" />
      </a>
      <a
        href="https://wa.me/79787129833"
        target="_blank"
        class="btn btn-ghost btn-circle btn-sm md:btn-md"
        aria-label="WhatsApp"
      >
        <Phone class="size-5 md:size-6" />
      </a>
      <a
        href="https://rxresu.me/kwazzartcreature/plw"
        target="_blank"
        class="btn btn-ghost btn-circle btn-sm md:btn-md"
        aria-label="LinkedIn"
      >
        <FileUser class="size-5 md:size-6" />
      </a>
      <a
        href="mailto:vvladimirbeliaev@gmail.com"
        class="btn btn-ghost btn-circle btn-sm md:btn-md"
        aria-label="Email"
      >
        <Mail class="size-5 md:size-6" />
      </a>
    </div>
  </nav>

  <div class="flex items-center">
    <ThemeController navStyle={true} />
  </div>
</aside>
