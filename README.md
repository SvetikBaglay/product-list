# ProductList

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
# product-list

Створити веб-програму сторінки:
1.Список HTML шаблонів
2.Сторінка деталей шаблона

Програма отримує з серверу (використати будь-яку зручну його імітацію) список шаблонів та зберігає його в пам'яті.

На сторінці 1 відобразити таблицю шаблонів що містить ім'я і час останньої зміни шаблону.
Ім'я має бути посиланням на сторінку деталей шаблону.
Сторінка 2 має відмалювати зміст HTML шаблону.
Додати можливість виділення будь-якого елементу відмальованого шаблону що містить клас '.editable' мишою.
У випадку виділення елементу відобразити панель, що дозволить встановити текст та розмір шрифту елементу.
Після кожної зміни шаблону імітувати його збереження до серверу та оновлювати список шаблонів в пам'яті.
Після повернення на сторінку 1 таблиця має містити коректний час останньої зміни

Тестові дані:
[
  {
    id: 1,
    name: 'One',
    template: `
          <div class='template'>
            <div class='editable'>
              One
            </div>
            <div class='container'>
                <div class='editable'>
                Two
              </div>
              <div class='editable'>
                Three
              </div>
            </div>
          </div>`,
    modified: 1516008350380
  },
  {
    id: 2,
    name: 'Two',
    template: `
          <div class='template'>
            <div class='container'>
                <div class='editable'>
                One
              </div>
              <div class='editable'>
                Two
              </div>
              <div class='editable'>
                Three
              </div>
            </div>
            <div class='editable'>
              Four
            </div>
          </div>`,
    modified: 1516008489616
  },
  {
    id: 3,
    name: 'Three',
    template: `
          <div class='template'>
            <div class='editable'>
              one
            </div>
            <div class='editable'>
              two
            </div>
            <div class='editable'>
              three
            </div>
          </div>`,
    modified: 1516008564742
  }
]


