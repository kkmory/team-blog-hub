import {Member} from "@src/types";

export const members: Member[] = [
    {
        name: "Keisuke",
        role: "Software Engineer",
        bio: "邦ロックと飛行機を愛する、ゆるふわソフトウェアエンジニア。",
        avatarSrc: "/avatars/keisuke.jpg",
        sources: [
            "https://zenn.dev/kkmory/feed",
            "https://techmory.hateblo.jp/rss",
            "https://speakerdeck.com/kkmory.atom"
        ],
        includeUrlRegex: "zenn.dev|hateblo.jp|speakerdeck.com",
        twitterUsername: "kkmory_",
        githubUsername: "kkmory",
        websiteUrl: "https://keisuke.vercel.app/",
    },
];
