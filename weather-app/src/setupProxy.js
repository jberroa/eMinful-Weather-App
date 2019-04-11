const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy("/maps", {
      target: "https://maps.googleapis.com/",
      changeOrigin: true
    })
  );
  app.use(
    proxy("/data", {
      target: "https://api.openweathermap.org/",
      changeOrigin: true
    })
  );
};
