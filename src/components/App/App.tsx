import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  color: white;
  background: grey;
  border: 2px green solid;
`;

const typedFunction = (s: string): number => s.length;

export const App = () => <Div>{`'React' string has ${typedFunction('React')} chars`}</Div>;
