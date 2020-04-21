const path = require("path");
const TerserPlugin = require("terser-webpack-plugin"); // Giảm dung lượng file bundle
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["./src/index.js"],
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "",
  },
  mode: "development", // none / production / development
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        use: ["file-loader"],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"], // webpack chạy từ phải sang trái
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"], // ES6, 7, 8, 9,... ==> ES5
            plugins: ["transform-class-properties"], // not included in ECMAScript nên cần thêm plugin khác
          },
        },
      },
      {
        test: /\.hbs$/,
        use: ["handlebars-loader"],
      },
    ],
  },
  plugins: [
    new TerserPlugin(), // Giảm dung lượng file bundle.js
    new MiniCssExtractPlugin({ filename: "styles.[contenthash].css" }), // Tách code CSS trong file bundle.js ra thành 1 file riêng
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        "**/*", // Giữ lại behavior của default
        path.join(process.cwd(), "build/**/*"), // Giả sử muốn xóa tất cả mọi thứ trong folder 'build'
      ],
    }), // Mặc định (ko truyền param): Xóa sạch file ở module.exports.out.path trước khi build
    new HtmlWebpackPlugin({
      template: "src/index.hbs",
      title: "Hello Webpack!", // cho biến htmlWebpackPlugin.options.title ở index.hbs
      description: "Some description...", // cho biến htmlWebpackPlugin.options.description ở index.hbs
    }), // Tự tạo ra file html (nếu ko có dùng template), tự chèn file css, js luôn!
  ],
};

// console.log("DEBUG", path.join(process.cwd(), "build/**/*")); // H:\Webpack-VP\build\**\*
// console.log("DEBUG", process.cwd()); // H:\Webpack-VP
