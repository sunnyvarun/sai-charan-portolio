import { useParams, useNavigate } from "react-router-dom";
import { blogPosts } from "@/data/blogData";
import { Calendar, User, Clock } from "lucide-react";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    if (!post) {
      navigate("/blog");
    }
    window.scrollTo(0, 0);
  }, [post, navigate]);

  if (!post) {
    return null;
  }

  return (
    <div className="pt-20">
      {/* Hero Section - Minimal like screenshot */}
      <div className="bg-gradient-hero py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-1.5 rounded-full">
                {post.category}
              </span>
            </div>
            
            <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap justify-center gap-6 text-base text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image - Full width like screenshot */}
      <div className="w-full bg-muted/20 py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto rounded-2xl shadow-md object-cover"
            />
          </div>
        </div>
      </div>

      {/* Blog Content - Wider layout like screenshot */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <ReactMarkdown
              components={{
                // Main heading - H1 style (if used)
                h1: ({ children }) => (
                  <h1 className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-foreground">
                    {children}
                  </h1>
                ),
                
                // H2 headings - Like in screenshot
                h2: ({ children }) => (
                  <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-5 text-foreground pb-2 border-b border-border/50">
                    {children}
                  </h2>
                ),

                // H3 headings
                h3: ({ children }) => (
                  <h3 className="text-xl md:text-2xl font-semibold mt-8 mb-4 text-foreground">
                    {children}
                  </h3>
                ),

                // Paragraphs - Better line height like screenshot
                p: ({ children }) => (
                  <p className="text-foreground/80 leading-relaxed text-base md:text-lg mb-6">
                    {children}
                  </p>
                ),

                // Bold text
                strong: ({ children }) => (
                  <strong className="font-semibold text-foreground">
                    {children}
                  </strong>
                ),

                // Unordered lists
                ul: ({ children }) => (
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-foreground/80">
                    {children}
                  </ul>
                ),

                // Ordered lists
                ol: ({ children }) => (
                  <ol className="list-decimal pl-6 mb-6 space-y-2 text-foreground/80">
                    {children}
                  </ol>
                ),

                // List items
                li: ({ children }) => (
                  <li className="leading-relaxed text-base md:text-lg">
                    {children}
                  </li>
                ),
                
                // Blockquotes (if any)
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-primary pl-6 my-8 italic text-foreground/70 text-lg">
                    {children}
                  </blockquote>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
            
            {/* Author Bio - Cleaner design */}
            <div className="mt-16 pt-8 border-t border-border">
              <div className="flex items-start gap-5 p-8 bg-muted/20 rounded-2xl">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-primary-dark flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  SC
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-xl mb-1">
                    Dr. Sai Charan (PT)
                  </h4>
                  <p className="text-muted-foreground">
                    BPT, MPT (Neurology) | Expert Physiotherapist in Hyderabad
                  </p>
                  <p className="text-muted-foreground mt-2">
                    Specializing in neurological rehabilitation, sports injuries, and post-surgical recovery with over 4 years of experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;