import { getAllPosts } from '@/lib/blog';
import { BlogCard } from '@/components/BlogCard';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      <div className="mb-12 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
        <p className="text-lg text-muted-foreground">
          Thoughts on backend engineering, system design, and building 
          scalable infrastructure.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-16 animate-fade-in">
          <p className="text-muted-foreground mb-4">No posts yet. Check back soon!</p>
        </div>
      ) : (
        <div className="divide-y divide-border">
          {posts.map((post, index) => (
            <div
              key={post.slug}
              className="py-6 first:pt-0 last:pb-0 animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <BlogCard
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                date={new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
                readTime={post.readTime}
                tags={post.tags}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
