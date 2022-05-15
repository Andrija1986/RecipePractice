import { useContext } from 'react'
import { useEffect } from 'react'
import MyContext from '../context/MyContext'

const Form = () => {

  const {
    searchInput,
    changeHandler,
    submitHandler,
    inputRef} = useContext(MyContext);

    
    useEffect(() => {
      inputRef.current.focus();
    }, [inputRef])

  return (
    <form>
      <input 
      type="text"
      placeholder='Search'
      ref={inputRef}
      value={searchInput} 
      onChange={changeHandler}/>
      <button onClick={submitHandler}>Submit</button>
    </form>
  )
}

export default Form