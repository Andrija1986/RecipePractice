import MyContext from "./MyContext";
import {useState, useRef} from 'react'
import useFetch from "../hooks/useFetch";


const MyProvider = ({children}) => {

    const [searchInput, setSearchInput] =useState('')
    //const [search, setSearch] = useState('Doner');
    
    const search = useRef('pasta')
    const APP_KEY = process.env.REACT_APP_RECIPE_API_KEY
    const APP_ID = process.env.REACT_APP_APP_ID
    
    const [url, setUrl] = useState(`https://api.edamam.com/api/recipes/v2?type=public&q=${search.current}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const inputRef = useRef();

    let URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${search.current}&app_id=${APP_ID}&app_key=${APP_KEY}`

    const data = useFetch(url)

    const changeHandler = (e) => {
        setSearchInput(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        search.current = searchInput;
        setSearchInput('');

        URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${search.current}&app_id=${APP_ID}&app_key=${APP_KEY}`

        setUrl(URL)
        inputRef.current.focus();
    }

    const handleNext = () => {
        setUrl(data.next)
    }

  return (
    <MyContext.Provider value={{
        searchInput,
        setSearchInput,
        data,
        changeHandler,
        submitHandler,
        inputRef,
        search,
        handleNext,
    }}>
        {children}
    </MyContext.Provider>
  )
}

export default MyProvider