import React,{useState} from 'react';

const UseStateDemo1: React.FC = () => {
    const [inputVal,setInputVal] = useState<string>('');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
    }
    const onSubmit = (event:React.FormEvent) => {
        event.preventDefault();
        alert(inputVal);
        setInputVal('');
    }
return(

<form onSubmit={onSubmit}>
<input type="text" value={inputVal} onChange={handleChange}/>
<button type="submit">Submit</button>
</form>

);
};
export default UseStateDemo1;