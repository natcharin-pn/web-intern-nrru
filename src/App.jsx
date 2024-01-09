import React from 'react';
import { Layout, Upload } from 'antd';
import styled from 'styled-components';
import './App.css';
import CustomUpload from './page/upload';




const { Sider, Content } = Layout;

const StyledLayout = styled(Layout)`
  display: grid;
  grid-template-columns: 216px auto;
  background-color: #F7F7F7;
  width: 1440px;
  height: 1024px;
`;

const StyledSider = styled(Sider)`
  grid-column: 1;
  background-color: #440000;
  height: 1024px;
`;

const StyledContent = styled(Content)`
  grid-column: 2;
  padding: 108px 40px 48px 40px;
`;

function App() {
  return (
    <StyledLayout>
      <StyledSider>Sider</StyledSider>
      <Layout>
        <StyledContent>
          <CustomUpload />
        </StyledContent>
      </Layout>
    </StyledLayout>
  );
}

export default App;
