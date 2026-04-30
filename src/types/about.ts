export interface AboutStatItem {
  readonly value: string
  readonly label: string
}

export interface AboutTeamMember {
  readonly name: string
  readonly role: string
  readonly imageUrl: string
  readonly imageAlt: string
  readonly hoverTitle: string
  readonly hoverSubtitle: string
}

export interface AboutValueItem {
  readonly icon: string
  readonly title: string
  readonly description: string
}

export interface AboutMosaicImage {
  readonly imageUrl: string
  readonly alt: string
  readonly variant: 'tall' | 'square'
}

export interface AboutPageContent {
  readonly hero: {
    readonly eyebrow: string
    readonly titleBefore: string
    readonly titleHighlight: string
    readonly description: string
    readonly primaryAction: string
    readonly imageUrl: string
    readonly imageAlt: string
    readonly floatBadgeTitle: string
    readonly floatBadgeSubtitle: string
  }
  readonly mission: {
    readonly title: string
    readonly body: string
    readonly icon: string
  }
  readonly vision: {
    readonly title: string
    readonly body: string
    readonly icon: string
  }
  readonly commitment: {
    readonly title: string
    readonly body: string
    readonly stats: readonly AboutStatItem[]
    readonly icon: string
  }
  readonly team: {
    readonly kicker: string
    readonly title: string
    readonly description: string
    readonly members: readonly AboutTeamMember[]
  }
  readonly values: {
    readonly titleLine1: string
    readonly titleLine2Before: string
    readonly titleLine2Em: string
    readonly lead: string
    readonly items: readonly AboutValueItem[]
    readonly mosaic: readonly AboutMosaicImage[]
  }
  readonly cta: {
    readonly title: string
    readonly description: string
    readonly primaryAction: string
    readonly secondaryAction: string
  }
}
