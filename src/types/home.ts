export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'ghost'
  | 'outlineLight'
  | 'primaryContainer'
  | 'surfaceLight'

export type ProgramIcon = 'menu_book' | 'star' | 'public'

export type ProgramTone = 'default' | 'inverse' | 'warm'

export interface ProgramCard {
  readonly title: string
  readonly description: string
  readonly icon: ProgramIcon
  readonly tone?: ProgramTone
}

export interface FeaturesContent {
  readonly title: string
  readonly description: string
  readonly analysis: {
    readonly title: string
    readonly description: string
    readonly chartLabel: string
    readonly chartValue: string
  }
  readonly teachers: {
    readonly title: string
    readonly description: string
    readonly name: string
    readonly role: string
  }
  readonly quiz: {
    readonly title: string
    readonly description: string
  }
  readonly support: {
    readonly title: string
    readonly description: string
  }
}

export interface FooterLink {
  readonly label: string
  readonly href: string
}

export interface HomePageContent {
  readonly hero: {
    readonly eyebrow: string
    readonly title: string
    readonly highlightedTitle: string
    readonly description: string
    readonly primaryAction: string
    readonly secondaryAction: string
    readonly statLabel: string
    readonly statValue: string
    readonly trustHighlight: string
    readonly trustBefore: string
    readonly trustAfter: string
  }
  readonly programs: {
    readonly eyebrow: string
    readonly title: string
    readonly description: string
    readonly cards: readonly ProgramCard[]
  }
  readonly features: FeaturesContent
  readonly cta: {
    readonly title: string
    readonly description: string
    readonly primaryAction: string
    readonly secondaryAction: string
  }
  readonly footer: {
    readonly tagline: string
    readonly links: readonly FooterLink[]
  }
}
