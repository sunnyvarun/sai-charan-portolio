import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blogData";

const Blog = () => {
  return (
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
  );
};

export default Blog;