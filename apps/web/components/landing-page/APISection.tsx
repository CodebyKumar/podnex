import { Terminal, Zap, Lock, Book } from 'lucide-react';

const APISection = () => {
  return (
    <section id="api" className="felt-bg py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block brass-badge px-6 py-2 rounded-full mb-6">
              <span className="font-mono text-sm text-wood-dark font-bold tracking-wider">
                DEVELOPER API
              </span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gold-foil mb-4">
              Build With Our API
            </h2>
            <p className="font-body text-foreground/70 max-w-xl mx-auto">
              Full programmatic access to every feature. REST & GraphQL endpoints, 
              webhooks, and comprehensive SDKs.
            </p>
          </div>

          {/* Code Preview Panel */}
          <div className="wood-panel-dark rounded-2xl p-6 md:p-8 relative mb-12">
            {/* Corner Screws */}
            <div className="absolute top-4 left-4 screw" />
            <div className="absolute top-4 right-4 screw" />
            <div className="absolute bottom-4 left-4 screw" />
            <div className="absolute bottom-4 right-4 screw" />

            {/* Terminal Header */}
            <div className="brushed-metal rounded-t-lg px-4 py-3 flex items-center gap-3 mb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-led-red" />
                <div className="w-3 h-3 rounded-full bg-led-amber" />
                <div className="w-3 h-3 rounded-full bg-led-green" />
              </div>
              <span className="font-mono text-xs text-wood-dark/80">
                api-example.js
              </span>
            </div>

            {/* Code Block */}
            <div className="bg-felt-deep rounded-lg p-4 md:p-6 overflow-x-auto">
              <pre className="font-mono text-sm leading-relaxed">
                <code>
                  <span className="text-led-amber">const</span>{' '}
                  <span className="text-foreground">podcast</span>{' '}
                  <span className="text-led-amber">=</span>{' '}
                  <span className="text-led-amber">await</span>{' '}
                  <span className="text-brass">podnex</span>
                  <span className="text-foreground">.</span>
                  <span className="text-led-green">episodes</span>
                  <span className="text-foreground">.</span>
                  <span className="text-led-green">create</span>
                  <span className="text-foreground">(&#123;</span>
                  {'\n'}
                  <span className="text-foreground">{'  '}</span>
                  <span className="text-brass">title</span>
                  <span className="text-foreground">:</span>{' '}
                  <span className="text-led-green">"My First Episode"</span>
                  <span className="text-foreground">,</span>
                  {'\n'}
                  <span className="text-foreground">{'  '}</span>
                  <span className="text-brass">audio</span>
                  <span className="text-foreground">:</span>{' '}
                  <span className="text-brass">audioFile</span>
                  <span className="text-foreground">,</span>
                  {'\n'}
                  <span className="text-foreground">{'  '}</span>
                  <span className="text-brass">enhance</span>
                  <span className="text-foreground">:</span>{' '}
                  <span className="text-led-amber">true</span>
                  <span className="text-foreground">,</span>
                  {'\n'}
                  <span className="text-foreground">{'  '}</span>
                  <span className="text-brass">generateTranscript</span>
                  <span className="text-foreground">:</span>{' '}
                  <span className="text-led-amber">true</span>
                  <span className="text-foreground">,</span>
                  {'\n'}
                  <span className="text-foreground">{'  '}</span>
                  <span className="text-brass">publish</span>
                  <span className="text-foreground">:</span>{' '}
                  <span className="text-foreground">[</span>
                  <span className="text-led-green">"spotify"</span>
                  <span className="text-foreground">,</span>{' '}
                  <span className="text-led-green">"apple"</span>
                  <span className="text-foreground">,</span>{' '}
                  <span className="text-led-green">"youtube"</span>
                  <span className="text-foreground">]</span>
                  {'\n'}
                  <span className="text-foreground">&#125;);</span>
                </code>
              </pre>
            </div>
          </div>

          {/* API Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Terminal,
                title: 'RESTful API',
                description: 'Clean, predictable endpoints following industry standards',
              },
              {
                icon: Zap,
                title: 'Real-time Webhooks',
                description: 'Get instant notifications for processing events',
              },
              {
                icon: Lock,
                title: 'Secure by Default',
                description: 'OAuth 2.0 authentication with granular permissions',
              },
              {
                icon: Book,
                title: 'Full Documentation',
                description: 'Interactive API docs with code examples',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="wood-panel rounded-xl p-6 text-center group hover:-translate-y-1 transition-transform"
              >
                <div className="brass-badge w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                  <feature.icon className="w-5 h-5 text-wood-dark" />
                </div>
                <h3 className="font-heading text-lg font-bold text-embossed mb-2">
                  {feature.title}
                </h3>
                <p className="font-body text-sm text-debossed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* API CTA */}
          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center gap-2 btn-skeuo-secondary px-8 py-4 rounded-xl font-body font-bold text-foreground"
            >
              <Book className="w-5 h-5" />
              View API Documentation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default APISection;
