import type { LucideIcon } from "lucide-react";
import {
  Aperture,
  AudioLines,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CalendarRange,
  Camera,
  Clapperboard,
  Download,
  FileImage,
  Film,
  HardDrive,
  Instagram,
  Layers3,
  Lightbulb,
  Mail,
  MapPin,
  Mic2,
  MonitorPlay,
  Palette,
  PackageCheck,
  Phone,
  ScanEye,
  Scissors,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
  Youtube,
} from "lucide-react";

type IconItem = {
  title: string;
  value: string;
  icon: LucideIcon;
};

type ScopeItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type CrewItem = {
  role: string;
  detail: string;
};

type BudgetItem = {
  item: string;
  description: string;
  amount: number;
};

export type BudgetPackage = {
  id: string;
  format: "Talk Show" | "Cooking Show";
  optionLabel: string;
  title: string;
  shortSummary: string;
  total: number;
  highlights: string[];
  lineItems: BudgetItem[];
};

type GearItem = {
  name: string;
  description: string;
  quantity: string;
  mediaId: string;
};

type EquipmentScheduleItem = {
  name: string;
  detail?: string;
};

type EquipmentScheduleGroup = {
  title: string;
  description: string;
  items: EquipmentScheduleItem[];
};

type ProcessStep = {
  title: string;
  description: string;
};

type ContactInfoItem = {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
};

type ActionItem = {
  label: string;
  description: string;
  icon: LucideIcon;
};

export const proposalName = "Horticulture Policy Talk Show";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Scope", href: "/scope" },
  { label: "Studio", href: "/studio" },
  { label: "Equipment", href: "/equipment" },
  { label: "Crew", href: "/crew" },
  { label: "Post-Production", href: "/post-production" },
  { label: "Budget", href: "/budget" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const overviewCards: IconItem[] = [
  {
    title: "Project",
    value: "Horticulture Policy Talk Show",
    icon: Clapperboard,
  },
  {
    title: "Production format",
    value: "Studio panel discussion",
    icon: MonitorPlay,
  },
  {
    title: "Episodes",
    value: "12 broadcast-ready episodes",
    icon: Film,
  },
  {
    title: "Production days",
    value: "6 efficiently scheduled shoot days",
    icon: CalendarRange,
  },
  {
    title: "On-screen format",
    value: "1 host and 2 guests per episode",
    icon: Users,
  },
  {
    title: "Production type",
    value: "Full-service multi-camera production",
    icon: Camera,
  },
];

export const homeHighlights = [
  "Prepared by Lifestyle Studios",
  "12 episodes",
  "6 production days",
  "4 client-selectable production packages",
];

export const aboutCopy = `Lifestyle Studios is a professional cinematography and media production company specializing in high quality video production, podcast production, photography, and post production services. We combine creative storytelling with industry standard equipment and experienced professionals to deliver visually compelling, broadcast quality content.

Our commitment to quality, professionalism, and timely delivery makes us a trusted production partner for organizations seeking impactful and engaging visual communication.`;

export const strengths: ScopeItem[] = [
  {
    title: "Professional cinematography",
    description: "Cinematic framing, clean lighting, and polished studio image quality.",
    icon: ScanEye,
  },
  {
    title: "Multi-camera production",
    description: "Three-camera coverage for fluid host, guest, and wide master shots.",
    icon: Camera,
  },
  {
    title: "Creative direction",
    description: "Structured visual language that keeps the programme premium and clear.",
    icon: Sparkles,
  },
  {
    title: "Studio production",
    description: "Controlled environment for consistent sound, lighting, and visual branding.",
    icon: Lightbulb,
  },
  {
    title: "Post-production",
    description: "Refined edits, balanced audio, branded graphics, and final masters.",
    icon: Aperture,
  },
  {
    title: "Reliable project delivery",
    description: "Disciplined scheduling, asset management, and deadline-focused execution.",
    icon: ShieldCheck,
  },
];

export const whyLifestyleItems: ScopeItem[] = [
  {
    title: "Professional equipment",
    description: "Reliable cameras, lenses, studio audio, and controlled lighting support a premium production standard.",
    icon: Camera,
  },
  {
    title: "Experienced production team",
    description: "A specialist crew structure keeps filming, direction, and finishing coordinated from start to finish.",
    icon: Users,
  },
  {
    title: "Consistent visual quality",
    description: "Controlled studio capture and refined finishing deliver a clean and repeatable look across all episodes.",
    icon: Aperture,
  },
  {
    title: "Reliable delivery",
    description: "A practical workflow and disciplined handover process keep approvals and final submission on schedule.",
    icon: ShieldCheck,
  },
  {
    title: "Complete production management",
    description: "Planning, recording, oversight, and asset handling are managed under one organised production partner.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Clear communication",
    description: "Structured updates, review stages, and visible scope boundaries keep the client informed throughout.",
    icon: MonitorPlay,
  },
  {
    title: "Professional post-production",
    description: "Editing, graphics, colour work, sound balancing, and mastering are handled as one coherent finishing stage.",
    icon: Scissors,
  },
];

export const scopePillars: ScopeItem[] = [
  {
    title: "Pre-production planning",
    description: "Show rundown alignment, call sheets, setup planning, and production coordination ahead of each studio block.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Studio production",
    description: "Directed multi-camera capture with managed audio, lighting, shot continuity, and guest coordination on set.",
    icon: Camera,
  },
  {
    title: "Post-production finishing",
    description: "Episode edits, intro and outro placement, lower thirds, colour balancing, sound cleanup, and final mastering.",
    icon: Layers3,
  },
  {
    title: "Delivery management",
    description: "Organised review files, final exports, social cutdowns, and archived project backups for handover.",
    icon: PackageCheck,
  },
];

export const detailedProductionScope: ScopeItem[] = [
  {
    title: "Pre-production planning",
    description: "Production meetings, show rundown alignment, and technical preparation before recording.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Production scheduling",
    description: "A clear calendar for 12 episodes delivered across 6 organised production days.",
    icon: CalendarRange,
  },
  {
    title: "Studio preparation",
    description: "Set readiness, seating arrangement, branding placement, and operational checks.",
    icon: Building2,
  },
  {
    title: "Camera setup",
    description: "Three-camera placement, lens matching, framing tests, and monitoring setup.",
    icon: Camera,
  },
  {
    title: "Professional lighting setup",
    description: "Balanced key, fill, and background lighting for a clean and premium studio image.",
    icon: Lightbulb,
  },
  {
    title: "Audio setup",
    description: "Microphone placement, routing, level checks, and backup audio preparation.",
    icon: Mic2,
  },
  {
    title: "Multi-camera filming",
    description: "Simultaneous host, guest, and wide-angle coverage for smooth post-production editing.",
    icon: Camera,
  },
  {
    title: "Directing",
    description: "Live shot coordination, pacing control, and on-set guidance during every session.",
    icon: Clapperboard,
  },
  {
    title: "Photography",
    description: "Selected promotional and behind-the-scenes still coverage during production days.",
    icon: FileImage,
  },
  {
    title: "Makeup and styling",
    description: "On-camera grooming and styling support to keep hosts and guests camera-ready throughout recording.",
    icon: Sparkles,
  },
  {
    title: "Media management",
    description: "Card rotation, file backup, and organised handling of production assets after recording.",
    icon: HardDrive,
  },
  {
    title: "Post-production editing",
    description: "Episode assembly, visual cleanup, graphics placement, and sequence refinement.",
    icon: Scissors,
  },
  {
    title: "Colour grading",
    description: "Consistent tone, exposure balancing, and refined visual finishing across all episodes.",
    icon: Palette,
  },
  {
    title: "Audio enhancement",
    description: "Dialogue cleanup, level balancing, and final mix polish for clear listening.",
    icon: AudioLines,
  },
  {
    title: "Final mastering",
    description: "Approved master exports prepared in delivery-ready formats for release.",
    icon: BadgeCheck,
  },
  {
    title: "Submission of all 12 episodes",
    description: "Final handover of every completed episode after review and sign-off.",
    icon: Send,
  },
];

export const equipmentPackages: ScopeItem[] = [
  {
    title: "Camera package",
    description: "Three Sony FX3 cinema cameras paired with 24-70mm, 18-35mm, and 85mm lens coverage for host, guest, and master framing.",
    icon: Camera,
  },
  {
    title: "Lighting package",
    description: "Three Aputure 600D fixtures provide the controlled studio lighting needed for a clean, premium panel discussion setup.",
    icon: Lightbulb,
  },
  {
    title: "Audio package",
    description: "Broadcast-ready microphones, field mixer, monitoring headphones, and redundant audio capture for every speaker.",
    icon: Mic2,
  },
  {
    title: "Production support",
    description: "Director monitoring, comms workflow, data management, and onset control tools for smooth daily execution.",
    icon: MonitorPlay,
  },
];

export const studioBundleFeatures = [
  "Fully equipped podcast studio",
  "3 RØDE podcast microphones",
  "RØDECaster audio and video switcher",
  "3 professional headphones",
  "3 podcast chairs",
  "Studio utilities",
  "Technical support",
];

export const gearRentals: GearItem[] = [
  {
    name: "Sony FX3 cinema cameras",
    description: "Compact full-frame cinema bodies chosen for reliable multi-camera studio capture.",
    quantity: "3 units",
    mediaId: "sony-fx3-camera",
  },
  {
    name: "Sony 24-70mm, 18-35mm, and 85mm professional lenses",
    description: "A flexible lens package including premium G Master optics for wide, standard, and portrait framing requirements across the production.",
    quantity: "3 lens options",
    mediaId: "sony-24-70-lens",
  },
  {
    name: "External production monitors",
    description: "Dedicated monitoring for framing, focus checks, and production supervision.",
    quantity: "2 units",
    mediaId: "production-monitor",
  },
  {
    name: "Aputure 600D professional lights",
    description: "High-output fixtures for controlled and consistent studio illumination.",
    quantity: "3 units",
    mediaId: "aputure-600d-light",
  },
  {
    name: "Canon cinema cameras for standard package options",
    description: "Canon R6 Mark II, Canon R8, or Canon R7 bodies used for the standard talk-show and cooking-show routes depending on availability.",
    quantity: "2 units",
    mediaId: "option-2-canon-r6-handheld",
  },
  {
    name: "Canon 24-70mm pair and 50mm prime lens kit",
    description: "The standard package lens set used for controlled medium coverage, close portrait framing, and general studio or kitchen production work.",
    quantity: "3 lens options",
    mediaId: "option-2-canon-r6-tabletop",
  },
  {
    name: "Professional tripods and camera support systems",
    description: "Stable support hardware for locked-off studio coverage, repeatable framing, and reliable positioning.",
    quantity: "Bundle",
    mediaId: "camera-support",
  },
  {
    name: "Camera accessories and production grip equipment",
    description: "Essential accessories, rigging hardware, and grip support used to keep camera and lighting setups production-ready.",
    quantity: "Bundle",
    mediaId: "accessory-kit",
  },
];

export const equipmentScheduleGroups: EquipmentScheduleGroup[] = [
  {
    title: "Talk Show Option 1 Equipment",
    description:
      "Full-service talk-show route built around the Studio 04 podcast facility and the premium Sony cinema package.",
    items: [
      { name: "Fully equipped podcast studio" },
      { name: "3 x RODE podcast microphones" },
      { name: "RODECaster audio and video switcher" },
      { name: "3 x professional headphones" },
      { name: "3 x podcast chairs" },
      { name: "Studio utilities and technical support" },
      { name: "3 x Sony FX3 cinema cameras" },
      { name: "Sony 24-70mm, 18-35mm, and 85mm professional lens set" },
      { name: "2 x external production monitors" },
      { name: "3 x Aputure 600D professional lights" },
      { name: "Light soft box and diffusion support" },
      { name: "Professional tripods and camera support systems" },
      { name: "Camera batteries and memory cards" },
      { name: "Camera accessories and production grip equipment" },
    ],
  },
  {
    title: "Talk Show Option 2 Equipment",
    description:
      "Standard talk-show route using the same Studio 04 podcast suite with a more cost-efficient Canon camera package.",
    items: [
      { name: "Studio 04 podcast production suite" },
      { name: "3 x RODE podcast microphones" },
      { name: "RODECaster" },
      { name: "3 x headphones" },
      { name: "Podcast chairs" },
      { name: "Studio support" },
      {
        name: "2 x Canon cinema cameras",
        detail: "Canon R6 Mark II, Canon R8, or Canon R7 depending on availability.",
      },
      { name: "Canon professional lens kit" },
      { name: "24-70mm x 2" },
      { name: "50mm prime lens" },
      { name: "1 x external monitor" },
      { name: "2 x Amaran 300D/200D LED lights" },
      { name: "Light soft box and diffusion support" },
      { name: "Professional tripods" },
      { name: "Batteries and memory cards" },
      { name: "Basic grip equipment" },
    ],
  },
  {
    title: "Cooking Show Option 1 Equipment",
    description:
      "Premium cooking-show route built around the Sony cinema package, external monitoring, and stronger lighting coverage for kitchen production.",
    items: [
      { name: "2 x Sony FX3 cinema cameras" },
      { name: "Sony 24-70mm and 85mm professional lenses" },
      { name: "1 x external production monitor" },
      { name: "3 x Aputure 600D professional lights" },
      { name: "Sound gears" },
      { name: "Light soft box and diffusion support" },
      { name: "Professional tripods and camera support systems" },
      { name: "Camera batteries and memory cards" },
      { name: "Camera accessories and production grip equipment" },
    ],
  },
  {
    title: "Cooking Show Option 2 Equipment",
    description:
      "Standard cooking-show route using the Canon production package with lighter support gear and efficient kitchen coverage.",
    items: [
      {
        name: "2 x Canon cinema cameras",
        detail: "Canon R6 Mark II, Canon R8, or Canon R7 depending on availability.",
      },
      { name: "Canon professional lens kit" },
      { name: "24-70mm x 2" },
      { name: "50mm prime lens" },
      { name: "1 x external monitor" },
      { name: "2 x Amaran 300D/200D LED lights" },
      { name: "Sound gears" },
      { name: "Light soft box and diffusion support" },
      { name: "Professional tripods" },
      { name: "Batteries and memory cards" },
      { name: "Basic grip equipment" },
    ],
  },
];

export const crewMembers: CrewItem[] = [
  {
    role: "Director",
    detail: "Leads the programme visually and technically, guiding coverage, pacing, and overall execution during recording.",
  },
  {
    role: "Three professional videographers",
    detail: "Operate the three-camera setup, maintain framing consistency, and capture host, guest, and master-angle coverage.",
  },
  {
    role: "Photographer",
    detail: "Captures still photography and behind-the-scenes imagery for publicity, publishing, and project documentation.",
  },
  {
    role: "Makeup artist",
    detail: "Provides on-camera grooming and styling support to keep hosts and guests camera-ready during recording.",
  },
  {
    role: "Production support personnel",
    detail: "Assist with set readiness, guest coordination, media handling, logistics, and the smooth flow of each production day.",
  },
  {
    role: "Post-production editor",
    detail: "Handles episode assembly, synchronisation, finishing, graphics integration, mastering, and final delivery preparation.",
  },
];

export const serviceFlow: ScopeItem[] = [
  {
    title: "Plan",
    description: "Confirm episode structure, visual identity, recording schedule, and daily run order.",
    icon: CalendarRange,
  },
  {
    title: "Capture",
    description: "Record two episodes per production day with consistent studio direction and managed coverage.",
    icon: Camera,
  },
  {
    title: "Refine",
    description: "Edit, colour-balance, clean audio, add branded graphics, and prepare review versions.",
    icon: Aperture,
  },
  {
    title: "Deliver",
    description: "Supply approved masters, teaser edits, and archived files for future re-use.",
    icon: BadgeCheck,
  },
];

export const postProductionItems: ScopeItem[] = [
  {
    title: "Editing of all 12 episodes",
    description: "Every recorded episode is cut into a polished final programme ready for approval and release.",
    icon: Scissors,
  },
  {
    title: "Multi-camera synchronisation",
    description: "Camera angles are aligned accurately to support smooth switching and consistent pacing.",
    icon: Layers3,
  },
  {
    title: "Audio enhancement and balancing",
    description: "Dialogue is cleaned, balanced, and refined for a clear and professional listening experience.",
    icon: AudioLines,
  },
  {
    title: "Colour correction",
    description: "Exposure and tonal consistency are corrected to maintain a clean studio look across every episode.",
    icon: Aperture,
  },
  {
    title: "Colour grading",
    description: "A refined final grade is applied to create a cohesive premium visual finish.",
    icon: Palette,
  },
  {
    title: "Intro and outro integration",
    description: "Programme opens and closing sequences are inserted and balanced within each final cut.",
    icon: Film,
  },
  {
    title: "Lower-third titles",
    description: "On-screen name straps and identification graphics are added for host and guest clarity.",
    icon: MonitorPlay,
  },
  {
    title: "Motion graphics",
    description: "Supporting branded motion elements are added for programme identity, transitions, and polished episode finishing.",
    icon: Sparkles,
  },
  {
    title: "Final mastering",
    description: "Approved export masters are generated in final delivery-ready formats.",
    icon: BadgeCheck,
  },
  {
    title: "Quality control",
    description: "Every finished episode is checked for sync, graphic accuracy, audio consistency, and export reliability.",
    icon: ShieldCheck,
  },
  {
    title: "Export and submission of all completed episodes",
    description: "All approved episodes are exported, organised, and prepared for digital submission.",
    icon: Send,
  },
];

export const productionProcess: ProcessStep[] = [
  {
    title: "Planning",
    description: "Define production goals, schedule, rundown, and technical requirements before recording starts.",
  },
  {
    title: "Studio Preparation",
    description: "Prepare the room, seating, microphones, cameras, and support systems for the session.",
  },
  {
    title: "Production",
    description: "Capture the programme with directed multi-camera coverage, audio control, and studio coordination.",
  },
  {
    title: "Post-Production",
    description: "Synchronise, edit, balance, grade, add graphics, and master every episode.",
  },
  {
    title: "Client Review",
    description: "Share completed cuts for review, notes, and final approval across the agreed revision process.",
  },
  {
    title: "Final Submission",
    description: "Export and deliver the approved high-resolution episodes through organised digital handover.",
  },
];

export const deliverables = [
  "12 fully edited episodes",
  "Professionally mixed audio",
  "Colour-graded visuals",
  "Branded intros and outros",
  "Lower-third graphics",
  "Final high-resolution exports",
  "Digital delivery of all approved episodes",
];

export const budgetPackages: BudgetPackage[] = [
  {
    id: "talk-show-option-1",
    format: "Talk Show",
    optionLabel: "Option 1",
    title: "Premium multi-camera talk show package",
    shortSummary:
      "Full-service studio talk-show production with Studio 04, premium cinema cameras, dedicated lighting, photography, directing, and full finishing across 12 episodes.",
    total: 85000,
    highlights: [
      "Studio 04 podcast suite with microphones, RODECaster, seating, utilities, and technical support",
      "Premium multi-camera coverage with Sony FX3 cinema cameras, professional lenses, monitors, lighting, and grip support",
      "Three videographers, director, photography, makeup, and polished post-production for all 12 episodes",
    ],
    lineItems: [
      {
        item: "Studio Space and Podcast Production Gears",
        description:
          "Studio 04 podcast space, RODE microphones, RODECaster, professional headphones, podcast chairs, studio utilities, and technical support.",
        amount: 40000,
      },
      {
        item: "Lighting",
        description:
          "3 Aputure 600D professional lights for controlled studio illumination during all production days.",
        amount: 3000,
      },
      {
        item: "Makeup and Styling",
        description:
          "Professional makeup artist coverage, on-set touch-ups, and basic hair styling support.",
        amount: 5000,
      },
      {
        item: "Photography",
        description:
          "Behind-the-scenes photography, production stills, and host and guest portraits.",
        amount: 3000,
      },
      {
        item: "Video Production Crew",
        description:
          "Three professional videographers, multi-camera coverage, production support, and data management with media backup.",
        amount: 15000,
      },
      {
        item: "Director",
        description:
          "Creative direction, production supervision, floor coordination, and quality control.",
        amount: 8000,
      },
      {
        item: "Post-Production (12 Episodes)",
        description:
          "Editing of all 12 episodes, multi-camera synchronisation, audio enhancement, colour correction and grading, graphics, mastering, export, and submission.",
        amount: 8000,
      },
      {
        item: "Miscellaneous Expenses",
        description:
          "Crew logistics, transportation, production consumables, backup storage, and contingency expenses.",
        amount: 3000,
      },
    ],
  },
  {
    id: "talk-show-option-2",
    format: "Talk Show",
    optionLabel: "Option 2",
    title: "Standard talk show package",
    shortSummary:
      "A leaner studio talk-show package that preserves a professional panel-discussion look while reducing crew size and equipment cost.",
    total: 60000,
    highlights: [
      "Studio 04 podcast production suite with microphones, RODECaster, seating, and studio support",
      "2 Canon cinema cameras, core lens coverage, one monitor, Amaran lighting, tripods, media, and basic grip support",
      "Two videographers, floor supervision, makeup, still photography, and post-production delivery for 12 episodes",
    ],
    lineItems: [
      {
        item: "Studio and Podcast Production Facility",
        description:
          "Studio 04 podcast production suite with 3 RODE podcast microphones, RODECaster, headphones, chairs, and studio support.",
        amount: 18000,
      },
      {
        item: "Production Gear",
        description:
          "2 Canon cinema cameras, Canon professional lens kit, one external monitor, 2 Amaran LED lights, tripods, batteries, memory cards, and basic grip equipment.",
        amount: 14000,
      },
      {
        item: "Makeup and Styling",
        description: "Makeup artist coverage with basic hair styling support.",
        amount: 4000,
      },
      {
        item: "Photography",
        description:
          "Behind-the-scenes photography and selected production stills.",
        amount: 2000,
      },
      {
        item: "Video Production Crew",
        description: "Two professional videographers with media management.",
        amount: 8000,
      },
      {
        item: "Director / Producer",
        description:
          "Production direction, quality supervision, and floor coordination.",
        amount: 5000,
      },
      {
        item: "Post-Production",
        description:
          "Editing of all 12 episodes, colour correction, audio enhancement, intro and outro integration, basic motion graphics, and final delivery.",
        amount: 6000,
      },
      {
        item: "Miscellaneous Production Expenses",
        description:
          "Transportation, crew logistics, and production consumables.",
        amount: 3000,
      },
    ],
  },
  {
    id: "cook-show-option-1",
    format: "Cooking Show",
    optionLabel: "Option 1",
    title: "Cinema cooking show package",
    shortSummary:
      "A cinematic cooking-show production route built around Sony FX3 coverage, stronger lighting control, directed multi-camera operation, and polished episode finishing.",
    total: 55700,
    highlights: [
      "2 Sony FX3 cinema cameras with 24-70mm and 85mm lens coverage for controlled kitchen framing",
      "3 Aputure 600D lights, sound gears, external monitoring, tripods, support systems, accessories, and grip equipment",
      "Two videographers, director, makeup, photography, and final finishing for all 12 episodes",
    ],
    lineItems: [
      {
        item: "Production Gear",
        description:
          "2 Sony FX3 cinema cameras, Sony professional lenses, one external production monitor, tripods, support systems, batteries, memory cards, accessories, and grip equipment.",
        amount: 15000,
      },
      {
        item: "Lighting",
        description: "3 Aputure 600D professional lights for the cooking-show setup.",
        amount: 4200,
      },
      {
        item: "Sound Gears",
        description:
          "Dedicated audio support gear for clean cooking-show dialogue capture and monitoring.",
        amount: 3000,
      },
      {
        item: "Makeup and Styling",
        description:
          "Professional makeup artist coverage, on-set touch-ups, and basic hair styling.",
        amount: 5000,
      },
      {
        item: "Photography",
        description:
          "Behind-the-scenes photography, production stills, and host and guest portraits.",
        amount: 2500,
      },
      {
        item: "Video Production Crew",
        description:
          "Two professional videographers, multi-camera coverage, production support, and data management with media backup.",
        amount: 12000,
      },
      {
        item: "Director",
        description:
          "Creative direction, production supervision, floor coordination, and quality control.",
        amount: 6000,
      },
      {
        item: "Post-Production",
        description:
          "Editing of all 12 episodes, synchronisation, audio enhancement, colour correction and grading, graphics, mastering, export, and submission.",
        amount: 5000,
      },
      {
        item: "Miscellaneous Production Expenses",
        description:
          "Crew logistics, transportation, production consumables, backup storage, and contingency expenses.",
        amount: 3000,
      },
    ],
  },
  {
    id: "cook-show-option-2",
    format: "Cooking Show",
    optionLabel: "Option 2",
    title: "Standard cooking show package",
    shortSummary:
      "A cost-conscious cooking-show package using Canon cinema cameras, practical lighting, a leaner crew structure, and streamlined post-production.",
    total: 45000,
    highlights: [
      "2 Canon cinema cameras with 24-70mm pair, 50mm prime, one monitor, and core support gear",
      "Amaran LED lighting, sound gears, tripods, batteries, memory cards, and basic grip support for kitchen coverage",
      "Two videographers, director support, selected stills, makeup, and final episode delivery",
    ],
    lineItems: [
      {
        item: "Production Gear",
        description:
          "2 Canon cinema cameras, Canon professional lens kit, one external monitor, 2 Amaran LED lights, tripods, batteries, memory cards, and basic grip equipment.",
        amount: 14000,
      },
      {
        item: "Sound Gears",
        description:
          "Dedicated audio support gear for clear kitchen-show dialogue capture and monitoring.",
        amount: 3000,
      },
      {
        item: "Makeup and Styling",
        description: "Makeup artist coverage with basic hair styling support.",
        amount: 4000,
      },
      {
        item: "Photography",
        description:
          "Behind-the-scenes photography and selected production stills.",
        amount: 2000,
      },
      {
        item: "Video Production Crew",
        description: "Two professional videographers with media management.",
        amount: 8000,
      },
      {
        item: "Director / Producer",
        description:
          "Production direction, quality supervision, and floor coordination.",
        amount: 5000,
      },
      {
        item: "Post-Production",
        description:
          "Editing of all 12 episodes, colour correction, audio enhancement, intro and outro integration, basic motion graphics, and final delivery.",
        amount: 6000,
      },
      {
        item: "Miscellaneous Production Expenses",
        description:
          "Transportation, crew logistics, and production consumables.",
        amount: 3000,
      },
    ],
  },
];

export const talkShowBudgetPackages = budgetPackages.filter(
  (item) => item.format === "Talk Show",
);

export const cookingShowBudgetPackages = budgetPackages.filter(
  (item) => item.format === "Cooking Show",
);

export const budgetItems: BudgetItem[] = budgetPackages[0]?.lineItems ?? [];

export const includedServices = [
  "Two talk-show packages and two cooking-show packages presented for client selection",
  "Quoted totals covering gear, crew, direction, finishing, and delivery across 12 episodes",
  "Premium and standard service levels for both studio-panel and cooking-show formats",
  "Production, post-production, and submission scope aligned to 6 planned production days",
];

export const optionalAddOns = [
  "Dedicated still photography coverage during production days",
  "Extended vertical social edits beyond the included teaser set",
  "Teleprompter support or additional branded set design elements",
  "Same-day highlights turnaround for event-style publicity",
];

export const pricingNotes = [
  "Pricing is presented in Ghana cedis (GHS).",
  "Each package assumes completion of 12 professionally produced episodes across 6 production days.",
  "Four quoted production options are available: two for the talk show and two for the cooking show format.",
  "Package totals are presented as client-selectable quotations and will be confirmed with the preferred production route before scheduling.",
];

export const budgetSelectionNote =
  "Four quoted production packages are available for client selection across the talk-show and cooking-show formats.";

export const budgetMinimumTotal = Math.min(
  ...budgetPackages.map((item) => item.total),
);

export const budgetMaximumTotal = Math.max(
  ...budgetPackages.map((item) => item.total),
);

export const budgetRangeLabel = `${formatCurrency(budgetMinimumTotal)} to ${formatCurrency(budgetMaximumTotal)}`;

export const grandTotalNote =
  "Quoted package totals range from GH₵56,000 to GH₵85,000 for 12 episodes completed across 6 production days.";

export const contactDetails: ContactInfoItem[] = [
  {
    label: "Phone number",
    value: "0530448090",
    href: "tel:0530448090",
    icon: Phone,
  },
  {
    label: "Email address",
    value: "lifestylestudios80@gmail.com",
    href: "mailto:lifestylestudios80@gmail.com",
    icon: Mail,
  },
  {
    label: "Business location",
    value: "Accra, Ghana",
    href: "https://maps.google.com/?q=Accra+Ghana",
    icon: MapPin,
  },
];

export const socialLinks: ContactInfoItem[] = [
  {
    label: "Instagram",
    value: "@lifestylestudios",
    href: "https://instagram.com/lifestylestudios",
    icon: Instagram,
  },
  {
    label: "YouTube",
    value: "youtube.com/@lifestylestudios",
    href: "https://youtube.com/@lifestylestudios",
    icon: Youtube,
  },
];

export const approvalActions: ActionItem[] = [
  {
    label: "Approve Proposal",
    description:
      "Draft an approval note for the selected production package so next steps can be confirmed quickly.",
    icon: BadgeCheck,
  },
  {
    label: "Contact Lifestyle Studios",
    description:
      "Scroll directly to the contact form to discuss package revisions, timing, or production details.",
    icon: Mail,
  },
  {
    label: "Download Proposal",
    description:
      "Open a print-ready summary of scope, crew, equipment, deliverables, and package options that can be saved as a PDF.",
    icon: Download,
  },
];

export const paymentTerms = [
  "50% booking deposit to secure pre-production and production dates",
  "30% after completion of principal photography",
  "20% on final delivery of approved masters",
];

export const budgetTotal = budgetPackages[0]?.total ?? 0;

export const perEpisodeCost = Math.round(budgetTotal / 12);

export const perDayCost = Math.round(budgetTotal / 6);

export function getBudgetPackage(id: string) {
  return budgetPackages.find((item) => item.id === id);
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-GH", {
    style: "currency",
    currency: "GHS",
    maximumFractionDigits: 0,
  }).format(value);
}
