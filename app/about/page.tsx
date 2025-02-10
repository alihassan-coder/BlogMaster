import Image from "next/image"

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">About BlogMaster</h1>
      <div className="max-w-3xl mx-auto">
        <Image
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="Blog writing setup"
          width={1200}
          height={600}
          className="w-full h-96 object-cover rounded-lg mb-8"
        />
        <div className="prose lg:prose-xl">
          <p>
            BlogMaster is your ultimate resource for all things blogging. We're passionate about helping bloggers of all
            levels improve their craft and reach their audience effectively.
          </p>
          <p>
            Founded in 2023, our team of experienced bloggers and digital marketing experts are committed to providing
            you with the latest tips, tricks, and insights in the world of blogging.
          </p>
          <p>
            Whether you're just starting out or looking to take your blog to the next level, BlogMaster is here to guide
            you every step of the way. Our comprehensive resources cover everything from content creation and SEO to
            monetization strategies and personal branding.
          </p>
          <p>Join our community of passionate bloggers and start your journey to blogging success today!</p>
        </div>
      </div>
    </div>
  )
}

