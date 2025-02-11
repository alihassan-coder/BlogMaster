export interface Author {
  id: number
  name: string
  role: string
  bio: string
  image: string
  socialMedia: {
    twitter?: string
    linkedin?: string
    instagram?: string
    github?: string
  }
}

export const authors: Author[] = [
  {
    id: 1,
    name: "Emma Thompson",
    role: "Senior Content Strategist",
    bio: "Emma is a seasoned content strategist with over a decade of experience in digital marketing. She specializes in SEO-driven content creation and has helped numerous businesses skyrocket their online presence.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    socialMedia: {
      twitter: "https://www.linkedin.com/in/ali-hassan-salman-49420a332/",
      linkedin: "https://www.linkedin.com/in/ali-hassan-salman-49420a332/",
    },
  },
  {
    id: 2,
    name: "Alex Chen",
    role: "Tech Blogger & Software Engineer",
    bio: "Alex brings a unique perspective to blogging with his background in software engineering. He's passionate about explaining complex technical concepts in simple terms and staying on top of the latest tech trends.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    socialMedia: {
      twitter: "https://www.linkedin.com/in/ali-hassan-salman-49420a332/",
      github: "https://www.linkedin.com/in/ali-hassan-salman-49420a332/",
    },
  },
  {
    id: 3,
    name: "Sophia Rodriguez",
    role: "Lifestyle & Wellness Editor",
    bio: "Sophia is a certified wellness coach and lifestyle blogger. Her articles focus on sustainable living, mindfulness, and holistic health, inspiring readers to live their best lives.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    socialMedia: {
      instagram: "https://www.linkedin.com/in/ali-hassan-salman-49420a332/",
      twitter: "https://www.linkedin.com/in/ali-hassan-salman-49420a332/",
    },
  },
  {
    id: 4,
    name: "Daniel Lee",
    role: "Personal Finance & Entrepreneurship Guru",
    bio: "Daniel is a serial entrepreneur and personal finance expert. He shares invaluable insights on building wealth, smart investing, and navigating the world of startups.",
    image:
    "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/ali-hassan-salman-49420a332/",
      twitter: "https://www.linkedin.com/in/ali-hassan-salman-49420a332/",
    },
  },
  {
    id: 5,
    name: "Ali Hassan Salman",
    role: "Software Engineer",
    bio: "Ali is a software engineer with a passion for writing and sharing knowledge. He enjoys exploring new technologies and creating engaging content for developers and tech enthusiasts.",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1148&q=80",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/ali-hassan-salman-49420a332/",
      github: "https://www.linkedin.com/in/ali-hassan-salman-49420a332/"
    },
  },
  {
    id: 6,
    name: "John Doe",
    role: "Software Engineer",
    bio: "John is a software engineer with a passion for writing and sharing knowledge. He enjoys exploring new technologies and creating engaging content for developers and tech enthusiasts.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/ali-hassan-salman-49420a332/",
      github: "https://www.linkedin.com/in/ali-hassan-salman-49420a332/"
    }
  },
  
  
]

export async function getAllAuthors(): Promise<Author[]> {
  return Promise.resolve(authors)
}

export async function getAuthorById(id: number): Promise<Author | undefined> {
  return Promise.resolve(authors.find((author) => author.id === id))
}

