/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
    app(input) {
        return {
            name: "brandeal",
            removal: input?.stage === "production" ? "retain" : "remove",
            home: "aws",
            providers: {
                aws: {
                    profile: "birchlogic", // Using birchlogic profile (personal profile has invalid credentials)
                },
            },
        };
    },
    async run() {
        const site = new sst.aws.Nextjs("BranDealSite", {
            environment: {
                // Environment variables will be available in your Next.js app
            },
        });

        return {
            url: site.url,
        };
    },
});

