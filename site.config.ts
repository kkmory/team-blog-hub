export const config = {
  siteMeta: {
    title: "kkmory.dev",
    teamName: "Keisuke Mori - kkmory",
    description: "これまでの記事や登壇資料を、ふんわりとまとめました。",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://keisuke.vercel.app"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "Profile",
      href: "/members/Keisuke",
    },
    {
      title: "Scrapbox",
      href: "https://scrapbox.io/kkmory/",
    },
    {
      title: "Twitter",
      href: "https://twitter.com/kkmory_",
    },
  ],
};
