// data/documentationData.ts
import { DocumentationData } from '@/types/documentation';

export const documentationData: DocumentationData = {
  metadata: {
    title: "Emailly Component Library - Complete Documentation",
    description: "Complete documentation for Emailly React component library. Build beautiful email marketing pages faster with our comprehensive component library and design system.",
    keywords: ["react components", "email marketing", "component library", "documentation", "design system", "tailwind css"]
  },

  pages: [
    {
      id: 'introduction',
      slug: '',
      title: 'Introduction',
      description: 'Welcome to Emailly documentation and get started with our component library',
      category: 'getting-started',
      icon: 'FiHome',
      content: 'introduction',
      related: ['installation', 'components']
    },
    {
      id: 'installation',
      slug: 'installation',
      title: 'Installation',
      description: 'Setup and installation guide for Emailly component library',
      category: 'getting-started',
      icon: 'FiPlayCircle',
      content: 'installation',
      related: ['introduction', 'integration']
    },
    {
      id: 'components',
      slug: 'components',
      title: 'Components',
      description: 'Browse all available components with examples and usage',
      category: 'components',
      icon: 'FiCompass',
      content: 'components',
      related: ['introduction', 'api']
    },
    {
      id: 'design-system',
      slug: 'design-system',
      title: 'Design System',
      description: 'Complete design system with colors, tokens, and typography',
      category: 'design',
      icon: 'FiPackage',
      content: 'design-system',
      related: ['components', 'best-practices']
    },
    {
      id: 'integration',
      slug: 'integration',
      title: 'Integration',
      description: 'Step-by-step integration guide for developers',
      category: 'development',
      icon: 'FiGitBranch',
      content: 'integration',
      related: ['installation', 'api']
    },
    {
      id: 'api',
      slug: 'api',
      title: 'API Reference',
      description: 'Complete API reference with props and usage examples',
      category: 'development',
      icon: 'FiCode',
      content: 'api',
      related: ['components', 'integration']
    },
    {
      id: 'best-practices',
      slug: 'best-practices',
      title: 'Best Practices',
      description: 'Development guidelines and best practices',
      category: 'resources',
      icon: 'FiCheckCircle',
      content: 'best-practices',
      related: ['design-system', 'components']
    }
  ],

  components: [
    {
      id: 'how-it-works',
      name: "HowItWorks",
      description: "Step-by-step process showcase with timeline layout",
      props: "steps: Array<{step, title, description, features[]}>",
      usage: "Display process flows and user journeys",
      category: "content",
      example: `const steps = [
  {
    step: "1",
    title: "Sign Up",
    description: "Create your account in seconds",
    features: ["No credit card required", "14-day free trial"]
  }
];`
    },
    {
      id: 'features',
      name: "Features",
      description: "Feature showcase grid with icons and benefits",
      props: "features: Array<{icon, title, description, items[]}>",
      usage: "Highlight product features and capabilities",
      category: "content",
      example: `const features = [
  {
    icon: <FiMail />,
    title: "Email Campaigns",
    description: "Create beautiful email campaigns",
    items: ["Drag & drop builder", "A/B testing", "Analytics"]
  }
];`
    },
    {
      id: 'pricing',
      name: "Pricing",
      description: "Pricing plans with feature comparison",
      props: "plans: Array<{name, price, period, features[], popular}>",
      usage: "Display pricing tiers and plans",
      category: "content",
      example: `const plans = [
  {
    name: "Starter",
    price: "$19",
    period: "month",
    features: ["1000 emails", "Basic analytics"],
    popular: false
  }
];`
    },
    {
      id: 'cta',
      name: "CTA",
      description: "Call-to-action section with conversion focus",
      props: "None - static content",
      usage: "Drive user conversions and signups",
      category: "interaction"
    },
    {
      id: 'footer',
      name: "Footer",
      description: "Site footer with links and newsletter",
      props: "None - static content",
      usage: "Navigation and additional information",
      category: "layout"
    }
  ],

  colorPalette: [
    { name: "Primary Teal", value: "#62BCBA", usage: "Main brand color, buttons, icons" },
    { name: "Accent Orange", value: "#F78D50", usage: "CTAs, highlights, popular badges" },
    { name: "Background Cream", value: "#FCF6EA", usage: "Backgrounds, cards, sections" },
    { name: "Border Peach", value: "#F5CB9B", usage: "Borders, dividers, accents" },
    { name: "Text Dark", value: "#2D3748", usage: "Headings, important text" },
    { name: "Text Gray", value: "#4A5568", usage: "Body text, descriptions" }
  ],

  designTokens: [
    { token: "Border Radius", value: "12px (cards), 16px (buttons), 24px (containers)" },
    { token: "Border Width", value: "2px (all borders)" },
    { token: "Spacing Scale", value: "4px, 8px, 16px, 24px, 32px, 48px, 64px" },
    { token: "Typography Scale", value: "14px, 16px, 18px, 20px, 24px, 32px, 48px" },
    { token: "Transition", value: "300ms (all interactions)" }
  ],

  integrationSteps: [
    {
      step: "1",
      title: "Install Dependencies",
      description: "Add required packages to your project",
      code: "npm install react-icons\nnpm install @types/react",
      type: "terminal"
    },
    {
      step: "2",
      title: "Copy Components",
      description: "Add component files to your project structure",
      code: "components/\n├── HowItWorks.tsx\n├── Features.tsx\n├── Pricing.tsx\n├── CTA.tsx\n└── Footer.tsx",
      type: "structure"
    },
    {
      step: "3",
      title: "Import and Use",
      description: "Import components in your pages",
      code: `import HowItWorks from '@/components/HowItWorks';\nimport Features from '@/components/Features';\n\nexport default function Home() {\n  return (\n    <>\n      <HowItWorks />\n      <Features />\n    </>\n  );\n}`,
      type: "code"
    },
    {
      step: "4",
      title: "Customize Content",
      description: "Update props and data for your needs",
      code: `const customFeatures = [\n  {\n    icon: <FiMail />,\n    title: "Your Feature",\n    description: "Your description",\n    items: ["Item 1", "Item 2"]\n  }\n];`,
      type: "code"
    }
  ]
};