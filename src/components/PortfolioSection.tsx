import { useState, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const photos = [
  "https://res.cloudinary.com/davt16alp/image/upload/v1770642807/ganesh_lebvat.jpg",
  "https://res.cloudinary.com/davt16alp/image/upload/v1770643018/kingdom_poster_psd_rv6imp.jpg",
  "https://res.cloudinary.com/davt16alp/image/upload/v1770641418/prabhas_poster_mpuerz.jpg",
  "https://res.cloudinary.com/davt16alp/image/upload/v1770641820/OG-1068x1601_gpp0l9.jpg",
  "https://res.cloudinary.com/davt16alp/image/upload/v1770642401/ramzaan_mubharak_pk9ryk.jpg",
  "https://res.cloudinary.com/davt16alp/image/upload/v1770642389/web_page_4_ufxt3o.jpg",
  "https://res.cloudinary.com/davt16alp/image/upload/v1770642482/pixel_stretch_999_ddhgum.jpg",
  "https://res.cloudinary.com/davt16alp/image/upload/v1770641348/food_poster_rmoysm.jpg",
  "https://res.cloudinary.com/davt16alp/image/upload/v1770641343/pizza_c9sdgg.jpg",
  "https://res.cloudinary.com/davt16alp/image/upload/v1770641342/burgur_zkz6td.jpg",
  "https://res.cloudinary.com/davt16alp/image/upload/v1770641166/vector_bird_2_hcgh2i.jpg",
  "https://res.cloudinary.com/davt16alp/image/upload/v1770641337/REPUBLIC_DAY_lo7qgy.jpg",
  "https://res.cloudinary.com/davt16alp/image/upload/v1770641340/kanuma_poster_spe7vg.jpg",
  "https://res.cloudinary.com/davt16alp/image/upload/v1770641338/SANKRATHI_blcew7.jpg",
  "https://res.cloudinary.com/davt16alp/image/upload/v1770641339/bhogi_cr0xlq.jpg",
  "https://res.cloudinary.com/davt16alp/image/upload/v1770641349/new_year_2_cyqb4j.jpg",
  "https://res.cloudinary.com/davt16alp/image/upload/v1770641342/christmas_nnhpii.jpg",
  "https://res.cloudinary.com/davt16alp/image/upload/v1770641869/dasara_mzjm4n.jpg",
  "https://res.cloudinary.com/davt16alp/image/upload/v1770642263/ugadi_poster_snlmh8.jpg",
  "https://res.cloudinary.com/davt16alp/image/upload/v1770642298/web_banner_3_glcyqa.jpg",
  "https://res.cloudinary.com/davt16alp/image/upload/v1770642381/web_page_3_antdqp.jpg",
  "https://res.cloudinary.com/davt16alp/image/upload/v1770642339/web_banner_2_z7pduh.jpg",
  "https://res.cloudinary.com/davt16alp/image/upload/v1770642328/web_banner_5_wq2vtu.jpg",
  "https://res.cloudinary.com/davt16alp/image/upload/v1770642294/web_banner_1_rtppr1.jpg",
  "https://res.cloudinary.com/davt16alp/image/upload/v1770642480/pixel_stretch_ytjbgc.jpg",
  "https://res.cloudinary.com/davt16alp/image/upload/v1770641338/salar_poster_ckeqoe.jpg",
];

const videos = [
  "https://www.youtube-nocookie.com/embed/S0k-wWbvSh0?enablejsapi=1&rel=0&modestbranding=1&showinfo=0",
  "https://www.youtube-nocookie.com/embed/GUO5sWKAX50?enablejsapi=1&rel=0&modestbranding=1&showinfo=0",
  "https://www.youtube-nocookie.com/embed/2Xk4ccjmYFg?enablejsapi=1&rel=0&modestbranding=1&showinfo=0",
  "https://www.youtube-nocookie.com/embed/44-tRuOD394?enablejsapi=1&rel=0&modestbranding=1&showinfo=0",
  "https://www.youtube-nocookie.com/embed/Z17XkOP_XNs?enablejsapi=1&rel=0&modestbranding=1&showinfo=0",
];




const PortfolioSection = () => {
  
  const [videoIndex, setVideoIndex] = useState(0);
  const videoRefs = useRef<(HTMLIFrameElement | null)[]>([]);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const pauseCurrentVideo = useCallback(() => {
    const currentIframe = videoRefs.current[videoIndex];
    if (currentIframe) {
      currentIframe.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    }
  }, [videoIndex]);



  const prevVideo = () => { pauseCurrentVideo(); setVideoIndex((p) => (p === 0 ? videos.length - 1 : p - 1)); };
  const nextVideo = () => { pauseCurrentVideo(); setVideoIndex((p) => (p === videos.length - 1 ? 0 : p + 1)); };

  return (
    <section id="portfolio" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <p className="text-primary font-bold text-sm uppercase tracking-[0.3em] mb-3 text-center">
          Portfolio
        </p>
        <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
          My <span className="text-gradient">Recent Work</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14">
          Here's a selection of my recent work showcasing video edits, motion graphics, and
          creative designs crafted for brands, creators, and businesses across different industries.
        </p>

        {/* Photos slideshow - horizontal rectangular */}
        <h3 className="text-xl font-bold mb-4">Graphic Designs</h3>
        <div className="rounded-xl overflow-hidden bg-muted mb-14">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 p-2 max-h-[600px] overflow-y-auto scrollbar-thin">
            {photos.map((src, i) => (
              <div key={i} className="rounded-lg overflow-hidden cursor-pointer aspect-[3/4] hover:opacity-90 transition-opacity" onClick={() => setLightboxSrc(src)}>
                <img
                  src={src}
                  alt={`Design ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Videos slideshow */}
        <h3 className="text-xl font-bold mb-4">Video Edits</h3>
        <div className="relative rounded-xl overflow-hidden bg-muted aspect-video max-w-4xl mx-auto">
          <div className="flex h-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${videoIndex * 100}%)` }}
          >
            {videos.map((src, i) => (
              <div key={i} className="flex-shrink-0 w-full h-full p-2">
                <iframe
                  ref={(el) => { videoRefs.current[i] = el; }}
                  src={src}
                  title={`Video ${i + 1}`}
                  className="w-full h-full rounded-lg"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
          <button onClick={prevVideo} className="absolute left-3 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full p-2 hover:bg-primary/20 transition-colors" aria-label="Previous video">
            <ChevronLeft size={24} />
          </button>
          <button onClick={nextVideo} className="absolute right-3 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full p-2 hover:bg-primary/20 transition-colors" aria-label="Next video">
            <ChevronRight size={24} />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {videos.map((_, i) => (
              <button
                key={i}
                onClick={() => { pauseCurrentVideo(); setVideoIndex(i); }}
                className={`w-3 h-3 rounded-full transition-all border ${i === videoIndex ? "bg-primary border-primary scale-125 shadow-[0_0_8px_hsl(120_98%_18.6%/0.6)]" : "bg-foreground/20 border-foreground/30 hover:bg-foreground/40"}`}
                aria-label={`Go to video ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setLightboxSrc(null)}
        >
          <button
            onClick={() => setLightboxSrc(null)}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X size={32} />
          </button>
          <img
            src={lightboxSrc}
            alt="Full size preview"
            className="max-w-[90vw] max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
