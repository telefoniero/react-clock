import React, { FC, useEffect, useState } from 'react'

interface SearchBoxProps<T> {
  find: (search: string) => Promise<T[]>
  optionKey: string
  labelKey?: string
}

const SearchBox = <T extends {[key: string]: any},>({ find, optionKey, labelKey }: SearchBoxProps<T>) => {
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
    <div className='select-region'>
      <input
        type='text'
        value={search}
        onChange={e => setSearch(e.target.value)}
        className='select-region__input'
      />
      {options.length && (
        <ul className='select-region__options region-options'>
          {options.map(r => (
            <li className='region-options__item' key={r[optionKey]}>
              {r[labelKey ? labelKey : optionKey]}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SearchBox
