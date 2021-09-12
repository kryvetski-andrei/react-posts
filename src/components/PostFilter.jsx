import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
  return (
    <div className = "search-and-filter-container">
      <MyInput
        value={filter.query}
        onChange={event => setFilter({...filter, query: event.target.value})}
        placeholder="search..."
      />

      <MySelect 
        value = {filter.sort}
        onChange = {selectSort => setFilter({...filter, sort: selectSort})}
        defaultValue="Сортировка по:"
        options = {[
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По описанию'},
        ]}  
      />
    </div>
  )
}

export default PostFilter;