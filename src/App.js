import React from 'react'
import {Button} from 'antd'
import { SearchOutlined } from '@ant-design/icons';

export default function App() {
  return (
    <>
      <h1>Ant Design Tutorial</h1>
      <Button
        icon={<SearchOutlined />}
        htmlType="button" 
        shape='circle'
        size="large"
        danger 
        onClick={()=>console.log('testando')}>Um Botão</Button>
    </>
  )
}
