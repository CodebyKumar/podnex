import { Play } from 'lucide-react';

const podcasts = [
  {
    title: 'Tech Talk Daily',
    host: 'Sarah Chen',
    category: 'Technology',
    color: 'from-amber-600 to-amber-900',
  },
  {
    title: 'True Crime Files',
    host: 'Marcus Webb',
    category: 'True Crime',
    color: 'from-red-800 to-red-950',
  },
  {
    title: 'Mind & Meaning',
    host: 'Dr. Elena Ross',
    category: 'Philosophy',
    color: 'from-indigo-700 to-indigo-950',
  },
  {
    title: 'Comedy Hour',
    host: 'Jake & Amy',
    category: 'Comedy',
    color: 'from-orange-500 to-orange-800',
  },
];

const ShowcaseSection = () => {
  return (
    <section id="showcase" className="felt-bg py-24 relative">
      <div className="container mx-auto px-4">
        {/* Leather Header Panel */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="leather-panel rounded-xl px-8 py-8 text-center relative overflow-hidden">
            {/* Stitching effect */}
            <div className="absolute inset-3 border-2 border-dashed border-foreground/20 rounded-lg pointer-events-none" />
            
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gold-foil relative z-10">
              Featured Shows
            </h2>
            <p className="font-body text-foreground/70 mt-3 relative z-10">
              Join thousands of creators building their audience
            </p>
          </div>
        </div>

        {/* Wooden Shelf with Album Covers */}
        <div className="max-w-5xl mx-auto">
          {/* Album Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            {podcasts.map((podcast, index) => (
              <div key={index} className="group">
                {/* Frame */}
                <div className="wood-panel-dark rounded-lg p-3 transition-transform duration-200 group-hover:-translate-y-2 group-hover:shadow-card-lift">
                  {/* Album Cover */}
                  <div className={`aspect-square rounded-md bg-gradient-to-br ${podcast.color} relative overflow-hidden`}>
                    {/* Glass highlight */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/20" />
                    
                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                      <div className="brass-badge w-14 h-14 rounded-full flex items-center justify-center">
                        <Play className="w-6 h-6 text-wood-dark ml-1" fill="currentColor" />
                      </div>
                    </div>

                    {/* Podcast Title */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                      <div className="font-heading text-sm font-bold text-foreground truncate">
                        {podcast.title}
                      </div>
                      <div className="font-body text-xs text-foreground/70">
                        {podcast.host}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Category Tag */}
                <div className="mt-3 text-center">
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                    {podcast.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Wooden Shelf */}
          <div className="relative">
            <div className="wood-panel h-8 rounded-t-sm" />
            {/* Shelf edge shadow */}
            <div className="h-2 bg-gradient-to-b from-wood-dark to-transparent" />
            {/* Shelf brackets */}
            <div className="absolute -top-2 left-8 w-6 h-6 brushed-metal rounded-sm" />
            <div className="absolute -top-2 right-8 w-6 h-6 brushed-metal rounded-sm" />
          </div>
        </div>

        {/* More Shows Link */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 font-body text-brass hover:text-primary transition-colors group"
          >
            <span>View All Featured Shows</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
