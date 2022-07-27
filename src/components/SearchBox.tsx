import React, { FC, useEffect, useState } from 'react'

interface SearchBoxProps<T> {
  find: (search: string) => Promise<T[]>
  optionKey: string
  labelKey?: string
  clickAction: (r: T) => void
}

const SearchBox = <T extends { [key: string]: any }>({
  find,
  optionKey,
  labelKey,
  clickAction
}: SearchBoxProps<T>) => {
  const [search, setSearch] = useState('')
  const [options, setOptions] = useState<T[]>([])

  useEffect(() => {
    if (search.length) {
      const handler = setTimeout(
        () => find(search).then(matched => setOptions(matched)),
        500
      )
      return () => clearTimeout(handler)
    }
  }, [search])

  return (
    <div className='search-box'>
      <input
        type='text'
        value={search}
        onChange={e => setSearch(e.target.value)}
        className='search-box__input'
      />
      {!!options.length && (
        <ul className='search-box__options options-list'>
          {options.map(r => (
            <li
              className='options-list__item'
              key={r[optionKey]}
              onClick={() => {
                setSearch('')
                setOptions([])
                clickAction(r)
              }}
            >
              {r[labelKey ? labelKey : optionKey]}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SearchBox
