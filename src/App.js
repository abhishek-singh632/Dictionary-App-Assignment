// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Dictionary from './components/Dictionary'; // Adjust path as per your actual structure

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Dictionary App</h1>
//       </header>
//       <main>
//         <Dictionary />
//       </main>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dictionary from './components/Dictionary'; // Adjust path as per your actual structure

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ textAlign: 'center', margin: '0 auto' }}>My Dictionary App</h1>
      </header>
      <main>
        <Dictionary />
      </main>
    </div>
  );
}

export default App;

