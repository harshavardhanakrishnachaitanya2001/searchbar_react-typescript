import React,{useState,ChangeEvent,MouseEvent} from 'react'
import { productList } from './productList'


const SearchBar = () => {
    const [searchTerm,setSearchTerm] = useState('')
    // 1. give type to state in <>
    // 2. store only ids of filtered products in state
    const [match,setMatch] = useState<number[]>([]);
    const readSearch = (e:ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }
    const handleSearch = (e:MouseEvent) => {
        e.preventDefault()
        const products = productList.filter(product => product.productName.toLowerCase().includes(searchTerm.toLowerCase()));
        // 3. map the products to get array of ids of products and store it in match
        console.log(products)
        const productIds = products.map(product => product.id)
        setMatch(productIds)
        console.log(match)
    }
    // 4. get filtered products, using the product ids in match array
    // function BookList() {
    //     const [bookIds, setBookIds] = useState([1, 2, 3]);
    //     const [books, setBooks] = useState([
    //       { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    //       { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    //       { id: 3, title: 'Pride and Prejudice', author: 'Jane Austen' },
    //     ]);
      
         const filteredProducts = productList.filter(product => match.includes(product.id));
      
    //     // Other code to render the book list
    //   }
  return (
    <div>
    <div className='flex justify-center gap-x-5 items-center ml-0'>
        <input className='border-2 h-10 rounded-lg w-1/2 p-2 my-8' value = {searchTerm}  onChange = {readSearch}/>
        <button onClick  = {handleSearch}>Search</button>
      </div>
      {/* 5. use the new filtered products array to render h3s. */}
      {filteredProducts.map(
        item => (
            <div key={item.id} className='text-center leading-relaxed'>
                <h3><span className="font-bold">Product:</span> {item.productName}</h3>
                <h3><span className="font-bold">quantity:</span> {item.quantity}</h3>
                <h3><span className="font-bold">Price:</span> {item.price}</h3>
                <h3><span className="font-bold">Description:</span> {item.productDescription}</h3>
            </div>
        )
      )}
    </div>
  )
}


 



export default SearchBar
