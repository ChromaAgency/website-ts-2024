import { ReactNode } from 'react'
import {
  Agency,
  AppIcon,
  Coworking,
  Crypto,
  Marketing,
  PortFolio,
  SassClassic,
  SassModern,
  Software,
  Startup,
} from './svgIcons'

export type MenuItemTypes = {
  key: string
  label: string
  isTitle?: boolean
  icon?: ReactNode
  url?: string
  badge?: {
    variant: string
    text: string
  }
  isDivider?: boolean
  parentKey?: string
  target?: string
  children?: MenuItemTypes[]
}

const MENU_ITEMS: MenuItemTypes[] = [
  {
    key: 'home',
    label: 'Inicio',
    url: '/',
    isTitle: true,
  },
  {
    key: 'pages-company',
    label: 'Odoo',
    url: '/odoo',
    parentKey: 'pages',
  },
  {
    key: 'desarrollos',
    label: 'Desarrollos',
    isTitle: true,
    url: '/desarrollos',
  },
  {
    key: 'contact-us',
    label: 'Contacto',
    url: '/contact-us',
    isTitle: true,
  },
]

const HORIZONTAL_MENU_ITEMS: MenuItemTypes[] = [
  {
    key: 'home',
    label: 'Inicio',
    url: '/',
    isTitle: true,
  },
  {
    key: 'pages-company',
    label: 'Odoo',
    url: '/odoo',
    parentKey: 'pages',
  },
  {
    key: 'desarrollos',
    label: 'Desarrollos',
    isTitle: true,
    url: '/desarrollos',
  },
  {
    key: 'contact-us',
    label: 'Contacto',
    url: '/contact-us',
    isTitle: true,
  },
]

export { HORIZONTAL_MENU_ITEMS, MENU_ITEMS }
