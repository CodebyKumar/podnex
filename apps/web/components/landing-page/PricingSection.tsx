import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$9',
    period: '/month',
    description: 'For solo creators getting started',
    features: [
      '5 hours recording/month',
      'Basic AI editing',
      'Standard audio quality',
      'Email support',
      '3 distribution channels',
    ],
    popular: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'For growing podcasters',
    features: [
      'Unlimited recording',
      'Advanced AI editing',
      'Studio-grade quality',
      'Priority support',
      'All distribution channels',
      'API access (1000 calls/day)',
      'Custom branding',
    ],
    popular: true,
  },
  {
    name: 'Business',
    price: '$99',
    period: '/month',
    description: 'For podcast networks',
    features: [
      'Everything in Pro',
      'Unlimited API access',
      'White-label solution',
      'Dedicated account manager',
      'SLA guarantee',
      'Custom integrations',
      'Analytics dashboard',
      'Team collaboration',
    ],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="felt-bg py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block brass-badge px-6 py-2 rounded-full mb-6">
            <span className="font-mono text-sm text-wood-dark font-bold tracking-wider">
              PRICING
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gold-foil mb-4">
            Choose Your Studio
          </h2>
          <p className="font-body text-foreground/70 max-w-xl mx-auto">
            Flexible plans that grow with your podcast. Start free, upgrade anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`leather-panel rounded-2xl p-1 relative ${
                plan.popular ? 'ring-2 ring-brass' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="brass-badge px-4 py-1 rounded-full">
                    <span className="font-mono text-xs text-wood-dark font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                </div>
              )}

              {/* Inner Content with Stitching */}
              <div className="relative p-6 md:p-8 flex flex-col h-full">
                {/* Stitching effect */}
                <div className="absolute inset-2 border-2 border-dashed border-foreground/10 rounded-xl pointer-events-none" />

                {/* Brass Corner Pieces */}
                <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-brass rounded-tl-sm" />
                <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-brass rounded-tr-sm" />
                <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-brass rounded-bl-sm" />
                <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-brass rounded-br-sm" />

                {/* Plan Name */}
                <h3 className="font-heading text-xl font-bold text-gold-foil text-center mb-2">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="text-center mb-2">
                  <span className="font-mono text-4xl font-bold text-gold-foil">
                    {plan.price}
                  </span>
                  <span className="font-body text-sm text-debossed">
                    {plan.period}
                  </span>
                </div>

                {/* Description */}
                <p className="font-body text-sm text-center text-debossed mb-6">
                  {plan.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="brass-badge w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-wood-dark" />
                      </div>
                      <span className="font-body text-sm text-foreground/80">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full mt-auto py-4 rounded-xl font-body font-bold text-base ${
                    plan.popular
                      ? 'btn-skeuo text-foreground'
                      : 'btn-skeuo-secondary text-foreground'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Note */}
        <div className="text-center mt-12">
          <p className="font-body text-foreground/60">
            Need a custom solution?{' '}
            <a href="#" className="text-brass hover:underline">
              Contact our sales team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
