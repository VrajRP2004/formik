import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Singup(){
    const navigate = useNavigate();
    const [credentials,setcredentials] = useState({name:"",email:"",password:""});
    const [error,seterror] = useState("");
    const [perror,setperror] = useState("");
    function onchange(e){
        setcredentials({...credentials,[e.target.name]:e.target.value})
        if(e.target.name==='email'){
            const emailregulate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!emailregulate.test(e.target.value)){
                seterror(`Enter valid email`)
            }else{
                seterror("")
            }
        }
        if(e.target.name==='password'){
            if(e.target.value.length<8){
                setperror(`Password length must be at least 8`)
            }else{
                setperror("")
            }
        }
        
    }
    function onsubmit(e){
        if(error==="" && perror===""){
            e.preventDefault()
            alert(`name: ${credentials.name}\nemail: ${credentials.email}\npassword: ${credentials.password}`)
            window.location.reload();
        }else{
            alert('Enter valid input')
        }
    }
    function changepage(){
        navigate('/')
    }
    return(
        <div style={style.container}>
        <form style={style.form}>
            <div style={style.inputcontainer}>
                <label htmlFor="">Name</label>
                <input value={credentials.name} name='name' onChange={onchange} style={style.input} type="text" />
            </div>
            <div style={style.inputcontainer}>
                <label htmlFor="">Email</label>
                <input value={credentials.email} name='email' onChange={onchange} style={style.input} type="text" />
                {error && <p style={{color:"red"}}>{error}</p>}
            </div>
            <div style={style.inputcontainer}>
                <label htmlFor="">Password</label>
                <input value={credentials.password} name='password' onChange={onchange} style={style.input} type="password" />
                {perror && <p style={{color:"red"}}>{perror}</p>}

            </div>
            <button type='button'style={style.button} onClick={onsubmit}>SignIn</button>
            <button type='button'style={style.button} onClick={changepage}>Login</button>
        </form>
        </div>
    );
}
const style = {
    container:{
        width:'300px',
        textAlign:"center",
        borderRadius:"8px",
        margin:"auto",
        padding:"20px",
        border:"1px solid black"
    },
    form:{
        display:"flex",
        flexDirection:"column"
    },
    inputcontainer:{
        marginBottom:'15px'
    },
    input:{
        width:"100%",
        padding:"8px",
        marginTop:"5px",
        borderRadius:"4px",
        border:"1px solid black"
    },
    button:{
        padding: '10px',
        backgroundColor: '#4CAF50',
        color: '#fff',
        marginTop:'10px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    }


}
export default Singup