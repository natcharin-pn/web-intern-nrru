import React from 'react';
import { Layout, Upload } from 'antd';
import styled from 'styled-components';
import './App.css';
import Openchat from './page/openchat';




const { Sider, Content } = Layout;

const StyledLayout = styled(Layout)`
  display: grid;
  grid-template-columns: 216px auto;
  background-color: #F7F7F7;
  width: 100%;
  height: 100vh;
  overflow: hidden;

`;

const StyledSider = styled(Sider)`
  grid-column: 1;
  background-color: #440000;

`;

const StyledContent = styled(Content)`
  grid-column: 2;
  padding: 20px;
`;

function App() {
  return (
    <StyledLayout>
      <StyledSider>Sider</StyledSider>
      <Layout>
        <StyledContent>
          <Openchat />
        </StyledContent>
      </Layout>
    </StyledLayout>
  );
}

export default App;
