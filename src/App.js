import { Component } from 'react';
import TodoList from './TodoList';
//Объект date1 будет представлять дату 
//и время 19 августа 2021 года, 14:05 (2:05 PM).
const date1 = new Date(2021, 7, 19, 14, 5);
const date2 = new Date(2021, 7, 19, 15, 23);

// массив initialData, который содержит два объекта
const initialData = [ //......................................  1
  {
    title: 'Изучить React',
    desc: 'Да поскорее!',
    image: '',
    done: true, //......................................  2
    createdAt: date1.toLocaleString(),
    key: date1.getTime()
  },
  {
    title: 'Написать первое React-приложение',
    desc: 'Список запланированных дел',
    image: '',
    done: false,
    createdAt: date2.toLocaleString(),
    key: date2.getTime()
  }
];

//пропс это способ передачи данных от одного компонента к другому
//В React пропсы — это значения, которые вы передаете компоненту, 
//чтобы он знал, что показывать или как себя вести.
export default class App extends Component { //......................................  3
  constructor(props) { //......................................  4
    super(props); //......................................  5
    this.state={ data: initialData }; //......................................  6
    this.setDone = this.setDone.bind(this);
  }

  setDone(key){
const deed = this.state.data.find((current) => current.key === key);
if(deed)
  deed.done = true;
  this.setState((state) => ({}));
  }

  //......................................  7
  //для указания стилевых классов
//должен быть использован не атрибут тега class, 
//а свойство className.

  render() {  // метод render должен быть внутри класса App 
    return ( //......................................  8
      <div> 
        
        <nav className="navbar is-light">
          <div className="navbar-brand">
            <span className="navbar-item is-uppercase">
              Todos
            </span>
          </div>
        </nav>
        <main className="content px-6 mt-6">
         <TodoList list={this.state.data} 
         setDone={this.setDone} />
        </main>
      </div>
    ); //......................................  9
  }
}
