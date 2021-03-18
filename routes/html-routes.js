// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

module.exports = function(app) {
  app.get("/", (req, res) => {
    if (req.length > 0) {
      res.redirect("/index");
    }
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/movie", (req, res) => {
    if (req.movieTitle) {
      res.redirect("/movieDetail");
    }
    res.sendFile(path.join(__dirname, "../public/movie.html"));
  });

  app.get("/watchList", (req, res) => {
    if (req.watchList) {
      res.redirect("/watchList");
    }
    res.sendFile(path.join(__dirname, "../public/watch.html"));
  });

  app.get("/reviewList", (req, res) => {
    if (req.reviewList) {
      res.redirect("/reviewList");
    }
    res.sendFile(path.join(__dirname, "../public/reviewList.html"));
  });
};
