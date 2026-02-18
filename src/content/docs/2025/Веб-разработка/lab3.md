---
title: "Three.js"
description: "Работа с 3D-графикой в браузере"
sidebar:
  order: 4
---

**Цель**: научиться основам работы с трехмерной графикой в браузере, используя библиотеку Three.js.

## Подготовка

Изучите в документации библиотеки [фундаментальные понятие Three.js](https://threejs.org/manual/#ru/primitives) и раздел [Getting Started](https://threejs.org/manual/#en/installation). По возможности читайте на английском, перевод на официальном сайте страдает.

В документации обратите внимание на следующие объекты:

- сцена (scene), камера (camera) и отрисовщик (renderer);
- геометрия (geometry), материал (material), сетка (mesh);
- [BufferGeometry и BufferAttribute](https://threejs.org/manual/#ru/custom-buffergeometry)
- вершины (vertex) и их параметры position, normal, color, uv.
- вспомогательные элементы: GridHelper, AxesHelper.

В примерах посмотрите как настраиваются:

- источники света;
- камеры и их типы;
- цвета, положения и повороты объектов.

Из нового в html следует посмотреть про [`<script type="importmap">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script/type/importmap) и [`<script type="module">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script/type#module).

Из JS пригодятся знания о [модулях](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) пока достаточно будет импортирования. С массивами вы уже работали, но в JS есть и [типизированные массивы (TypedArray)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray). Для работы с BufferGeometry понадобятся [Float32Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array).

## Источники

1. [Введение в 3D: основы Three.js](https://habr.com/ru/post/494810/)
1. [ThreeJs — основы](https://habr.com/ru/articles/928072/)
1. [Документация Three.js](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene)
1. [Пример использования WebGL](https://ciechanow.ski/archives/)
1. [Discover Three.js](https://discoverthreejs.com/)

## Выполнение

Продолжайте работу на ветке frontend. Файлы прошлой работы можно переименовать и положить в папку в этом же проекте, если предыдущая работа защищена и не требует доработок, то ее код можно удалить.

С [CDN](https://cdn.jsdelivr.net/npm/three@0.182.0/build/) скачайте и разместите в подпапке своего проекта файлы three.module.js и three.core.js.

В index.html добавьте карту импортов. Пример ниже. Основной файл с JS-кодом подключите к html как модуль. В основном файле JS импортируйте библиотеку three.js.

```html
<script type="importmap">
  {
    "imports": {
      "three": "относительный путь до вашего файла three.module.js"
    }
  }
</script>
```

Ваша задача повторить часть интерфейса программ для работы с 3D графикой: 4 панели, где видно три проекции сцены и ее отображение в 3D. Можно выбрать один из объектов в выпадающем списке и перемещать его в горизонтальной плоскости стрелочками, а по вертикали - page up и page down.

Потребуется одна сцена, 4 камеры (1 перспективная и 3 орфографических) и 4 отрисовщика на каждую камеру. В html в итоге будет 4 элемента canvas.

Добавьте в сцену:
- оси и пару сеток для упрощения ориентирования (GridHelper, AxesHelper);
- горизонтальную плоскость, на которой вы разместите модель;
- два объекта из готовой геометрии (куб, сфера и т.д.);
- создайте и добавьте треугольную пирамиду с помощью bufferGeometry;

В качестве материалов используйте материалы с моделью отражения по Ламберту (MeshLambertMaterial).

В качестве источника света используйте полусферический свет (HemisphereLight).

Добавить элементы формы для выбора объекта и изменения его цвета и положения.

Реализуйте управление через мышь для изменения масштаба, поворота и перемещения камеры в панели для 3D представления (OrbitControls). OrbitControls скачивается по этой [ссылке](https://cdn.jsdelivr.net/npm/three@0.182.0/examples/jsm/controls/)

## Требования к коду и результат выполнения

- Код отформатирован, сохранен в системе контроля версий.
- Отсутствуют ошибки в консоли.