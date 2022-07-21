import React from 'react';
import Alert from './components/Alert/Alert';

function App() {
  return (
    <div className="App">
      <section className="Alert-wrapper">
        <Alert
          summary="Summary"
          detail="Detail"
          variant="success"
          closable={true}
          onClose={(e) => console.log(e)}
        />

        <Alert
          summary="Summary"
          detail="Detail"
          variant="info"
          closable={true}
          onClose={(e) => console.log(e)}
        />
      </section>
    </div>
  );
}

export default App;
