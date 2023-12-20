import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const SimpleButton = styled.button`
  color:white;
  background-color:green;
`

function App() {
  return (
    <div>
      <SimpleButton>Simple</SimpleButton>
    </div>
  );
}

export default App;
