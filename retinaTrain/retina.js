let width = window.innerWidth;
let height = window.innerHeight;

const stage = new Konva.Stage({
  container: "root",
  width: width,
  height: height,
});

const layer = new Konva.Layer();

//add draw
const line = new Konva.Line({
  points: [23, 20, 23, 160, 70, 93, 150, 109, 150, 139, 270, 93],
  fill: "#00D2FF",
  stroke: "black",
  strokeWidth: 5,
  closed: true,
});

// add image
const imageObj = new Image();
imageObj.onload = function () {
  const yoda = new Konva.Image({
    x: 50,
    y: 20,
    image: imageObj,
    width: 400,
    height: 300,
  });
  layer.add(yoda);
};
imageObj.src = "oct_1.jpeg";

//добавдяем все на сцену
stage.add(layer);

function drawOnImage() {
  return layer.add(line);
}
