// // src/Dictionary.js

// import React, { useState } from 'react';
// import axios from 'axios';
// import { Container, Form, Button, Alert } from 'react-bootstrap';

// const Dictionary = () => {
//   const [word, setWord] = useState('');
//   const [definitions, setDefinitions] = useState([]);
//   const [error, setError] = useState('');

//   const fetchDefinition = async () => {
//     try {
//       const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
//       setDefinitions(response.data);
//       setError('');
//     } catch (error) {
//       setError('Word not found');
//       setDefinitions([]);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetchDefinition();
//   };

//   return (
//     <Container className="mt-5">
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="word">
//           <Form.Label>Enter a word:</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter word"
//             value={word}
//             onChange={(e) => setWord(e.target.value)}
//             required
//           />
//         </Form.Group>
//         <Button variant="primary" type="submit">
//           Search
//         </Button>
//       </Form>
      
//       {error && <Alert variant="danger" className="mt-3">{error}</Alert>}

//       {definitions.length > 0 && (
//         <div className="mt-3">
//           <h4>Definitions for "{word}":</h4>
//           {definitions.map((entry, index) => (
//             <div key={index}>
//               <h5>{entry.word}</h5>
//               {entry.meanings.map((meaning, index) => (
//                 <div key={index}>
//                   <p><strong>{meaning.partOfSpeech}</strong></p>
//                   {meaning.definitions.map((definition, index) => (
//                     <p key={index}>{definition.definition}</p>
//                   ))}
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       )}
//     </Container>
//   );
// };

// export default Dictionary;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { Container, Form, Button, Alert } from 'react-bootstrap';

// const Dictionary = () => {
//   const [word, setWord] = useState('');
//   const [definitions, setDefinitions] = useState([]);
//   const [error, setError] = useState('');

//   const fetchDefinition = async () => {
//     try {
//       const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
//       setDefinitions(response.data);
//       setError('');
//     } catch (error) {
//       setError('Word not Found'); // Changed error message here
//       setDefinitions([]);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetchDefinition();
//   };

//   return (
//     <Container className="mt-5">
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="word">
//           <Form.Label>Enter a word:</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter word"
//             value={word}
//             onChange={(e) => setWord(e.target.value)}
//             required
//           />
//         </Form.Group>
//         <Button variant="primary" type="submit">
//           Search
//         </Button>
//       </Form>
      
//       {error && <Alert variant="danger" className="mt-3">{error}</Alert>}

//       {definitions.length > 0 && (
//         <div className="mt-3">
//           <h4>Definitions for "{word}":</h4>
//           {definitions.map((entry, index) => (
//             <div key={index}>
//               <h5>{entry.word}</h5>
//               {entry.meanings.map((meaning, index) => (
//                 <div key={index}>
//                   <p><strong>{meaning.partOfSpeech}</strong></p>
//                   {meaning.definitions.map((definition, index) => (
//                     <p key={index}>{definition.definition}</p>
//                   ))}
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       )}
//     </Container>
//   );
// };

// export default Dictionary;


import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const Dictionary = () => {
  const [word, setWord] = useState('');
  const [definitions, setDefinitions] = useState([]);
  const [error, setError] = useState('');

  const fetchDefinition = async () => {
    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      setDefinitions(response.data);
      setError('');
    } catch (error) {
      setError('Word not Found');
      setDefinitions([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchDefinition();
  };

  return (
    <Container className="mt-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="word" className="mb-3"> {/* Added mb-3 class for bottom margin */}
          <Form.Label>Enter a word:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter word"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
      
      {error && <Alert variant="danger" className="mt-3">{error}</Alert>}

      {definitions.length > 0 && (
        <div className="mt-3">
          <h4>Definitions for "{word}":</h4>
          {definitions.map((entry, index) => (
            <div key={index}>
              <h5>{entry.word}</h5>
              {entry.meanings.map((meaning, index) => (
                <div key={index}>
                  <p><strong>{meaning.partOfSpeech}</strong></p>
                  {meaning.definitions.map((definition, index) => (
                    <p key={index}>{definition.definition}</p>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </Container>
  );
};

export default Dictionary;

