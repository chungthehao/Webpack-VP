const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    "hello-world": "./src/hello-world.js",
    me: "./src/me.js",
  },
  output: {
    filename: "[name].[contenthash].js", // [name] tương ứng key của entry
    path: path.resolve(__dirname, "./dist"),
    publicPath: "",
  },
  mode: "production", // none / production / development
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
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
    // new TerserPlugin(), // Giảm dung lượng file bundle.js (mode = production, default tự có)
    new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }), // Tách code CSS trong file bundle.js ra thành 1 file riêng; [name] tương ứng key của entry
    new CleanWebpackPlugin(), // Mặc định (ko truyền param): Xóa sạch file ở module.exports.out.path trước khi build
    new HtmlWebpackPlugin({
      filename: "hello-world.html",
      chunks: ["hello-world", "vendors~hello-world~me"], // Chọn các chunks sau khi build ở terminal
      template: "src/page-template.hbs",
      title: "Hello Webpack!", // cho biến htmlWebpackPlugin.options.title ở index.hbs
      description: "Some description...", // cho biến htmlWebpackPlugin.options.description ở index.hbs
    }), // Tự tạo ra file html (nếu ko có dùng template), tự chèn file css, js luôn!
    new HtmlWebpackPlugin({
      filename: "me.html",
      chunks: ["me", "vendors~hello-world~me"], // Chọn các chunks sau khi build ở terminal
      template: "src/page-template.hbs",
      title: "It's me!", // cho biến htmlWebpackPlugin.options.title ở index.hbs
      description: "Some description...", // cho biến htmlWebpackPlugin.options.description ở index.hbs
    }), // Tự tạo ra file html (nếu ko có dùng template), tự chèn file css, js luôn!
  ],
};

// console.log("DEBUG", path.join(process.cwd(), "build/**/*")); // H:\Webpack-VP\build\**\*
// console.log("DEBUG", process.cwd()); // H:\Webpack-VP
