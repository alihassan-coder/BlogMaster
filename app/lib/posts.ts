export interface Post {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  date: string
  author: string
  image: string
  tags: string[]
}

export const posts: Post[] = [
  {
    id: 1,
    title: "The Art of Crafting Engaging Blog Posts",
    slug: "art-of-crafting-engaging-blog-posts",
    excerpt:
      "Discover the secrets to writing blog posts that captivate your audience and keep them coming back for more.",
    content: `
      Creating engaging blog posts is both an art and a science. Here are some key strategies to make your content stand out:

      1. Know Your Audience: Understanding who you're writing for is crucial. Research your target demographic and tailor your content to their interests and needs.

      2. Craft Compelling Headlines: Your headline is the first thing readers see. Make it intriguing, clear, and promise value.

      3. Start Strong: Hook your readers with a powerful opening paragraph. Use a surprising fact, a question, or a bold statement.

      4. Use Visuals: Break up your text with relevant images, infographics, or videos. This makes your post more digestible and shareable.

      5. Structure for Readability: Use short paragraphs, subheadings, and bullet points to make your content easy to scan.

      6. Tell Stories: Humans are wired for storytelling. Incorporate anecdotes and case studies to illustrate your points.

      7. Provide Value: Always focus on what your reader will gain from your post. Offer practical tips, insights, or solutions.

      8. End with a Call-to-Action: Encourage engagement by asking questions, suggesting further reading, or inviting comments.

      Remember, practice makes perfect. The more you write, the better you'll become at crafting posts that resonate with your audience.
    `,
    date: "2023-07-01",
    author: "Emma Thompson",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["Content Creation", "Writing Tips", "Blogging"],
  },
  {
    id: 2,
    title: "Mastering SEO: Boost Your Blog's Visibility",
    slug: "mastering-seo-boost-blog-visibility",
    excerpt:
      "Learn essential SEO techniques to increase your blog's search engine rankings and attract more organic traffic.",
    content: `
      Search Engine Optimization (SEO) is crucial for getting your blog noticed. Here are some advanced techniques to boost your visibility:

      1. Keyword Research: Use tools like Google Keyword Planner or SEMrush to find relevant, high-volume keywords in your niche.

      2. On-Page SEO: Optimize your titles, meta descriptions, headers, and content with your target keywords. Ensure your content is well-structured and easy to read.

      3. Technical SEO: Improve your site's loading speed, make it mobile-friendly, and ensure it has a secure HTTPS connection.

      4. Link Building: Create high-quality, shareable content that naturally attracts backlinks. Guest post on reputable sites in your niche.

      5. User Experience: Focus on creating a seamless, enjoyable experience for your visitors. This includes easy navigation, fast loading times, and valuable content.

      6. Content Freshness: Regularly update your content to keep it relevant and show search engines that your site is active.

      7. Local SEO: If relevant, optimize for local search by including location-based keywords and getting listed in local directories.

      Remember, SEO is a long-term strategy. Be patient, consistent, and always prioritize creating valuable content for your readers over trying to game the system.
    `,
    date: "2023-07-15",
    author: "Alex Chen",
    image:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
    tags: ["SEO", "Digital Marketing", "Content Strategy"],
  },
  {
    id: 3,
    title: "Monetizing Your Blog: From Passion to Profit",
    slug: "monetizing-your-blog-passion-to-profit",
    excerpt: "Explore various strategies to turn your blogging hobby into a lucrative online business.",
    content: `
      Once you've built a solid readership, it's time to explore monetization strategies. Here are several ways to turn your blog into a profitable venture:

      1. Affiliate Marketing: Promote products or services and earn a commission on sales. Be sure to only recommend products you truly believe in to maintain trust with your audience.

      2. Sponsored Content: Partner with brands to create content that promotes their products or services. Always disclose sponsored posts to your readers.

      3. Display Advertising: Use platforms like Google AdSense to display ads on your blog. This works best for blogs with high traffic.

      4. Digital Products: Create and sell your own ebooks, courses, or webinars related to your blog's niche.

      5. Membership Site: Offer exclusive content or a community forum for paying members.

      6. Coaching or Consulting: Use your expertise to offer one-on-one or group coaching sessions.

      7. Freelance Services: Offer services related to your blog's topic, such as writing, design, or marketing.

      Remember to diversify your income streams and always provide value to your audience. The key to successful monetization is building trust and authority in your niche.
    `,
    date: "2023-08-01",
    author: "Sophia Rodriguez",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["Blog Monetization", "Online Business", "Passive Income"],
  },
  {
    id: 4,
    title: "The Power of Personal Branding for Bloggers",
    slug: "power-of-personal-branding-for-bloggers",
    excerpt: "Discover how developing a strong personal brand can set you apart in the crowded blogosphere.",
    content: `
      In the competitive world of blogging, a strong personal brand can be your secret weapon. Here's how to develop and leverage your personal brand:

      1. Define Your Unique Value Proposition: What makes you different? Identify your unique skills, experiences, and perspectives.

      2. Consistency is Key: Ensure your brand message is consistent across all platforms - your blog, social media, and any other online presence.

      3. Visual Identity: Create a cohesive visual identity with a professional logo, color scheme, and typography that reflects your brand personality.

      4. Share Your Story: People connect with stories. Share your journey, including both successes and failures, to build authenticity and trust.

      5. Showcase Your Expertise: Regularly create and share high-quality content that demonstrates your knowledge in your niche.

      6. Engage with Your Audience: Respond to comments, participate in discussions, and create a community around your brand.

      7. Collaborate with Others: Partner with other bloggers or brands that align with your values to expand your reach.

      8. Continuous Learning: Stay updated with the latest trends in your niche and continuously improve your skills.

      Remember, your personal brand is more than just a logo or a tagline - it's the total experience of how people perceive you. Cultivate it carefully and consistently.
    `,
    date: "2023-08-15",
    author: "Daniel Lee",
    image:
      "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1464&q=80",
    tags: ["Personal Branding", "Blogging", "Online Presence"],
  },
]

export async function getAllPosts(): Promise<Post[]> {
  // In a real application, you would fetch this data from a database or API
  return Promise.resolve(posts)
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  // In a real application, you would fetch this data from a database or API
  return Promise.resolve(posts.find((post) => post.slug === slug))
}

export async function getFeaturedPosts(): Promise<Post[]> {
  // In a real application, you might have a 'featured' flag on posts
  return Promise.resolve(posts.slice(0, 2)) // Return the first two posts as featured
}

