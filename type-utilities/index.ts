type Todo = {
  title: string;
  description: string;
  completed: boolean;
};

// Readonly -> imutabilidade
const todo: Readonly<Todo> = {
  title: 'Assistir Dark de novo',
  description: 'Relembrar os detalhes',
  completed: false,
};
console.log(todo);

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo2 = updateTodo(todo, { completed: true });
console.log(todo2);

// Pick
type TodoPreview = Pick<Todo, "title" | "completed">;

const todo3: TodoPreview = {
  title: 'Fechar Gost of Tsushima',
  completed: false
};

// Omit
// type TodoPreview2 = Omit<Todo, "description">;