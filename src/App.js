import './App.css';

function App() {
  return (
    <div className="App">
      <div className='main'>
        <div className='center'>
          <div className='menu'>
            
            <div className='logo'>
              <h3>Projeto ES</h3>
            </div>

            <div className='item-menu'>
                <a href='#'>Login</a>
            </div>

          </div>
        </div>


        <div className='form'>
        <h2>Entre em contato</h2>
          <form>
            <div className='items-form'>
              <input placeholder='Seu nome...' type="text"></input>
              <input placeholder='Seu email...' type="text"></input>
              <input placeholder='Sua senha...' type="text"></input>
              <input placeholder='Seu curso...' type="text"></input>
              <input type="submit"></input>
            </div>
          </form>
          
        </div>

      </div>

      <div className='content'>
        <div className='center'>
          <div className='conteudo-single'>
            <h3>Jornadas</h3>
            <p>Caminho a ser seguido!</p>
          </div>

          <div className='conteudo-single'>
            <h3>Jornadas</h3>
            <p>Caminho a ser seguido!</p>
          </div>

          <div className='conteudo-single'>
            <h3>Jornadas</h3>
            <p>Caminho a ser seguido!</p>
          </div>

          <div className='conteudo-single'>
            <h3>Jornadas</h3>
            <p>Caminho a ser seguido!</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
