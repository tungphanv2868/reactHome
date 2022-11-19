import React, { useState, useEffect } from 'react'
import ToDoAppRFC from './ToDoAppRFC';

export default function HookUseEffect() {

    const [number, setNumber] = useState(0);
    const [like, setLike] = useState(0)
    // const timeout = setInterval(()=>{
    //     console.log(1);
    // }, 1000);

    useEffect( () => {
        //Chạy sau khi giao diện được tạo
        //Thay thế cho componentDidMount và componentDidUpdate tương ướng react class componnet
        // console.log('componentDidMount & componentDidUpdate');
    })

    useEffect(()=>{
        //Chạy 1 lần duy nhất sau khi render
        //Thay thế componentDidMount láy dữ liệu từ backend về
        console.log('componentDidMount');

        return () => {
            //Xóa các hàm chạy ngầm khi component mất đi
            // console.log('willUnmount');
            // clearInterval(timeout);
        }
    },[])

    useEffect(()=>{
        //kiểm tra giá trị number thay đổi thì sẽ chạy lại hàm này (Giống componentDidUpdate)
        console.log('componentDidUpdate number');
    },[number])//gái trị thay đổi thì hàm này mới chạy lại (so sánh shallow compare)

    console.log('render');
  return (
    <div className='container'>
        <p>{number}</p>
        <button className='btn btn-success' onClick={()=> {
            setNumber(number + 1);
        }}>+</button>
        <hr/>
        <p>Like: {like}</p>
        <button className='btn btn-danger' onClick={()=> {
            setLike(like + 1);
        }}>+</button>

        <hr/>
        <ToDoAppRFC/>
    </div>
  )
}
