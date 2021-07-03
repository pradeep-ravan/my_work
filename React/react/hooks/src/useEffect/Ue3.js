//  3rd variation
import React,{useEffect,useState} from 'react'
import './Ue3.css'
function Ue3() {
    const [count,setCount] = useState(0);
    const [darkMode,setDarkMode] = useState(false);
    useEffect(() => {
        console.log('useEffect');
        document.title = count;
    },[count])
    console.log('render');
    const handleClick = ()=>{
        setCount(count+1);
    }
    const handleChange = ()=>{
        setDarkMode(!darkMode);
    }
    return (
        <div className={darkMode?'view dark-mode':'view'}>
            <label htmlFor='darkMode'>Dark Mode</label>
            <input name='darMode' type='checkbox' checked={darkMode} onChange={handleChange}/>
            <button onClick={handleClick} >{count}</button>
        </div>
    )
}

export default Ue3