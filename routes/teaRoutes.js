function tea(title, score) {
  this.title = title;
  this.score = score;
}

var gunpowder = new tea('gunpowder', 9);
var peach = new tea('peach', 8);
var green = new tea('green', 5);
var white = new tea('white', 7);

module.exports = app => {
  app.get('/api/teas', (req, res) => {
    res.send({ teas: [gunpowder, peach, green, white] });
  });
};
