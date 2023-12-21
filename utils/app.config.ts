import type { NavItems, MediaItems, AppLogo, AppOwner } from '../Types';

export const appOwner: AppOwner = {
  name: 'Luc Blegh',
  bio: 'Web Developer',
};

export const appLogo: AppLogo = {
  icon: 'emojione-monotone:crown',
  title: 'Luc Blegh',
};

export const navItems: NavItems[] = [
  {
    title: 'Služby',
    path: '#services',
  },
  {
    title: 'Portfolio',
    path: '#portfolio',
  },
  {
    title: 'Spolupráce',
    path: '#contact',
  },
];

export const mediaItems: MediaItems[] = [
  {
    icon: 'mdi:github',
    path: '/',
    color: 'white',
  },
  {
    icon: 'mdi:facebook',
    path: '/',
    color: '#1877f2',
  },
  {
    icon: 'mdi:twitter',
    path: '/',
    color: '#1da1f2',
  },
  {
    icon: 'mdi:discord',
    path: '/',
    color: '#5865f2',
  },
  {
    icon: 'mdi:youtube',
    path: '/',
    color: '#ff0000',
  },
];
