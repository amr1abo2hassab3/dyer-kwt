// postcss.config.js
module.exports = {
  plugins: [
    require("@fullhuman/postcss-purgecss")({
      content: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"], // ضع مسارات الملفات الخاصة بمشروعك
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
  ],
};
