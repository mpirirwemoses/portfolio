"use client";

function SocialIcons({ handleCopy }) {
  return (
    <div className="flex justify-center flex-wrap gap-6">
      {/* Facebook */}
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform text-blue-600"
      >
        <i className="fab fa-facebook fa-3x"></i>
      </a>

      {/* Twitter */}
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform text-sky-500"
      >
        <i className="fab fa-twitter fa-3x"></i>
      </a>

      {/* X (Twitter) */}
      <a
        href="https://x.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform text-black"
      >
        <i className="fab fa-x-twitter fa-3x"></i>
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform text-pink-500"
      >
        <i className="fab fa-instagram fa-3x"></i>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/your-number"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform text-green-500"
      >
        <i className="fab fa-whatsapp fa-3x"></i>
      </a>

      {/* Email */}
      <a
        href="mailto:your-email@example.com"
        className="hover:scale-110 transition-transform text-blue-500"
      >
        <i className="fas fa-envelope fa-3x"></i>
      </a>

      {/* Phone */}
      <a
        href="tel:+256909845377"
        onClick={handleCopy}
        className="hover:scale-110 transition-transform flex items-center gap-3 text-green-800"
      >
        <i className="fas fa-phone fa-2x"></i>
        <span className="text-lg">+256909845377</span>
      </a>
    </div>
  );
}

export default SocialIcons;
