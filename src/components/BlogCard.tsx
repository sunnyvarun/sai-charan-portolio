import { Calendar, User, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { BlogPost } from "@/data/blogData";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

const BlogCard = ({ post, index }: BlogCardProps) => {
  return (
    <Link to={`/blog/${post.slug}`} className="group block">
      <div className="grid md:grid-cols-2 gap-6 bg-background rounded-2xl overflow-hidden shadow-soft hover:shadow-xl transition-all duration-300 animate-slide-up">
        {/* Image Section */}
        <div className="relative h-64 md:h-full overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        {/* Content Section */}
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
            <span className="inline-flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
          
          <div className="mb-3">
            <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>
          
          <h3 className="font-poppins font-bold text-xl md:text-2xl mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
          
          <p className="text-muted-foreground mb-4 line-clamp-3">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            
            <span className="inline-flex items-center gap-1 text-primary font-medium group-hover:gap-2 transition-all">
              Read More
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;