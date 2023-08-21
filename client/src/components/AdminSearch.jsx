import React, { useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs'

function AdminSearch({
  handleSearch,
  showOrderList,
  setShowOrderList,
  showSearchResults,
  setShowSearchResults,
}) {
  const [query, setQuery] = useState('')

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  useEffect(() => {
    if (query === '') {
      setShowOrderList(true)
      setShowSearchResults(false)
    }
  }, [query])

  const handleSearchClick = () => {
    handleSearch(query)
  }

  return (
    <div className='admin-search'>
      <input
        type='text'
        placeholder='Hľadať...'
        value={query}
        onChange={handleChange}
        onKeyDown={handleSearchClick}
      />
      <BsSearch className='search-icon' onClick={handleSearchClick} />
    </div>
  )
}

export default AdminSearch
