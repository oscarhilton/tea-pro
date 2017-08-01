function tea(title, score) {
  this.title = title;
  this.score = score;
}

var gunpowder = new tea('Gunpowder', 9);
var peach = new tea('Peach', 8);
var green = new tea('Green', 5);
var white = new tea('White', 7);

module.exports = app => {
  app.get('/api/teas', (req, res) => {
    res.send({ teas: [gunpowder, peach, green, white] });
  });
};
