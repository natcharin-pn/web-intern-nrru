import { Button, Drawer,Select } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import CloseIcon from '../assets/Close.svg';
import AdminIcon from '../assets/Admin.svg';
import CompanyIcon from '../assets/Company.svg';

const mockChats = [
  {
    id: 1,
    name: 'สมศรี สุขมาก',

  },
  {
    id: 2,
    name: 'สมปอง สุขสวัสดิ์',

  },
  {
    id: 3,
    name: 'สมศักดิ์ บุญมี',

  },
  

];

const Container = styled.div`
  height: 100vh;
  width: 90%;`;

const StyledButton = styled(Button)`
  background-color: #4CAF50;
  color: white;
  &:hover {
    background-color: #45a049;
  }
`;

const StyledDrawer = styled(Drawer)`
  .ant-drawer-body {
    color: #333;
    background-color: #ffffff;
  }

   .custom-close-icon {
    position: absolute;
    top: 40px;
    right: 40px;
  }
`;

const BlurOverlay = styled.div`
  backdrop-filter: ${(props) => (props.open ? 'blur(8px)' : 'none')};
  display: ${(props) => (props.open ? 'block' : 'none')};
  background: rgba(21, 15, 11, 0.50);
  width: 100%;
  height: 100vh; 
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1; 
`;


const Block = styled.div`
  width: auto;
  height: auto;
  border: none;
  position: absolute;
  top: 104px;
  left: 40px;
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;

const Head = styled.h2`
  font-family: Prompt;
  color: #150F0B;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 0; 
`;

const UnderHead = styled.p`
  font-family: Prompt;
  color: #C4C4C4;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  margin-bottom: 0; 
`;

const InBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const ImgBG = styled.div`
  display: flex;
  width: 32px;
  height: 32px;
  padding: 6px;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  background-color: #FFEEE7;
`;

const BlockText = styled.p`
  display: flex;
  height: 24px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
box-shadow: 0px 0px 8px 0px rgba(46, 60, 79, 0.06);
`;

const TextIn = styled.div`
  font-family: Prompt;
font-size: 12px;
font-style: normal;
font-weight: 400;
`;

const { Option } = Select;


const StyledSelect = styled(Select)`
  && {
    position: absolute;
    top: 217px;
    left: 40px;
    width: 464px;
    padding: 8px;
    border-radius: 8px;
    border: 1px solid #F36B24;
    background: #FFF;
    color: #F36B24;
    font-size: 14px;
    font-family: Prompt;

    .ant-select-selector {
      color: #F36B24;
      display: flex;
      align-items: center;
      height: 100%;
      border: none;
      box-shadow: none;
      font-family: Prompt;

      .ant-select-selection-search {
        .ant-select-selection-search-input {
          color: #F36B24;
          font-family: Prompt;
        }
      }

      .ant-select-selection-placeholder {
        color: #F36B24;
        font-family: Prompt;
      }
    }

    .ant-select-arrow {
      color: #F36B24;
    }

    &.ant-select-dropdown {
      width: 46px; /* Adjust as needed */
      padding: 8px;
      display: flex;
      align-items: center;
      gap: 10px;

      .ant-select-item {
        color: #F36B24;
        padding: 8px;
        border: none;
        font-family: Prompt;
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .ant-select-item-option-selected {
        color: #F36B24;
        box-shadow: none;
        border: none;
        font-family: Prompt;
        background-color: #FFE4C4;
      }
    }
  }
`;



function Open() {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState(600);

  const showDrawer = () => {
    setSize(600);
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const [selectedValue, setSelectedValue ] = useState('สมศรี สุขมาก');

  const handleChange = (value) => {
    console.log(`Selected value: ${value}`);
    setSelectedValue(value);
  };

  return (
    <Container>
      <BlurOverlay open={open} />
      <StyledButton type="primary" onClick={showDrawer}>
        Open
      </StyledButton>
      <StyledDrawer placement="right" width={size} visible={open} closable={false}>
        <img
          src={CloseIcon}
          alt="Close Icon"
          className="custom-close-icon"
          onClick={onClose}
        />
        <Block>
          <ImgBG>
            <img src={AdminIcon} alt="Your Image" />
          </ImgBG>
          <InBlock>
            <Head>แก้ไขข้อมูลเจ้าหน้าที่</Head>
            <UnderHead>กรุณาเลือกผู้รับผิดชอบใหม่</UnderHead>
          </InBlock>
        </Block>
        <BlockText>
          <img src={CompanyIcon} alt="Your Image" />
          <TextIn>สำนักสาธารณสุขและสิ่งแวดล้อม</TextIn>
        </BlockText>
    <StyledSelect
      defaultValue={selectedValue} 
      onChange={handleChange} 
      bordered={false} 
    >
      {mockChats.map((chat) => (
            <Option key={chat.id} value={chat.name}>
              {chat.name}
            </Option>
      ))}
    </StyledSelect>
      </StyledDrawer>
    </Container>
  );
}

export default Open;
