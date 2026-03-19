import { motion } from 'motion/react';
import { Calendar, User, Clock, ChevronRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const posts = [
  {
    title: "The Future of Generative AI in Enterprise Software",
    excerpt: "Exploring how LLMs and generative models are transforming the way businesses build and interact with software.",
    author: "Elena Rodriguez",
    date: "March 10, 2026",
    readTime: "8 min read",
    category: "AI & ML",
    image: "https://picsum.photos/seed/ai-enterprise/800/600"
  },
  {
    title: "Scaling Microservices with Kubernetes: Best Practices",
    excerpt: "A deep dive into orchestrating complex cloud-native applications for maximum reliability and performance.",
    author: "Sarah Jenkins",
    date: "March 5, 2026",
    readTime: "12 min read",
    category: "DevOps",
    image: "https://picsum.photos/seed/kubernetes-cloud/800/600"
  },
  {
    title: "Why Headless Commerce is the Future of Retail",
    excerpt: "How decoupling the frontend from the backend allows for faster innovation and better user experiences.",
    author: "Marcus Chen",
    date: "February 28, 2026",
    readTime: "6 min read",
    category: "E-commerce",
    image: "https://picsum.photos/seed/headless-commerce/800/600"
  },
  {
    title: "Designing for Accessibility: A Practical Guide",
    excerpt: "Practical tips and strategies for ensuring your digital products are usable by everyone.",
    author: "David Miller",
    date: "February 20, 2026",
    readTime: "10 min read",
    category: "Design",
    image: "https://picsum.photos/seed/ui-ux-design/800/600"
  }
];

export const Blog = () => {
  return (
    <div className="pt-24 pb-20 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="liquid-shape w-[800px] h-[800px] bg-accent/5 -top-96 -left-96 animate-morph" />
      <div className="liquid-shape w-[600px] h-[600px] bg-primary/5 -bottom-48 -right-48 animate-morph" style={{ animationDelay: '-7s' }} />

      <div className="section-padding relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                Insights & Perspectives
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-primary mb-10 tracking-tighter leading-none">
                The <span className="text-accent">MVIZ</span> Journal
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light max-w-2xl">
                Thoughts from our team on technology, design, and the future of digital business.
              </p>
            </motion.div>
          </div>
          
          <div className="relative w-full md:w-96">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Search articles..."
              className="w-full pl-16 pr-6 py-4 rounded-2xl bg-white/50 backdrop-blur border border-slate-200 focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 outline-none transition-all font-medium"
            />
          </div>
        </div>

        {/* Featured Post */}
        <section className="mb-32">
          <div className="bg-primary rounded-[4rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-center text-white relative shadow-2xl group">
            {/* Liquid Blob Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
              <div className="liquid-shape w-[600px] h-[600px] bg-accent/10 top-0 left-0 animate-morph" />
            </div>
            
            <div className="aspect-square lg:aspect-auto h-full relative overflow-hidden z-10">
              <img 
                src="https://picsum.photos/seed/featured-tech/1200/1200" 
                alt="Featured Post" 
                className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-transparent hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent lg:hidden" />
            </div>
            
            <div className="p-12 md:p-24 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-white text-[10px] font-black uppercase tracking-[0.3em] mb-10">
                Featured Article
              </div>
              <h2 className="text-4xl md:text-7xl font-black mb-10 leading-none tracking-tighter group-hover:text-accent transition-colors duration-300">
                Engineering Scalable Systems for the Next Billion Users
              </h2>
              <p className="text-slate-300 text-xl md:text-2xl mb-12 leading-relaxed font-light">
                Learn about the architectural patterns and infrastructure strategies we use to build systems that handle massive scale without compromising performance.
              </p>
              <div className="flex flex-wrap items-center gap-10 text-sm text-slate-400 mb-16 font-black uppercase tracking-widest">
                <span className="flex items-center gap-3"><User size={20} className="text-accent" /> Sarah Jenkins</span>
                <span className="flex items-center gap-3"><Calendar size={20} className="text-accent" /> March 12, 2026</span>
              </div>
              <button className="btn-primary px-12 py-6 text-xl uppercase tracking-widest font-black shadow-2xl">
                Read Full Article
              </button>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {posts.map((post, idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/10] rounded-[3rem] overflow-hidden mb-10 relative shadow-2xl">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute top-6 left-6 glass-card px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-accent border-white/40">
                  {post.category}
                </div>
              </div>
              <div className="flex items-center gap-6 text-[10px] text-slate-400 mb-6 font-black uppercase tracking-[0.3em]">
                <span className="flex items-center gap-2"><Calendar size={14} className="text-accent" /> {post.date}</span>
                <span className="flex items-center gap-2"><Clock size={14} className="text-accent" /> {post.readTime}</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-primary mb-6 group-hover:text-accent transition-colors duration-300 leading-tight tracking-tight">
                {post.title}
              </h3>
              <p className="text-slate-600 mb-10 leading-relaxed text-lg font-light">
                {post.excerpt}
              </p>
              <div className="inline-flex items-center gap-3 text-accent font-black text-xs uppercase tracking-[0.3em] group-hover:gap-5 transition-all">
                Read More <ChevronRight size={18} />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-40 p-16 md:p-32 glass-card rounded-[4rem] text-center border-white/40 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full -mr-48 -mt-48 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full -ml-48 -mb-48 blur-3xl" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              Newsletter
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-primary mb-8 tracking-tighter">Stay <span className="text-accent">Informed</span></h2>
            <p className="text-xl md:text-2xl text-slate-600 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
              Subscribe to our newsletter to receive the latest insights on technology and digital transformation directly in your inbox.
            </p>
            <form className="flex flex-col md:flex-row gap-6 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-grow px-8 py-5 rounded-2xl bg-white/50 border border-slate-200 focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 outline-none transition-all font-medium text-lg"
              />
              <button className="btn-primary px-12 py-5 text-lg uppercase tracking-widest font-black whitespace-nowrap shadow-xl">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
