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
    isTitle: false,
  },
  // Example of dropdown with submenu
  // {
  //   key: 'landing',
  //   label: 'Landing',
  //   isTitle: false,
  //   children: [
  //     {
  //       key: 'app',
  //       label: 'App',
  //       url: '/landing/app',
  //       parentKey: 'landing',
  //     },
  //     {
  //       key: 'sass-classic',
  //       label: 'Sass Classic',
  //       url: '/landing/sass-classic',
  //       parentKey: 'landing',
  //     },
  //     {
  //       key: 'software',
  //       label: 'Software',
  //       url: '/landing/software',
  //       parentKey: 'landing',
  //     },
  //     {
  //       key: 'coworkng',
  //       label: 'Coworking',
  //       url: '/landing/coworking',
  //       parentKey: 'landing',
  //     },
  //     {
  //       key: 'marketing',
  //       label: 'Marketing',
  //       url: '/landing/marketing',
  //       parentKey: 'landing',
  //     },
  //     {
  //       key: 'sass-modern',
  //       label: 'Sass Modern',
  //       url: '/landing/sass-modern',
  //       parentKey: 'landing',
  //     },
  //     {
  //       key: 'startup',
  //       label: 'Startup',
  //       url: '/landing/startup',
  //       parentKey: 'landing',
  //     },
  //     {
  //       key: 'agency',
  //       label: 'Agency',
  //       url: '/landing/agency',
  //       parentKey: 'landing',
  //     },
  //     {
  //       key: 'crypto',
  //       label: 'Crypto',
  //       url: '/landing/crypto',
  //       parentKey: 'landing',
  //     },
  //     {
  //       key: 'potfolio-landing',
  //       label: 'Portfolio',
  //       url: '/landing/portfolio',
  //       parentKey: 'landing',
  //     },
  //   ],
  // },
  
  {
    key: 'contact-us',
    label: 'Contacto',
    url: '/contact-us',
    isTitle: false,
  },
]

const HORIZONTAL_MENU_ITEMS: MenuItemTypes[] = [
  {
    key: 'home',
    label: 'Inicio',
    url: '/',
    isTitle: true,
  },
  // Example of dropdown with submenu 

  // {
  //   key: 'pages',
  //   label: 'Pages',
  //   isTitle: true,
  //   children: [
  //     {
  //       key: 'pages-auth',
  //       label: 'Account',
  //       parentKey: 'pages',
  //       children: [
  //         {
  //           key: 'auth-login',
  //           label: 'Login',
  //           url: '/auth/login',
  //           parentKey: 'pages-auth',
  //         },
  //         {
  //           key: 'auth-register',
  //           label: 'Sign Up',
  //           url: '/auth/register',
  //           parentKey: 'pages-auth',
  //         },
  //         {
  //           key: 'auth-forgot-password',
  //           label: 'Forget Password',
  //           url: '/auth/forgot-password',
  //           parentKey: 'pages-auth',
  //         },
  //         {
  //           key: 'auth-confirm-account',
  //           label: 'Confirm Account',
  //           url: '/auth/confirm-account',
  //           parentKey: 'pages-auth',
  //         },
  //       ],
  //     },
  //     {
  //       key: 'pages-blogs',
  //       label: 'Blog',
  //       parentKey: 'pages',
  //       isDivider: true,
  //       children: [
  //         {
  //           key: 'blog',
  //           label: 'Blog',
  //           url: '/pages/blogs/list',
  //           parentKey: 'pages-blogs',
  //         },
  //         {
  //           key: 'blog-post',
  //           label: 'Blog Post',
  //           url: '/pages/blogs/post',
  //           parentKey: 'pages-blogs',
  //         },
  //       ],
  //     },
      {
        key: 'pages-company',
        label: 'Odoo',
        url: '/pages/company',
        parentKey: 'pages',
      },
  //     {
  //       key: 'pages-dashboard',
  //       label: 'Dashboard',
  //       url: '/dashboard',
  //       parentKey: 'pages',
  //     },
  //     {
  //       key: 'setting',
  //       label: 'Setting',
  //       url: '/setting',
  //       parentKey: 'pages',
  //     },
  //     {
  //       key: 'pages-career',
  //       label: 'Career',
  //       url: '/pages/career',
  //       parentKey: 'pages',
  //     },
  //     {
  //       key: 'pages-pricing',
  //       label: 'Pricing',
  //       url: '/pages/pricing',
  //       parentKey: 'pages',
  //     },
  //     {
  //       key: 'pages-portfolio',
  //       label: 'Portfolio',
  //       parentKey: 'pages',
  //       isDivider: true,
  //       children: [
  //         {
  //           key: 'portfolio-grid',
  //           url: '/pages/portfolio/grid',
  //           label: 'Portfolio Grid',
  //           parentKey: 'pages-portfolio',
  //         },
  //         {
  //           key: 'portfolio-masonry',
  //           url: '/pages/portfolio/masonry',
  //           label: 'Portfolio Masonry',
  //           parentKey: 'pages-portfolio',
  //         },
  //         {
  //           key: 'portfolio-item',
  //           url: '/pages/portfolio/item',
  //           label: 'Portfolio Item',
  //           parentKey: 'pages-portfolio',
  //         },
  //       ],
  //     },
  //     {
  //       key: 'pages-help',
  //       label: 'Help',
  //       url: '/pages/help',
  //       parentKey: 'pages',
  //     },
  //   ],
  // },
  {
    key: 'contact-us',
    label: 'Contacto',
    url: '/contact-us',
    isTitle: true,
  },
]

export { HORIZONTAL_MENU_ITEMS, MENU_ITEMS }
