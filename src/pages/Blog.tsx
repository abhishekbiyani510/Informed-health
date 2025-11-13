import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import BlurImage from "@/components/BlurImage";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/data/mockData";
import { Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 style={{ fontFamily: 'Poppins, sans-serif', color: '#444444' }} className="font-heading font-semibold text-4xl md:text-4xl mb-2 tracking-tight">Wellness Blog</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore evidence-based insights, nutrition tips, and wellness strategies
          </p>
        </motion.div>

        {/* Featured Post */}
        {blogPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid md:grid-cols-2">
                <div className="aspect-video md:aspect-[4/3]">
                  <BlurImage
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <Badge className="w-fit mb-3">{blogPosts[0].category}</Badge>
                  <h2 className="font-heading font-bold text-2xl mb-3">{blogPosts[0].title}</h2>
                  <p className="text-muted-foreground mb-4 text-sm">{blogPosts[0].excerpt}</p>
                  
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      <span>{new Date(blogPosts[0].date).toLocaleDateString('en-IN', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                  })}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>

                  <Button asChild size="sm">
                    <Link to={`/blog/${blogPosts[0].id}`}>Read Full Article</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col hover:shadow-xl transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <BlurImage
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <Badge className="w-fit mb-3">{post.category}</Badge>
                  <h3 className="font-heading font-bold text-xl mb-3">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      <span>{new Date(post.date).toLocaleDateString('en-IN', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <Button asChild variant="outline" className="w-full mt-4">
                    <Link to={`/blog/${post.id}`}>Read More</Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
