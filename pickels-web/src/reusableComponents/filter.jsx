import '../styles/filter.css'
import SearchIcon from '@mui/icons-material/Search';
const SearchFilter=()=>{
return(<div className="filter">
<span><input placeholder='search for a product'/></span>
<div className='search-icon'><SearchIcon/></div>
</div>)
}
export default SearchFilter 