import Link from "next/link";
import { Facebook, Github, Twitter, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    const socialLinks = [
        {
            name: "Facebook",
            href: "https://www.facebook.com/junaeid.ahmed.450013",
            icon: Facebook,
            color: "hover:text-blue-600"
        },
        {
            name: "GitHub",
            href: "https://github.com/Junaeid11",
            icon: Github,
            color: "hover:text-gray-400"
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/junaeidahmedtanim/",
            icon: FaLinkedin,
            color: "hover:text-blue-700"
        },
        {
            name: "Twitter",
            href: "https://twitter.com",
            icon: Twitter,
            color: "hover:text-blue-400"
        },
        {
            name: "Instagram",
            href: "https://instagram.com",
            icon: Instagram,
            color: "hover:text-pink-600"
        }
    ];

    const quickLinks = [
        { name: "Home", href: "/" },
        { name: "Projects", href: "/projects" },
        { name: "Blog", href: "/blog" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" }
    ];

    return (
        <footer className="relative bg-slate-900/95 border-t border-slate-800/50">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
            
            <div className="container-custom relative z-10">
                {/* Main Footer Content */}
                <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold gradient-text">
                                Junaeid Ahmed Tanim
                            </h3>
                            <p className="text-slate-400 leading-relaxed max-w-md">
                                A passionate Full Stack Developer and Power Engineer dedicated to creating 
                                innovative solutions and exceptional digital experiences.
                            </p>
                        </div>
                        
                        {/* Contact Info */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-slate-400">
                                <Mail size={16} className="text-blue-400" />
                                <a href="mailto:junaeidahmed979@gmail.com" className="hover:text-white transition-colors">
                                    junaeidahmed979@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center gap-3 text-slate-400">
                                <MapPin size={16} className="text-blue-400" />
                                <span>Chattogram, Bangladesh</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-400">
                                <Phone size={16} className="text-blue-400" />
                                <span>Available for opportunities</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-semibold text-white">Quick Links</h4>
                        <nav className="space-y-3">
                            {quickLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="block text-slate-400 hover:text-white transition-colors duration-200"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-semibold text-white">Connect</h4>
                        <div className="flex flex-wrap gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-400 transition-all duration-300 hover:scale-110 hover:border-slate-600/50 ${social.color}`}
                                    aria-label={social.name}
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-6 border-t border-slate-800/50">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-slate-400 text-sm">
                            © {currentYear} Junaeid Ahmed Tanim. All rights reserved.
                        </p>
                  
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
