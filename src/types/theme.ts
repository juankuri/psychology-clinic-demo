export type ThemePreset = 'professional' | 'artisanal' | 'bold';

export interface ThemeTokens {
  colorPrimary?: string;
  colorAccent?: string;
  colorBackground?: string;
  colorText?: string;
}

export interface ThemeConfig {
  preset: ThemePreset;
  tokens?: ThemeTokens;
}
