export type ButtonVariant = 'primary' | 'secondary' | 'ghost'

export interface NavItem {
  readonly label: string
  readonly href: string
}

export interface ProgramCard {
  readonly title: string
  readonly description: string
  readonly icon: string
  readonly featured?: boolean
}

export interface FeatureCard {
  readonly title: string
  readonly description: string
  readonly icon: string
  readonly featured?: boolean
  readonly wide?: boolean
}

export interface HomePageContent {
  readonly navItems: readonly NavItem[]
  readonly hero: {
    readonly eyebrow: string
    readonly title: string
    readonly highlightedTitle: string
    readonly description: string
    readonly primaryAction: string
    readonly secondaryAction: string
    readonly statLabel: string
    readonly statValue: string
  }
  readonly programs: {
    readonly eyebrow: string
    readonly title: string
    readonly description: string
    readonly cards: readonly ProgramCard[]
  }
  readonly features: {
    readonly title: string
    readonly description: string
    readonly cards: readonly FeatureCard[]
  }
  readonly cta: {
    readonly title: string
    readonly description: string
    readonly primaryAction: string
    readonly secondaryAction: string
  }
}
