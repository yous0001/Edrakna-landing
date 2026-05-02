import type { AnchorHTMLAttributes, ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react'
import type { LinkProps } from 'react-router-dom'
import type { AboutPageContent, AboutTeamMember } from './about'
import type { ButtonVariant, FooterLink, HomePageContent, ProgramCard } from './home'

export interface GenericPageSection {
  readonly title: string
  readonly paragraphs?: readonly string[]
  readonly bullets?: readonly string[]
}

export interface GenericContentPageProps {
  readonly kicker: string
  readonly title: string
  readonly lead: string
  readonly sections: readonly GenericPageSection[]
  readonly footerTagline: string
  readonly footerLinks: readonly FooterLink[]
}

export interface StaticPageData {
  readonly kicker: string
  readonly title: string
  readonly lead: string
  readonly sections: readonly GenericPageSection[]
}

export interface HeroSectionProps {
  readonly content: HomePageContent['hero']
}

export interface ProgramsSectionProps {
  readonly content: HomePageContent['programs']
}

export interface FeaturesSectionProps {
  readonly content: HomePageContent['features']
}

export interface CtaSectionProps {
  readonly content: HomePageContent['cta']
}

export interface FooterProps {
  readonly tagline: string
  readonly links: readonly FooterLink[]
}

export interface AboutHeroSectionProps {
  readonly content: AboutPageContent['hero']
}

export interface AboutMissionVisionSectionProps {
  readonly mission: AboutPageContent['mission']
  readonly vision: AboutPageContent['vision']
  readonly commitment: AboutPageContent['commitment']
}

export interface AboutTeamSectionProps {
  readonly kicker: string
  readonly title: string
  readonly description: string
  readonly members: readonly AboutTeamMember[]
}

export interface AboutValuesSectionProps {
  readonly content: AboutPageContent['values']
}

export interface AboutPageCtaProps {
  readonly content: AboutPageContent['cta']
}

export interface SectionHeadingProps {
  readonly eyebrow?: string
  readonly title: string
  readonly titleId?: string
  readonly description?: string
  readonly align?: 'center' | 'start'
}

export interface CardProps extends HTMLAttributes<HTMLElement> {
  readonly children: ReactNode
  readonly as?: 'article' | 'div'
  readonly elevated?: boolean
}

type SharedButtonProps = {
  readonly children: ReactNode
  readonly variant?: ButtonVariant
  readonly className?: string
}

type ButtonAsButton = SharedButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    readonly href?: never
    readonly to?: never
  }

type ButtonAsAnchor = SharedButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    readonly href: string
    readonly to?: never
  }

type ButtonAsRouterLink = SharedButtonProps &
  Omit<LinkProps, 'className' | 'children'> & {
    readonly href?: never
  }

export type ButtonProps = ButtonAsButton | ButtonAsAnchor | ButtonAsRouterLink

export type ProgramCardModel = ProgramCard
