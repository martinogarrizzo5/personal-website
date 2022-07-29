// available themes
export enum Themes {
  light,
  dark,
}

// function to get user theme preference from browser settings
export function useUserThemePreference() {
  const userPrefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const userPrefersLight =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches;

  if (userPrefersDark) {
    return Themes.dark;
  } else if (userPrefersLight) {
    return Themes.light;
  } else {
    return Themes.dark;
  }
}

export function handleThemeChange(theme: Themes) {
  const root: any = document.querySelector(":root");

  if (theme === Themes.dark) {
    root.style.setProperty("--background", "#121212");
    root.style.setProperty("--title", "white");
    root.style.setProperty("--sub-title", "rgb(176, 176, 176)");
    root.style.setProperty("--shadow", "black");
    root.style.setProperty("--card-background", "#1a1a1a");
    root.style.setProperty("--background-darken", "#050505");
    root.style.setProperty("--primary-color", "#c700ca");
    root.style.setProperty("--primary-color-darken", "#a5009f");
    root.style.setProperty("--theme-switcher", "#382c89");
  } else if (theme === Themes.light) {
    root.style.setProperty("--background", "white");
    root.style.setProperty("--title", "black");
    root.style.setProperty("--sub-title", "rgb(85, 85, 85)");
    root.style.setProperty("--shadow", "#cecece");
    root.style.setProperty("--card-background", "white");
    root.style.setProperty("--background-darken", "rgb(233, 233, 233)");
    root.style.setProperty("--primary-color", "#7510f7");
    root.style.setProperty("--primary-color-darken", "#5800c8");
    root.style.setProperty("--theme-switcher", "#9fe4ff");
  }
}
