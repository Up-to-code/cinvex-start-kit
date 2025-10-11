// types/documentation.ts
export interface Component {
  id: string;
  name: string;
  description: string;
  props: string;
  usage: string;
  category: 'layout' | 'content' | 'interaction';
  example?: string;
}

export interface ColorToken {
  name: string;
  value: string;
  usage: string;
}

export interface DesignToken {
  token: string;
  value: string;
}

export interface IntegrationStep {
  step: string;
  title: string;
  description: string;
  code: string;
  type: 'terminal' | 'structure' | 'code';
}

export interface DocumentationPage {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: 'getting-started' | 'components' | 'design' | 'development' | 'resources';
  icon: string;
  content: string;
  related?: string[];
}

export interface DocumentationData {
  metadata: {
    title: string;
    description: string;
    keywords: string[];
  };
  pages: DocumentationPage[];
  components: Component[];
  colorPalette: ColorToken[];
  designTokens: DesignToken[];
  integrationSteps: IntegrationStep[];
}