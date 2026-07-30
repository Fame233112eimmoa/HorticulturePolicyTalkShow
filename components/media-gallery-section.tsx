import { MediaGallery } from "@/components/media-gallery";
import { SectionHeading } from "@/components/section-heading";
import { galleryMediaItems } from "@/lib/media-library";

export function MediaGallerySection() {
  return (
    <section id="gallery" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Image And Video Gallery"
          title="Production references, equipment, studio setups, and behind-the-scenes coverage."
          description="Browse studio layouts, cameras, lenses, lighting, crew activity, post-production workstations, and reference setups that reflect the production standard."
        />

        <div className="mt-12">
          <MediaGallery items={galleryMediaItems} />
        </div>
      </div>
    </section>
  );
}
