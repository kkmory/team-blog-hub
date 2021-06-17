module.exports = {
    siteUrl: 'https://kkmory.dev/',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    outDir: './out',
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
        ]
    }
};
