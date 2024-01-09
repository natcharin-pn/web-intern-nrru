import React, { useState } from 'react';
import { Input  } from 'antd';
import styled from 'styled-components';
import chatIcon from '../assets/chat-icon.svg';
import avatarImage from '../assets/avatar.png'; 
import SearchIcon from '../assets/Search.svg';
import CancelIcon from '../assets/Cancel.svg';

const mockChats = [
  {
    id: 1,
    name: 'สุดา แช่มชื่น',
    time: '17.14 น.',
    messagePreview: 'ท่อตัน',
    notifications: 2,
    avatar: avatarImage, 
  },
  {
    id: 2,
    name: 'คงเดช จงบุญ',
    time: '18.11 น.',
    messagePreview: 'แจ้งเรื่องร้องเรียนได้ที่น...',
    notifications: 1,
    avatar: avatarImage,
  },
  {
    id: 3,
    name: 'เจริญใจ ผลดี',
    time: '10.14 น.',
    messagePreview: 'เราไม่เข้าใจว่าทำไมของถึง ทรุดหน้าแ...',
    notifications: 1,
    avatar: avatarImage,
  },
  {
    id: 4,
    name: 'สมชาย ทิมเทือน',
    time: '09.09 น.',
    messagePreview: '099-9999999',
    notifications: 0,
    avatar: avatarImage,
  },
  {
    id: 5,
    name: 'สุทธิพร ใจดี',
    time: '05.10 น.',
    messagePreview: '88/21 ถนน ตัวเมือง ตำบลตลาดหลวง ...',
    notifications: 0,
    avatar: avatarImage,
  },
  {
    id: 6,
    name: 'รุ่งทิวา ทิพย์มา',
    time: '18.25 น.',
    messagePreview: 'https://koracity.go.th/',
    notifications: 0,
    avatar: avatarImage,
  },
  {
    id: 7,
    name: 'รุ่งทิวา ทิพย์มา',
    time: '18.25 น.',
    messagePreview: 'https://koracity.go.th/',
    notifications: 0,
    avatar: avatarImage,
  },
  {
    id: 8,
    name: 'รุ่งทิวา ทิพย์มา',
    time: '18.25 น.',
    messagePreview: 'https://koracity.go.th/',
    notifications: 0,
    avatar: avatarImage,
  },
  {
    id: 9,
    name: 'รุ่งทิวา ทิพย์มา',
    time: '18.25 น.',
    messagePreview: 'https://koracity.go.th/',
    notifications: 0,
    avatar: avatarImage,
  },
  {
    id: 10,
    name: 'รุ่งทิวา ทิพย์มา',
    time: '18.25 น.',
    messagePreview: 'https://koracity.go.th/',
    notifications: 0,
    avatar: avatarImage,
  },

];

const ChatContainer = styled.div`
  border-radius: 24px;
  font-family: Prompt; 
  display: grid;
  grid-template-columns: 372px 708px;
  width: 1144px;
  height: 868px;
  padding: 32px;
  justify-content: center;
  background-color: #fff;
  border-radius: 8px;
`;

const SearchContainer = styled.div`
  grid-column: 1;
`;

const StyledInput = styled(Input)`
  display: flex;
  align-items: center; 
  width: 352px;
  height: 40px;
  border-radius: 8px;
  padding: 12px 16px; 
  font-weight: 400;
  gap: 8px; 
  font-size: 14px;
  border: ${(props) => (props.hasContent ? '1px solid #F36B24' : '1px solid #FFEEE7')};
  box-shadow: none;

  .ant-input-prefix {
    width: 16px; 
    height: 16px; 
  }

  .ant-input-suffix {
    display: flex;
    align-items: center; 
  }

  .ant-input::placeholder {
  color: #FFC4AA;
}

  .ant-input {
    font-family: 'Prompt', sans-serif;
    border: none;
    box-shadow: none;
    outline: none;
    color: #F36B24;
    flex-grow: 1; 
  }
`;

const MessageContainer = styled.div`
  grid-column: 2;
  background-color: #FFFBF8;
  border-radius: 0px 24px 24px 0px;
  display: flex;
  width: 708px;
  height: 804px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ChatList = styled.div`
  margin-right:8px;
  margin-top: 24px ;
  max-height: 740px;
  overflow-y: auto; 

  &::-webkit-scrollbar {
    width: 4px; 
    margin-right:8px;
    
  }

  &::-webkit-scrollbar-track {
    background: #ffcc99; 
    border-radius: 20px; 
  }

  &::-webkit-scrollbar-thumb {
    background: #ff9933; 
    border-radius: 20px; 
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #cc7a00; 
  }

  &::-webkit-scrollbar-button {
    display: none;
  }
`;

const ChatListItem = styled.div`
width: 352px;
  display: flex;
  align-items: center;
  padding: 16px ; 
  border-bottom: 0.5px solid #FFEEE7;
  position: relative;
  border-radius: 5px;
`;

const Avatar = styled.img`
width: 48px;
height: 48px;
  border-radius: 40px;
  margin-right: 16px;
`;

const ChatInfo = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  min-width: 0; 
`;

const ChatTopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ChatBottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4px; 
  
`;

const ChatName = styled.div`
  color:  #150F0B;
font-family: 'Prompt', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 24px; 
`;

const ChatPreview = styled.div`
color:  #717171;
font-family: 'Prompt', sans-serif;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

const NotificationBadge = styled.div`
  color: white;
  display: inline-flex;
padding: 5px 6.5px 6px 5.5px;
justify-content: center;
align-items: center;
  border-radius: 30px;
  background:#F36B24;
font-family: 'Prompt', sans-serif;
font-size: 12.5px;
font-style: normal;
font-weight: 400;
line-height: 15px;
width: 20px;
height: 20px;
  
`;

const TimeStamp = styled.span`
color: #C4C4C4;
text-align: right;
font-family: 'Prompt', sans-serif;
font-size: 10px;
font-style: normal;
font-weight: 400;
line-height: 12px; 
`;

const TextStyledUnder=styled.p`
color:  #FFC4AA;
font-family: 'Prompt', sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

const ClearIcon = ({ onClick }) => (
  <img 
    src={CancelIcon} 
    alt="Clear"
    onClick={onClick}
    style={{ cursor: 'pointer', width: '16px', height: '16px' }} 
  />
);

function Chat() {

  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleClearClick = () => {
    setInputValue('');
  };
  
  return (
    
    <ChatContainer>
      <SearchContainer>
          <StyledInput
            value={inputValue}
            onSearch={handleInputChange}
            hasContent={inputValue.length > 0}
            placeholder="ค้นหาชื่อผู้ใช้ หรือ บทสนทนา"
            prefix={<img src={SearchIcon} alt="Search" />}
            suffix={inputValue ? <ClearIcon onClick={handleClearClick} /> : null}
          />
        <ChatList>
          {mockChats.map(chat => (
            <ChatListItem key={chat.id}>
              <Avatar src={chat.avatar} alt="avatar" />
              <ChatInfo>
                <ChatTopRow>
                  <ChatName>{chat.name}</ChatName>
                  <TimeStamp>{chat.time}</TimeStamp>
                </ChatTopRow>
                <ChatBottomRow>
                  <ChatPreview>{chat.messagePreview}</ChatPreview>
                  {chat.notifications > 0 && (
                    <NotificationBadge>{chat.notifications}</NotificationBadge>
                  )}
                </ChatBottomRow>
              </ChatInfo>
            </ChatListItem>
          ))}
        </ChatList>
      </SearchContainer>
      <MessageContainer>
        <img src={chatIcon} alt="Chat Icon" />
        <TextStyledUnder>เลือกบทสนทนา เพื่อดูข้อมูล</TextStyledUnder>
      </MessageContainer>
    </ChatContainer>
  );
}

export { ChatContainer, SearchContainer, StyledInput, ChatList, ChatListItem, Avatar, ChatInfo, ChatTopRow, ChatBottomRow, ChatName, ChatPreview, NotificationBadge, TimeStamp, TextStyledUnder, ClearIcon, };

export default Chat;