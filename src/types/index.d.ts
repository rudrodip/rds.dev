export type SiteConfig = {
    name: string,
    description: string,
    url: string,
    ogImage: string,
    links: {
        twitter: string,
        github: string,
        fb: string,
        insta: string,
        discord: string,
        youtube: string,
      },
}

type section<T> = {
  caption: string,
  categories: category<T>[]
}

type category<T> = {
  name: string,
  icon: string,
  items: T[]
}

type image = {
  mobile: string,
  desktop: string
}

type defaultProfile = {
  name: string,
  url?: string,
  image?: string,
}

type item = {
  title: string,
  desc: string,
  image: image,
  links: defaultProfile[],
  otherLinks: defaultProfile[],
  state?: boolean;
}