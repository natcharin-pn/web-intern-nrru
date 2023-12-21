// openchat.jsx
import React, { useState } from 'react';
import { Input } from 'antd';
import styled from 'styled-components';
import { ChatContainer, SearchContainer, StyledInput, ChatList, ChatListItem, Avatar, ChatInfo, ChatTopRow, ChatBottomRow, ChatName, ChatPreview, NotificationBadge, TimeStamp, ClearIcon } from './chat'; 
import avatarImage from '../assets/avatar.png'; 
import SearchIcon from '../assets/Search.svg';
import PicCar from '../assets/Chat Card.png'; 
import FileIcon from '../assets/File.svg'; 
import Icon from '../assets/Icon.svg'; 
import StickerIcon from '../assets/Sticker.svg'; 



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
  // Additional mock chat entries based on the image
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

const MessageContainer = styled.div`
  grid-column: 2;
  background-color: #FFFBF8;
  border-radius: 0px 24px 24px 0px;
  width: 708px;
  height: 804px;
  position: relative;
`;

const TopHistoryChatStyle = styled.div`
    height: 88px;
    width: 100%;
    display: inline-flex; 
    padding: 16px 32px;
    justify-content: center;
    align-items: center;
    border-radius: 0px 24px 24px 0px;
    background: #FFEEE7;
    justify-content: flex-start;
    gap: 24px;
`;

const HistoryAvatar = styled.img`
    border-radius: 50%; 
    width: 56px; 
    height: 56px; 
    gap: 8px;
`;

const HistoryChatName = styled.span`
    font-family: Prompt;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: #150F0B;
`;

const MainHistoryChat = styled.div`
    height:716px;
    padding: 0px 8px 32px 32px; 
`;

const StyledInputChat = styled(Input)`
    display: flex;
    align-items: center;
    font-weight: 400;
    width: 644px;
    height: 52px;
    padding: 8px 16px;
    background: #fff;
    border-radius: 8px;
    margin-top: 24px;
    color: #F36B24;
    font-family: 'Prompt', sans-serif;
    border: 1px solid #FFC4AA;
    outline: none;

  .ant-input::placeholder {
  color: #FFC4AA;
}

  .ant-input {
    font-size: 16px;
    font-family: 'Prompt';
    border: none;
    box-shadow: none;
    outline: none;
    color: #F36B24;
    flex-grow: 1; 
  }
`;

const SuffixIcons = () => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <img src={FileIcon} alt="File" style={{ marginLeft: 8, cursor: 'pointer',width: '32px', height: '32px' }} onClick={() => { console.log("File Icon Clicked"); }} />
    <img src={Icon} alt="Icon" style={{ marginLeft: 8, cursor: 'pointer',width: '26px', height: '26px'  }} onClick={() => { console.log("Icon Clicked"); }} />
    <img src={StickerIcon} alt="Sticker" style={{ marginLeft: 8, cursor: 'pointer' ,width: '32px', height: '32px' }} onClick={() => { console.log("Sticker Icon Clicked"); }} />
  </div>
);

const MainChat = styled.div`
  height: 603px;
  margin-top: 30px;
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

const AreaChat = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: flex-end; 


`;

const TimeHistoryChat= styled.p`
    text-align: center;
    font-family: Prompt;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: 14.4px;
    color: #717171;
`;

const CardImage = styled.img`
    width: 240px;
    height: auto;
`;

const CardContent = styled.p`
  padding: 12px 16px;
  background: #F36B24; 
  color: #fff; 
  font-family: 'Prompt', sans-serif; 
  font-size: 14px; 
  font-style: normal; 
  font-weight: 400; 
  line-height: 16.8px; 
  width: 322px; 
  border-radius: 2px 16px 16px 16px; 
  display: flex; 
  align-items: flex-start; 
`;

const HistoryTimeContent = styled.p`
font-family: Prompt;
font-size: 10px;
font-style: normal;
font-weight: 300;
line-height: 12px; 
color:#9BAAB1;
padding: 8px 0px 16px 0px;
`;


function Openchat() {
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
            onChange={handleInputChange}
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
            <TopHistoryChatStyle> 
                <HistoryAvatar src={avatarImage} alt="avatar" />
                <HistoryChatName>สวัสดี วันศุกร์</HistoryChatName>
            </TopHistoryChatStyle>
            <MainHistoryChat>
                <MainChat>
                    <AreaChat>
                    <TimeHistoryChat> 29 สิงหาคม 2566</TimeHistoryChat>
                    <CardImage src={PicCar} alt="Flooded Street" />
                    <HistoryTimeContent>05.30</HistoryTimeContent>
                    <CardContent>
                        น้ำท่วมสูง ช่วงเวลาเช้ามืด จนถึงตอนนี้น้ำยังไม่ลดโดยเฉพาะตอนเลิกงาน รถติดมากกกกกกกกกกก

                        ตำแหน่งคือ :
                        88/21 ถนน ติวานนนท์ ตำบลตลาดขวัญ 
                        อำเภอเมือง จังหวัด นนทบุรี 11000

                        รบกวนเร่งดำเนินการให้ด้วยครับ
                        ขอบคุณครับ
                    </CardContent>
                    <HistoryTimeContent>05.30</HistoryTimeContent>
                    <CardContent>
                        น้ำท่วมสูง ช่วงเวลาเช้ามืด จนถึงตอนนี้น้ำยังไม่ลดโดยเฉพาะตอนเลิกงาน รถติดมากกกกกกกกกกก

                        ตำแหน่งคือ :
                        88/21 ถนน ติวานนนท์ ตำบลตลาดขวัญ 
                        อำเภอเมือง จังหวัด นนทบุรี 11000

                        รบกวนเร่งดำเนินการให้ด้วยครับ
                        ขอบคุณครับ
                    </CardContent>
                    <HistoryTimeContent>05.30</HistoryTimeContent>
                    </AreaChat>
                </MainChat>
                <StyledInputChat
                  placeholder="Aa"
                  onChange={handleInputChange}
                  suffix={<SuffixIcons />}
            />
            </MainHistoryChat>
        </MessageContainer>
        </ChatContainer>
    );
}

export default Openchat;
