import React, {useRef, useState} from 'react'

export default function HookUseRef() {

    const [number, setNumber] = useState(0);
    let tongRef = useRef(0);//Lưu lại các giá trị thay đổi khi setState

    const inputUserName = useRef(null);
    const inputPassword = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault(); //Ngăn chặn reload brower khi submit
        let userName = inputUserName.current.value;
        let password = inputPassword.current.value;
        inputUserName.current.style.color = 'blue';
        inputPassword.current.style.color = 'blue';
        console.log('userName', userName);
        console.log('password', password);
    }

  return (
    
    <div className='container'>
        <div className='form-control'>
            <p>Nhap vao 1 so</p>
            <input className='form-control' onChange={(e) => {
                setNumber(e.target.value);
            }}/>
            <button className='btn btn-success' onClick={()=>{
                tongRef.current = tongRef.current + Number(number);
                console.log('tongRef', tongRef);
            }}>Tinh tong</button>
        </div>
        <hr/>
        <div>
        <form onSubmit={handleSubmit}>
            <h3>Form UseRef</h3>
            <div className='form-group'>
                <p>userName</p>
                <input ref={inputUserName} className='form-control' id='userName' name='userName'/>
            </div>
            <div className='form-group'>
                <p>password</p>
                <input ref={inputPassword} className='form-control' id='password' name='password'/>
            </div>
            <div className='form-group'>
                <button type='submit' className='btn btn-success'>submit</button>
            </div>
        </form>
        </div>
    </div>
  )
}
