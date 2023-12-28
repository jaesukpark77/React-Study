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

// general method
const ReactButton = props => {
  return <button className={props.className}>{props.children}</button>
}

const ReactLargeButton = styled(ReactButton)`
  font-size: 50px;
`;

// dynamic methond
const PrimaryButton = styled.button`
  color: ${ props => props.primary ? 'white' : 'black' };
  background-color: ${ props => props.primary ? 'blue' : 'gray' };
`;

function App() {
  return (
    <div>
      <SimpleButton>Simple</SimpleButton>
      <LargeButton>Large</LargeButton>
      <ReactButton>React</ReactButton>
      <ReactLargeButton>React Large</ReactLargeButton>
      <PrimaryButton>Normal</PrimaryButton>
      <PrimaryButton primary>Primary</PrimaryButton>
    </div>
  );
}

export default App;
