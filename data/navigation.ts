export declare type INote = {
  href: string
  name: string
  tslug: string
}

export const navigation: INote[] = [
  { href: '/', name: 'Home', tslug: 'navbar.home' },
  { href: '/notes', name: 'Notes', tslug: 'navbar.notes' },
  { href: '/about', name: 'About', tslug: 'navbar.about' },
  { href: '/blog', name: 'Blog', tslug: 'navbar.blog' },
  { href: '/contacts', name: 'Contacts', tslug: 'navbar.contacts' },
  { href: '/works', name: 'Contacts', tslug: 'navbar.works' }
]
