import React,{useState} from 'react';
import classes from './Auth.module.css'
const Auth =()=> {
    const [name, setName] = useState([]);
    const [age, setAge] = useState([]);
    const [mail, setMail] = useState([]);
    const [submit, setSubmit] = useState([])

    const NameHandler=(event)=>{
        setName(event.target.value);
    }

   const AgeHandler=(event)=>{
        setAge(event.target.value)
   }

   const MailHandler =(event)=>{
        setMail(event.target.value)
   }

   const submitHandler=(event)=>{
       event.preventDefault();
        setSubmit([name,age,mail])

       setMail([]);
       setName([]);
       setAge([]);
   }
console.log(submit)

    return <form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor="name"> Entered your name</label>
        <input id='name' type="text" value={name} onChange={NameHandler} />
        <label htmlFor="age">Entered your age</label>
        <input id='age' type="text" value={age} onChange={AgeHandler}/>
        <label htmlFor="email" >entered mail or number</label>
        <input id='email' type="email" value={mail} onChange={MailHandler}/>
        <div className={classes.button}>
        <button>cancle</button>
        <button type='submit'>enter</button>
        </div>
    </form>
}
export default Auth;
