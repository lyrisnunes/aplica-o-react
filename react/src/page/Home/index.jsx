import { Container } from "./styles";
import { useState } from "react";

export function Home() {
  // começa como vazio
  const [input, setInput] = useState("");
  const [tarefas, setTarefas] = useState(["texto exemplo"]);

  function register(e) {
    e.preventDefault();

    // adicionar a tarefa que já existe e adiciono a nova
    setTarefas([...tarefas, input]);
    setInput('')
    
  }

  return (
    <Container>
      <h1>Meu componente</h1>
      <form onSubmit={register}>
        <div>
          <label>Nome da tarefa:</label>
          <input
            placeholder="Digite seu nome"
            value={input} // pegar valor digitado no input
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        <button type="submit">Cadastrar</button>

        <div className="tarefa">
          {tarefas.map(tarefa => (
            <li key={tarefa}>{tarefa}</li>
          ))}
        </div>
      </form>
    </Container>
  );
}
