let width = window.innerWidth;
let height = window.innerHeight;

const stage = new Konva.Stage({
  container: "root",
  width: width,
  height: height,
});

const layer = new Konva.Layer();

//add draw
const circle = new Konva.Circle({
  x: 100,
  y: 150,
  radius: 40,
  fill: "red",
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
  layer.add(circle);
};
imageObj.src = "oct_1.jpeg";

//добавдяем все на сцену
stage.add(layer);
