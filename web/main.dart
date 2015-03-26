import 'dart:html';

const int N = 5000;

void main() {
  final output = querySelector('.Output');
  final boxes = new List(N);

  // initial render
  output.setAttribute('data-class', 'red');
  for (var i = 0; i < N; i++) {
    final box = new DivElement()
      ..classes.addAll(['Box', 'red']);
    boxes[i] = box;
    output.append(box);
  }

  // toggle classes
  querySelector('.ToggleDart').onClick.listen((e) {
    e.preventDefault();
    final time = window.performance.now();

    final oldClass = output.getAttribute('data-class');
    switch (oldClass) {
      case 'red':
        output.setAttribute('data-class', 'green');
        for (var i = 0; i < boxes.length; i++) {
          final box = boxes[i];
          box.classes
            ..remove('red')
            ..add('green');
        }
        break;
      case 'green':
        output.setAttribute('data-class', 'red');
        for (var i = 0; i < boxes.length; i++) {
          final box = boxes[i];
          box.classes
            ..remove('green')
            ..add('red');
        }
        break;
    }

    window.console.log('Dart: ${window.performance.now() - time}');
  });
}
