import { Mic2, Twitter, Github, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Product: ['Features', 'Pricing', 'API', 'Integrations', 'Changelog'],
    Resources: ['Documentation', 'Guides', 'Blog', 'Community', 'Support'],
    Company: ['About', 'Careers', 'Press', 'Partners', 'Contact'],
    Legal: ['Privacy', 'Terms', 'Security', 'GDPR'],
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="relative brushed-metal overflow-hidden">
      {/* Steel Floor Panel */}
      <div className="py-16 relative">
        {/* Rivets across the top */}
        <div className="absolute top-4 left-0 right-0 flex justify-center gap-[200px]">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="screw" />
          ))}
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            {/* Logo Column */}
            <div className="col-span-2 md:col-span-1">
              <a href="#" className="flex items-center gap-3 mb-4">
                <div className="brass-badge w-10 h-10 rounded-full flex items-center justify-center">
                  <Mic2 className="w-5 h-5 text-wood-dark" />
                </div>
                <span className="font-heading font-bold text-lg text-gray-900">
                  PODNEX
                </span>
              </a>
              <p className="font-body text-sm text-gray-700 mb-6">
                Professional podcast creation platform for creators worldwide.
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="brass-badge w-9 h-9 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <social.icon className="w-4 h-4 text-wood-dark" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-heading font-bold text-sm text-gray-900 mb-4 uppercase tracking-wider">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="font-body text-sm text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-400/50 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-sm text-gray-700">
              © 2024 PODNEX. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-gray-600">
                Status: <span className="text-led-green">●</span> All Systems Operational
              </span>
            </div>
          </div>
        </div>

        {/* Bottom rivets */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-[200px]">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="screw" />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
