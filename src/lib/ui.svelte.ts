export class UIState {
  activeSection = $state("profile");

  setActiveSection(section: string) {
    this.activeSection = section;
  }
}

export const uiState = new UIState();
