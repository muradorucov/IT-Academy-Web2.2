import React, { useState, useEffect } from 'react'
import Modal from './Modal';

export default function App() {
  // const [number, setNumber] = useState(Math.trunc(Math.random() * 100))

  // return (
  //   <div className="app">
  //     <button className='btn btn-danger' onClick={() => { setNumber(Math.trunc(Math.random() * 100)) }}> generate random number</button>
  //     <p className='text-danger'>{number}</p>
  //   </div>
  // )

  const [modal, setModal] = useState(false)

  const [count, setCount] = useState(0)


  useEffect(() => {
    window.onkeyup = (e) => {
      if (modal && e.keyCode == 27) {
        setModal(false)
        console.log("render etdim")
      }
    }
  }, [modal])



  // useEffect(() => {
  //   console.log("modal render olundu")
  // }, [modal])



  return (
    <div className="app">
      <div className="modal-dialog">
        <div className="modal-content">
          <button type="button" className="btn btn-primary" onClick={() => { setModal(true) }}>
            Уведомления
          </button>
        </div>
      </div>

      {modal ? <Modal close={setModal} /> : null}


      <button onClick={() => { setCount(count + 1) }}>{count}</button>
    </div>
  );
}

// В компоненте есть стейт, значит используем классы
// class App extends React.PureComponent {
//   state = {
//     number: Math.trunc(Math.random()*100)
//   };

//   onClick = () => {
//     this.setState({ number: Math.trunc(Math.random()*100)});
//   };

//   render() {
//     const { number } = this.state;
//     return (
//       <div className="app">
//         <Button onClick={this.onClick} />
//         <Randomizer number={number} />
//       </div>
//     );
//   }
// }

// export default App;
