import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const containerStyle = {
  display: 'flex',
  alignItems: 'center', // Align items vertically in the center
  justifyContent: 'center', // Center items horizontally
  height: '30vh', // Take full viewport height
  padding: '20px', // Add some padding around
};
const photoStyle = {
  width: '20%', // Adjust based on your preference
  marginRight: '20px', // Add some space between the photo and the text
  borderRadius: '10px', // Optional: adds rounded corners to your photo
};
const textStyle = {
  width: '70%', // Adjust based on your preference
  textAlign: 'left', // Align the text to the left
};

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={containerStyle}>
        <img style={photoStyle} src="src/my_photo.jpg"/>
        <div style={textStyle}>
          <h1>Welcome</h1>
          <p>您好，我是盧玉隆，目前就讀於臺灣大學電機資安所</p>
          <p>這是我的期中專案，左圖是我的大頭貼，下方有留言板可以留言</p>
        </div>
      </div>
    </>
  )
}

export default App
