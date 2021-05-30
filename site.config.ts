export const config = {
  siteMeta: {
    title: "kkmory.dev",
    teamName: "Keisuke Mori - kkmory",
    description: "ゆるくふわっと書いています",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://keisuke.vercel.app"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "My Profile",
      href: "/members/Keisuke",
    },
    {
      title: "Twitter",
      href: "https://twitter.com/kkmory_",
    },
  ],
};
