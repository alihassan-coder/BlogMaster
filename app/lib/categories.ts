export interface Category {
  id: number
  name: string
  slug: string
  description: string
  image: string
  color: string
  postCount: number
}

export const categories: Category[] = [
  {
    id: 1,
    name: "Content Creation",
    slug: "content-creation",
    description: "Master the art of crafting compelling content that captivates your audience and drives engagement.",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80",
    color: "from-purple-500 to-pink-500",
    postCount: 42,
  },
  {
    id: 2,
    name: "SEO & Marketing",
    slug: "seo-marketing",
    description:
      "Unlock the secrets of search engine optimization and digital marketing to skyrocket your blog's visibility.",
    image:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80",
    color: "from-green-500 to-teal-500",
    postCount: 38,
  },
  {
    id: 3,
    name: "Blogging Tools",
    slug: "blogging-tools",
    description:
      "Explore cutting-edge tools and resources that will revolutionize your blogging workflow and boost productivity.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    color: "from-blue-500 to-indigo-500",
    postCount: 25,
  },
  {
    id: 4,
    name: "Monetization",
    slug: "monetization",
    description: "Transform your passion into profit with innovative monetization strategies for your blog.",
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    color: "from-yellow-500 to-orange-500",
    postCount: 31,
  },
  {
    id: 5,
    name: "Community Building",
    slug: "community-building",
    description: "Learn how to cultivate a thriving community around your blog and foster meaningful connections.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    color: "from-red-500 to-pink-500",
    postCount: 19,
  },
  {
    id: 6,
    name: "Tech & Innovation",
    slug: "tech-innovation",
    description:
      "Stay ahead of the curve with the latest technological advancements and innovations in the blogging world.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    color: "from-cyan-500 to-blue-500",
    postCount: 27,
  },
]

export async function getAllCategories(): Promise<Category[]> {
  return Promise.resolve(categories)
}

export async function getCategoryBySlug(slug: string): Promise<Category | undefined> {
  return Promise.resolve(categories.find((category) => category.slug === slug))
}

