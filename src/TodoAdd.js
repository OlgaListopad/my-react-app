import { Component } from "react";
export default class TodoAdd extends Component{
  constructor(props){
    super(props);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.clearFromData();
  }


// Реализация очистки данных формы
clearFromData(){
this.formData = {
  title: '',
  desc: '',
  image: ''
};
}

 // Реализация изменения заголовка
handleTitleChange(evt) {
this.formData.title = evt.target.value;
}

// Реализация изменения описания
handleDescChange(evt) {
  this.formData.desc = evt.target.value;
}

 // Реализация изменения изображения
 handleImageChange(evt) {
  const cFiles = evt.target.files; // Получаем файлы из события
  if (cFiles.length > 0) { // Проверяем, есть ли загруженные файлы
    const fileReader = new FileReader(); // Создаем новый объект FileReader
    const that = this; // Сохраняем контекст текущего экземпляра класса
    fileReader.onload = () => { // Устанавливаем обработчик события onload
      that.formData.image = fileReader.result; // Сохраняем результат чтения файла в formData.image
    }
    fileReader.readAsDataURL(cFiles[0]); // Читаем первый файл как URL
  } else {
    this.formData.image = ''; // Если нет загруженных файлов, сбрасываем значение
  }
}

 // Реализация отправки формы
 handleFormSubmit(evt) {
  evt.preventDefault(); // Предотвращаем стандартное поведение формы
  const newDeed = { ...this.formData }; // Создаем новый объект на основе formData
  const date = new Date(); // Получаем текущую дату и время
  newDeed.done = false; // Устанавливаем значение done в false
  newDeed.createdAt = date.toLocaleString(); // Устанавливаем время создания в читаемом формате
  newDeed.key = date.getTime(); // Устанавливаем уникальный ключ на основе времени
  this.props.add(newDeed); // Передаем новый объект в функцию add, полученную через props
  this.clearFormData(); // Очищаем данные формы
  evt.target.reset(); // Сбрасываем поля формы
}

//метод отвечает за отображение пользовательского интерфейса формы
render(){
  return(
    <section>
      <h1>Создание нового дела</h1>
     
      <form onSubmit={this.handleFormSubmit}> 

      <div className="field">
      <label className="label">Заголовок</label>
       <div className="control">
        <input className="input" onChange={this.handleTitleChange}/>
       </div>
      </div>
      
<div className="field">
<label>Примечание</label>
<div className="control">
<textarea className="textarea" onChange={this.handleDescChange}/>
</div>
</div>

<div className="field">
<div className="file">
<label className="file-label">
  <input className="file-input" type="file" accept="image/*" onChange={this.handleImageChange}/>
  <span className="file-cta">
    <span className="file-label">
Графическая иллюстрация...
    </span>
  </span>
</label>
</div>
</div>

<div className="field is-grouped is-grouped-right">
<div className="control">
  <input type="reset" className="button is-link is-light" value="Сброс"/>
</div>
<div className="control">
<input type="submit" className="button is-primary" value="Создать дело"/>
</div>
</div>
      </form>
    </section>
  );
}
}
