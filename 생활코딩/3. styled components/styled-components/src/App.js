import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

// styled components method
const SimpleButton = styled.button`
  color: white;
  background-color: green;
`;

const LargeButton = styled(SimpleButton)`
  font-size: 50px;
`;

function App() {
  return (
    <div>
      <SimpleButton>Simple</SimpleButton>
      <LargeButton>Large</LargeButton>
    </div>
  );
}

export default App;
