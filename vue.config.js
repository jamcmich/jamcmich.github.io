const { defineConfig } = require("@vue/cli-service");

/* Sharing Global SCSS Variables via Vue CLI: https://stackoverflow.com/a/50772202/9604683 */
module.exports = defineConfig({
    publicPath: process.env.NODE_ENV === "production" ? "/jamcmich.github.io/" : "/",
    transpileDependencies: true,
    css: {
        loaderOptions: {
            // pass options to sass-loader
            sass: {
                // @/ is an alias to src/
                // so this assumes we have a file named `src/_mixins.scss`
                additionalData: `@import "@/styles/global.scss";`,
            },
        },
    },
});