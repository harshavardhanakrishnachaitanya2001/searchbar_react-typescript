import React,{useState,ChangeEvent} from 'react'


const SearchBar = () => {
    const [searchTerm,setSearchTerm] = useState('')
    const readSearch = (e:ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
        console.log(searchTerm)
    }
  return (
    <div className='flex justify-center gap-x-5 items-center ml-0'>
      <input className='border-2 h-10 rounded-lg w-1/2 p-2 my-8'  onChange = {readSearch}/>
      <button>Search</button>
    </div>
  )
}

export default SearchBar
