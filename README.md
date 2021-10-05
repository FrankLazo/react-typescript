# Apuntes sobre TypeScript

- Prácticas personales:
    - [Tic tac toe](https://tictactoe-ts-react-lazodev.netlify.app/)

- Tomado del [Curso de Fernando Herrera](https://www.youtube.com/playlist?list=PLCKuOXG0bPi26-eawizqyLOgM7j66H_4M) en Youtube.
- [Ver aplicación](https://typescript-react-lazodev.netlify.app/)

```json
// modo estricto, no permite el tipado 'any'
{
    "strict": true,
}
```

```tsx
// Tipos: void - string - number - boolean
const arrowFunction = ( param: number = 1):void => { /* code... */ }

// el valor que se envía por defecto es del tipo 'event'
// con parámetros ya no habrían errores
<button onClick={ arrowFunction }></button>

// interfaces
// establece los nombres y tipos de las propiedades
interface intfName {
    property: type;
}

// entre < > indicar el tipo de valores para el estado
useState<intfName>();

// Los tipos para las props
type TimerArgs = {
    milliseconds: number,	// prop requerida
    milliseconds?: number,	// prop opcional
}

const Component = (args: TimerArgs) => {}
const Component = ({ milliseconds }: TimerArgs) => {}

// Otra manera de indicar los tipos
const initialValue = { /* code... */ }

const arrowFunction = (param: typeof initialValue) => { /* code... */ }

// Para useReducer
// "|" OR en TypeScript
type actionType =
	| { type: 'increment', }
	| { type: 'decrement', }
	| { type: 'custom', payload: number, };

const functionReducer = (state: typeof initialState, action: actionType) => { /* code... */ }

// Tipo evento
const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
{
    console.log(e.target.name);
}

// Tipos genéricos en custom hooks
function nameFunc<T> (initState: T) { /* code... */ }
const nameFunc = <T extends Object | T extends Array>( initState: T ) => { /* code... */ }
```
