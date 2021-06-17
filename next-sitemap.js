module.exports = {
    siteUrl: 'https://kkmory.dev/',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
        ]
    }
};
