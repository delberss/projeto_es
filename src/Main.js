function Main(){
    return(
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
    )
}

export default Main