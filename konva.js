// Сначала нужно создать объект Konva.Stage т.е. создаём сцену.
var stage = new Konva.Stage({
  container: "container", // id of container <div>
  width: 500,
  height: 500,
});

// затем создаём слой  Konva.Layer
var layer = new Konva.Layer();

// Следующий шаг, создаем форму
var circle = new Konva.Circle({
  x: stage.width() / 2,
  y: stage.height() / 2,
  radius: 70,
  fill: "red",
  stroke: "black",
  strokeWidth: 4,
});

// добавляем фигуру к слою
layer.add(circle);

// добавляем слой на сцену
stage.add(layer);

// рисуем изображение
layer.draw();
