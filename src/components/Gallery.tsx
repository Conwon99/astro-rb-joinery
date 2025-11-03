import { useState } from "react";
import { ChevronLeft, ChevronRight, X, Facebook } from "lucide-react";
import LazyImage from "@/components/LazyImage";
import { trackGalleryInteraction, trackExternalLink } from "@/utils/analytics";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    { src: "/gallery/imgi_102_515904287_122100986222932776_5118890495447873286_n.jpg", alt: "RB Joinery project - Professional joinery work" },
    { src: "/gallery/imgi_103_516941672_122100986204932776_7040050199649825090_n.jpg", alt: "RB Joinery project - Custom carpentry work" },
    { src: "/gallery/imgi_106_516623366_122100986156932776_5862980644307507215_n.jpg", alt: "RB Joinery project - Building construction" },
    { src: "/gallery/imgi_42_540938429_122124484052932776_3952873525751063385_n.jpg", alt: "RB Joinery project - Home renovation" },
    { src: "/gallery/imgi_52_541425463_122124483296932776_821082229721008959_n.jpg", alt: "RB Joinery project - Structural work" },
    { src: "/gallery/imgi_54_534553790_122121824852932776_948781921373463331_n.jpg", alt: "RB Joinery project - Interior finishing" },
    { src: "/gallery/imgi_6_513540452_122093898356932776_717539460719561833_n.jpg", alt: "RB Joinery project - Complete home transformation" },
    { src: "/gallery/imgi_70_531882235_122119545026932776_7092298327067455591_n.jpg", alt: "RB Joinery project - Garden room construction" },
    { src: "/gallery/imgi_74_530512795_122119544852932776_6508393302475343238_n.jpg", alt: "RB Joinery project - Bespoke joinery" },
    { src: "/gallery/imgi_84_527224925_122117141390932776_4700848699766695002_n.jpg", alt: "RB Joinery project - Quality craftsmanship" }
  ];

  const openLightbox = (index: number) => {
    trackGalleryInteraction('image_open', index);
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    trackGalleryInteraction('lightbox_close');
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      trackGalleryInteraction('image_next', selectedImage);
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      trackGalleryInteraction('image_prev', selectedImage);
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  const handleFacebookClick = () => {
    trackExternalLink('https://www.facebook.com/people/RB-Joinery/61577983282534/', 'gallery_facebook_button');
  };

  return (
    <section id="gallery" className="py-20 px-4 bg-background overflow-x-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-left mb-16">
          <div className="flex items-center mb-6">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[hsl(var(--asphalt-grey))] mr-6">
              OUR WORK GALLERY
            </h2>
            <div className="flex-1 h-px bg-[hsl(var(--asphalt-grey))]"></div>
          </div>
          <p className="text-xl text-[hsl(var(--asphalt-grey))] max-w-3xl">
            Take a look at some of our recent joinery and building projects across Glasgow and Ayrshire
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => openLightbox(index)}
            >
              <div className="relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="https://www.facebook.com/people/RB-Joinery/61577983282534/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleFacebookClick}
            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <Facebook className="w-6 h-6" />
            View more work on Facebook
          </a>
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-10"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-10"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div className="max-w-4xl max-h-full">
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;