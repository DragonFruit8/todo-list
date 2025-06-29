import todoItem from './todoItem.json'
function TodoListItem() {
  // todoItem.json created to hold JSON Object, in case props {id,title} are incorrect per instructions
  // I see this as a pause before continuation of week-04
   todos = todoItem.map((item) => {
    <li key={item.id}>{item.title}</li>
  })
  return ({todos})
  // return <li key={id}>{title}</li>;
}

export default TodoListItem;
