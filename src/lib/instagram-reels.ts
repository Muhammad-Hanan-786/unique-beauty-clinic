export type InstagramReel = {
  shortcode: string;
  url: string;
  embedUrl: string;
  caption: string;
};

const shortcodes: { code: string; caption: string }[] = [
  { code: "DavJvecqr-p", caption: "Signature ritual — behind the chair" },
  { code: "Dax-5yxoxgj", caption: "Colour diary" },
  { code: "Dax_LjrImhx", caption: "Blowout in motion" },
  { code: "DayGn0rOy0S", caption: "Bridal preview" },
  { code: "DayG-mAuhLN", caption: "Studio detail" },
  { code: "DaztqkSO4ZN", caption: "Transformation reel" },
  { code: "DaigSl1Nqvm", caption: "Studio moment" },
  { code: "DaigYXEowxY", caption: "On the floor" },
  { code: "Daiz1jsu3Dz", caption: "Hair story" },
  { code: "DanqYwvolLj", caption: "Bridal chapter" },
  { code: "Daqn561O88r", caption: "Colour close-up" },
  { code: "Dar_R0horOj", caption: "Editorial cut" },
  { code: "DauwgbMIiNG", caption: "Behind the scenes" },
  { code: "Dauwlh0IPZX", caption: "Style diary" },
  { code: "DauyvP6om6-", caption: "Finishing touch" },
  { code: "DaXhGYFuLuK", caption: "Studio session" },
  { code: "DaXhwkfO0CW", caption: "Salon detail" },
  { code: "DaaWEeRIJ7P", caption: "Hair transformation" },
  { code: "Daaz0JUo7X9", caption: "Colour reveal" },
  { code: "DafvmWJo1sK", caption: "Bridal edit" },
  { code: "Dafvue7omwS", caption: "Editorial moment" },
  { code: "Daf0KAnIcWz", caption: "On the chair" },
  { code: "Daf0Yh_oYR2", caption: "Signature glow" },
  { code: "Daib7HDo8Vb", caption: "Behind the lens" },
];

export const instagramReels: InstagramReel[] = shortcodes.map(({ code, caption }) => ({
  shortcode: code,
  url: `https://www.instagram.com/reel/${code}/`,
  embedUrl: `https://www.instagram.com/reel/${code}/embed/`,
  caption,
}));
