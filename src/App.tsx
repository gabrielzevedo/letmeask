import { Button } from './components/Button'
import { ButtonIncrement } from './components/ButtonIncrement'
function App() {
  return (
    <>
      <h1>Hello world!</h1>
        <Button text="Botão 1" />
        <Button>
            Botão 2
        </Button>
        <ButtonIncrement />
    </>
  );
}

export default App;
