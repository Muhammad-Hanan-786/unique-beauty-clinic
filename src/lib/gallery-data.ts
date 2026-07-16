import banner1 from "@/assets/banner_1.jpeg";
import banner2 from "@/assets/banner_2.webp";
import banner3 from "@/assets/banner_3.webp";
import banner4 from "@/assets/banner_4.webp";
import banner5 from "@/assets/banner_5.webp";

export type GalleryCategory =
  | "Bridal"
  | "Hair"
  | "Color"
  | "Skin"
  | "Nails"
  | "Studio";

export type GalleryItem = {
  src: string;
  alt: string;
  category: GalleryCategory;
  tall?: boolean;
};

export const galleryItems: GalleryItem[] = [
  { src: banner5, alt: "Long precision haircut with layers", category: "Hair", tall: true },
  { src: banner3, alt: "Bridal editorial soft glam", category: "Bridal" },
  { src: banner4, alt: "Warm honey balayage", category: "Color" },
  { src: banner1, alt: "Signature facial glow", category: "Skin" },
  { src: banner2, alt: "Studio tools and details", category: "Studio", tall: true },
  { src: banner3, alt: "Nikah bridal look", category: "Bridal" },
  { src: banner4, alt: "Copper caramel color diary", category: "Color" },
  { src: banner5, alt: "Fresh cut and blowout", category: "Hair" },
  { src: banner1, alt: "Hydra facial in progress", category: "Skin", tall: true },
  { src: banner3, alt: "Barat bride portrait", category: "Bridal" },
  { src: banner4, alt: "Foil highlights processing", category: "Color" },
  { src: banner5, alt: "Blowout with texture", category: "Hair" },
  { src: banner2, alt: "Salon corridor and lounge", category: "Studio" },
  { src: banner1, alt: "Gel manicure minimalist chrome", category: "Nails" },
  { src: banner3, alt: "Walima bride jewellery detail", category: "Bridal", tall: true },
  { src: banner5, alt: "Curled long hair styling", category: "Hair" },
  { src: banner1, alt: "Sculpted acrylic nail art", category: "Nails" },
  { src: banner4, alt: "Ombre color transformation", category: "Color" },
  { src: banner2, alt: "Product shelves and mirrors", category: "Studio" },
  { src: banner1, alt: "Hand-painted French tip nails", category: "Nails" },
  { src: banner3, alt: "Engagement bride portrait", category: "Bridal" },
  { src: banner5, alt: "Keratin smoothing result", category: "Hair", tall: true },
  { src: banner1, alt: "Gold facial detail", category: "Skin" },
  { src: banner2, alt: "Styling station under warm light", category: "Studio" },
];

export const galleryCategories: ("All" | GalleryCategory)[] = [
  "All",
  "Bridal",
  "Hair",
  "Color",
  "Skin",
  "Nails",
  "Studio",
];
