

const Footer = () => {

  return (
    <footer className="border-t border-white/10 py-12 bg-black/40">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-zinc-400">
          <p>© 2026 nifakit. All rights reserved.</p>
          
          <div className="flex items-center gap-8">
            <a 
              href="https://t.me/nifakit" 
              className="hover:text-white transition-colors"
            >
              Telegram
            </a>
            <a 
              href="https://github.com/nifakit" 
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            
          </div>

          <p className="text-xs text-white/30">
            Made with React + Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;