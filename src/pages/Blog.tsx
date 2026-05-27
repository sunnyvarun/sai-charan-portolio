import { Helmet } from "react-helmet-async";

import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blogData";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>
          Expert Physiotherapy, Rehab & Health Blog | Sai Charan
        </title>

        <meta
          name="description"
          content="Explore expert articles on health, physiotherapy, and rehabilitation. Evidence-based tips, exercises, and recovery guides to improve mobility and well-being."
        />

        <meta
          name="keywords"
          content="physiotherapy blog, health blog, rehabilitation blog, physiotherapy tips, rehab exercises, pain relief physiotherapy, injury recovery blog, mobility improvement tips, physiotherapy articles, wellness blog, physio blog india"
        />

        <link
          rel="canonical"
          href="https://charanphysio.com/blog"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Expert Physiotherapy, Rehab & Health Blog | Sai Charan"
        />

        <meta
          property="og:description"
          content="Expert physiotherapy insights, rehabilitation tips, injury recovery advice, and wellness guides by Dr. Sai Charan."
        />

        <meta
          property="og:url"
          content="https://charanphysio.com/blog"
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:image"
          content="https://charanphysio.com/og-image.jpg"
        />

        {/* Twitter */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Expert Physiotherapy & Rehab Blog"
        />

        <meta
          name="twitter:description"
          content="Read expert physiotherapy and rehabilitation articles from Dr. Sai Charan."
        />

        <meta
          name="twitter:image"
          content="https://charanphysio.com/og-image.jpg"
        />
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-hero py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-poppins text-4xl md:text-5xl font-bold text-foreground mb-4">
              Health & Wellness Blog
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert insights, recovery tips, and the latest in physiotherapy from Dr. Sai Charan (PT)
            </p>
          </div>
        </div>

        {/* Blog Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="space-y-12">
                {blogPosts.map((post, index) => (
                  <BlogCard key={post.id} post={post} index={index} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;