//1. Typen und Interface definieren
enum Priority {
  low = "low",
  medium = "medium",
  high = "high",
}

interface ToDo {
  id: number;
  task: string;
  completed: boolean;
  priority: Priority;
}

//2. Initialisierung
let todos: ToDo[] = [];
let nextId = 1;

//3. Todo hinzufügen (Spread Operator & Arrow Function)
export const addTodo = (task: string, priority: Priority): void => {
  todos = [...todos, { id: nextId++, task, completed: false, priority }];
};
addTodo("Jon in den Kaffee spucken", Priority.high);

//4. Todo als erledigt makieren(map, spread, ternary)
export const completedTodo = (id: number): void => {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: true } : todo
  );
};

//5. Todo löschen (filter & Arrow Function)
export const deleteTodo = (id: number): ToDo[] => {
  return todos.filter((todo) => todo.id === id);
};

//6. Todos anzeigen (forEach, Ternary, Template Strings) //1. leere liste, todo in liste eintragen, danach liste abhacken oder löschen, neue todo eintragen
export const showTodos = (): void => {
  todos.forEach((todo) => {
    const checkTodo = todo.completed
      ? "Todo ist erledigt [x]"
      : "Todo ist noch offen [ ]";
    console.log(checkTodo);
  });
};

//7. Testdaten und Funktionsaufrufe
type myToDo = ToDo;
[
  {
    task: "Typescript lernen",
    completed: false,
    priority: "high",
  },
  {
    task: "Kaffee trinken",
    completed: true,
    priority: "high",
  },
  {
    task: "Pflanzen gießen",
    completed: false,
    priority: "low",
  },
  { task: "Vier Gewinnt erstellen", completed: false, Priority: "medium" },
  {
    task: "Jon ärgern",
    completed: false,
    Priority: "high",
  },
];
//const showTodos: void = completTodo(myToDo );
console.log(completedTodo);
