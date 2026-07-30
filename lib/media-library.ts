export type ManagedMediaAsset = {
  id: string;
  title: string;
  description: string;
  src: string;
  kind: "image" | "video";
  poster?: string;
  duration?: string;
};

export const studioImages: ManagedMediaAsset[] = [
  {
    id: "studio-wide-shot",
    title: "Visual idea of set up",
    description:
      "A polished two-chair studio concept showing camera framing, microphone placement, ambient lighting, and an elegant podcast discussion layout.",
    src: "/images/studio/studio-setup-visual-idea.jpg",
    kind: "image",
  },
  {
    id: "podcast-chairs-table",
    title: "Live panel studio setup",
    description:
      "A real three-person podcast and talk-show arrangement showing chair placement, microphones, lighting, and multi-camera coverage in action.",
    src: "/images/studio/studio-live-panel-setup.jpg",
    kind: "image",
  },
];

export const equipmentImages: ManagedMediaAsset[] = [
  {
    id: "sony-fx3-camera",
    title: "Sony cinematic camera setup",
    description:
      "A rigged Sony FX3 production build with rod support, matte box, top handle, and monitoring accessories for premium capture workflows.",
    src: "/images/equipment/sony-cinematic-camera-rig.jpg",
    kind: "image",
  },
  {
    id: "sony-24-70-lens",
    title: "G Master cinematic lens",
    description:
      "A clean product image of a Sony G Master zoom lens representing the premium optics included in the production package.",
    src: "/images/equipment/sony-g-master-lens-product.jpg",
    kind: "image",
  },
  {
    id: "production-monitor",
    title: "External production monitors",
    description:
      "A field monitor setup used for framing, focus confirmation, and on-set visual reference during production.",
    src: "/images/equipment/viltrox-monitor-field-view.jpg",
    kind: "image",
  },
  {
    id: "aputure-600d-light",
    title: "Aputure 600D professional lights",
    description:
      "A clean product image of the Aputure 600D lighting kit, representing the primary professional lighting package used for the production.",
    src: "/images/equipment/aputure-600d-light-kit.jpg",
    kind: "image",
  },
  {
    id: "camera-support",
    title: "Professional tripods and support systems",
    description:
      "A professional tripod and fluid-head support kit used for stable studio framing, repeatable camera positioning, and controlled production coverage.",
    src: "/images/equipment/professional-tripod-support-kit.jpg",
    kind: "image",
  },
  {
    id: "accessory-kit",
    title: "Camera accessories kit",
    description:
      "A flat-lay of essential production accessories including batteries, media, microphones, lenses, headphones, and support tools used around the camera package.",
    src: "/images/equipment/camera-accessories-flatlay.jpg",
    kind: "image",
  },
  {
    id: "sony-fx3-close-detail",
    title: "Sony FX3 close detail",
    description:
      "Close-up equipment photography highlighting the Sony FX3 Cinema Line body branding and control layout.",
    src: "/images/equipment/sony-fx3-close-detail.jpg",
    kind: "image",
  },
  {
    id: "sony-fx3-top-view",
    title: "Sony FX3 top view",
    description:
      "A minimal overhead product view showing the compact cinema body and mounted lens configuration.",
    src: "/images/equipment/sony-fx3-top-view.jpg",
    kind: "image",
  },
  {
    id: "sony-fx3-gimbal-setup",
    title: "Sony FX3 gimbal setup",
    description:
      "A stabilised Sony FX3 build mounted on a motorised support rig for controlled movement shots and premium motion work.",
    src: "/images/equipment/sony-fx3-gimbal-setup.jpg",
    kind: "image",
  },
  {
    id: "sony-g-master-lens-closeup",
    title: "G Master lens close-up",
    description:
      "A close-detail image of the Sony G Master lens body, reinforcing the premium glass used for the camera package.",
    src: "/images/equipment/sony-g-master-lens-closeup.jpg",
    kind: "image",
  },
  {
    id: "production-monitor-product-view",
    title: "Monitor product view",
    description:
      "A clean product-style image of the field monitor used for external viewing and production supervision.",
    src: "/images/equipment/viltrox-monitor-product-view.jpg",
    kind: "image",
  },
  {
    id: "sony-camera-accessories-kit",
    title: "Sony camera accessories setup",
    description:
      "A curated flat-lay of Sony camera accessories, media, lenses, audio tools, and support hardware used to complete the production kit.",
    src: "/images/equipment/sony-camera-accessories-kit.jpg",
    kind: "image",
  },
  {
    id: "option-2-canon-r6-handheld",
    title: "Option 2 Canon R6 handheld view",
    description:
      "A handheld product view of the Canon R6 paired with a 24-70mm Sigma lens for the Option 2 video service configuration.",
    src: "/images/equipment/option-2-canon-r6-handheld.jpg",
    kind: "image",
  },
  {
    id: "option-2-canon-r6-tabletop",
    title: "Option 2 Canon R6 alternate angle",
    description:
      "A second product angle showing the Canon R6 with a 24-70mm Sigma lens as part of the Option 2 video service setup.",
    src: "/images/equipment/option-2-canon-r6-tabletop.jpg",
    kind: "image",
  },
];

export const behindTheScenesImages: ManagedMediaAsset[] = [
  {
    id: "studio-bts",
    title: "Interview shooting setup",
    description:
      "A live interview production setup showing camera framing, monitor placement, and lighting support during an active shoot.",
    src: "/images/behind-the-scenes/interview-shooting-setup.jpg",
    kind: "image",
  },
  {
    id: "post-production-workstation",
    title: "Color correction and finishing suite",
    description:
      "A real post-production workstation showing multi-monitor review, colour correction scopes, timeline finishing, and technical quality control.",
    src: "/images/behind-the-scenes/post-production-color-correction.jpg",
    kind: "image",
  },
  {
    id: "camera-handling-gimbal",
    title: "Camera handling on set",
    description:
      "Crew members handling a gimbal-mounted cinema camera during active production and setup review.",
    src: "/images/behind-the-scenes/camera-handling-gimbal.jpg",
    kind: "image",
  },
  {
    id: "post-production-editing-suite",
    title: "Post-production editing suite",
    description:
      "A dual-monitor editing setup showing sequence assembly, editorial refinement, and final programme finishing.",
    src: "/images/behind-the-scenes/post-production-editing-suite.jpg",
    kind: "image",
  },
  {
    id: "post-production-synchronization-desk",
    title: "Sound synchronization and review desk",
    description:
      "A live post-production desk used for media review, sync management, workflow coordination, and asset preparation.",
    src: "/images/behind-the-scenes/post-production-synchronization-desk.jpg",
    kind: "image",
  },
  {
    id: "directing-and-monitoring",
    title: "Directing and monitoring",
    description:
      "An on-set directing monitor used for live shot review, visual supervision, and production decision-making during recording.",
    src: "/images/behind-the-scenes/directing-and-monitoring.jpg",
    kind: "image",
  },
  {
    id: "cooking-show-vision-studio-wide",
    title: "Cooking show vision studio wide",
    description:
      "A wide cooking-show set reference showing the overall kitchen environment, lighting layout, and camera staging for a food-focused production concept.",
    src: "/images/behind-the-scenes/cooking-show-vision-studio-wide.jpg",
    kind: "image",
  },
  {
    id: "cooking-show-vision-close-monitor",
    title: "Cooking show vision close monitor",
    description:
      "A close cooking-show production reference highlighting tabletop framing, food presentation, monitor placement, and controlled lighting detail.",
    src: "/images/behind-the-scenes/cooking-show-vision-close-monitor.jpg",
    kind: "image",
  },
  {
    id: "cooking-show-vision-kitchen-set",
    title: "Cooking show vision kitchen set",
    description:
      "A kitchen-set production reference showing multi-camera placement, practical set dressing, and overhead lighting direction for a cooking format.",
    src: "/images/behind-the-scenes/cooking-show-vision-kitchen-set.jpg",
    kind: "image",
  },
];

export const productionVideos: ManagedMediaAsset[] = [
  {
    id: "studio-option-1-video",
    title: "Studio option 1 walkthrough",
    description:
      "A studio walkthrough showing the first room option, seating arrangement, camera sightlines, and the overall atmosphere for the policy talk-show recording.",
    src: "/videos/studio-option-1.mp4",
    poster: "/images/studio/studio-setup-visual-idea.jpg",
    kind: "video",
  },
  {
    id: "studio-option-2-video",
    title: "Studio option 2 walkthrough",
    description:
      "A second studio walkthrough presenting an alternate set option with different spacing, composition, and visual balance for the discussion format.",
    src: "/videos/studio-option-2.mp4",
    poster: "/images/studio/studio-live-panel-setup.jpg",
    kind: "video",
  },
  {
    id: "editing-process-video",
    title: "Editing process videos",
    description:
      "Local placeholder for edit-suite previews, workflow clips, and finishing-stage video samples.",
    src: "/videos/editing-process-placeholder.svg",
    poster: "/videos/editing-process-placeholder.svg",
    kind: "video",
    duration: "00:58",
  },
];

export const companyImages: ManagedMediaAsset[] = [
  {
    id: "hero-production-setup",
    title: "Live panel studio setup",
    description:
      "Three-camera talk-show setup with controlled lighting, guest seating, and live microphone placement.",
    src: "/images/studio/studio-live-panel-setup.jpg",
    kind: "image",
  },
  {
    id: "studio-team",
    title: "Crew on board and shooting",
    description:
      "A real production scene showing Lifestyle Studios crew operating cameras and lighting during a live studio shoot.",
    src: "/images/company/crew-on-board-studio-shoot.jpg",
    kind: "image",
  },
  {
    id: "crew-placeholder",
    title: "Directing on location",
    description:
      "A field production moment capturing directing, camera operation, crew coordination, and sound support during filming.",
    src: "/images/behind-the-scenes/directing-on-location.jpg",
    kind: "image",
  },
];

const allMediaAssets = [
  ...studioImages,
  ...equipmentImages,
  ...behindTheScenesImages,
  ...productionVideos,
  ...companyImages,
];

export const mediaAssetMap = Object.fromEntries(
  allMediaAssets.map((asset) => [asset.id, asset]),
) as Record<string, ManagedMediaAsset>;

export function getMediaAsset(id: string) {
  return mediaAssetMap[id];
}

export const galleryMediaItems: ManagedMediaAsset[] = [
  getMediaAsset("sony-fx3-camera"),
  getMediaAsset("sony-fx3-close-detail"),
  getMediaAsset("sony-fx3-top-view"),
  getMediaAsset("sony-fx3-gimbal-setup"),
  getMediaAsset("sony-24-70-lens"),
  getMediaAsset("sony-g-master-lens-closeup"),
  getMediaAsset("production-monitor"),
  getMediaAsset("production-monitor-product-view"),
  getMediaAsset("aputure-600d-light"),
  getMediaAsset("camera-support"),
  getMediaAsset("accessory-kit"),
  getMediaAsset("sony-camera-accessories-kit"),
  getMediaAsset("camera-handling-gimbal"),
  getMediaAsset("option-2-canon-r6-handheld"),
  getMediaAsset("option-2-canon-r6-tabletop"),
  getMediaAsset("studio-team"),
  getMediaAsset("studio-wide-shot"),
  getMediaAsset("podcast-chairs-table"),
  getMediaAsset("studio-option-1-video"),
  getMediaAsset("studio-option-2-video"),
  getMediaAsset("studio-bts"),
  getMediaAsset("crew-placeholder"),
  getMediaAsset("directing-and-monitoring"),
  getMediaAsset("cooking-show-vision-studio-wide"),
  getMediaAsset("cooking-show-vision-close-monitor"),
  getMediaAsset("cooking-show-vision-kitchen-set"),
  getMediaAsset("post-production-workstation"),
  getMediaAsset("post-production-editing-suite"),
  getMediaAsset("post-production-synchronization-desk"),
].filter(Boolean) as ManagedMediaAsset[];
