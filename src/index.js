import React, { useEffect, useState } from 'react'
import * as Catalyst from '@idanstark42/catalyst'

import './index.css'

import { load } from './google-sheets-api'
import { TOPBAR_TEXTS } from './topbar-texts'

function TopBar () {
  const [text, setText] = useState('')
  const [letter, setLetter] = useState('א')
  const LETTER_OPTIONS = 'אבגדהוזחטיכלמנסעפצקרשת'.split('')

  useEffect(() => {
    setText(TOPBAR_TEXTS[letter])
  }, [letter])

  return <div className='top-bar'>
    <div className='text'>{text}</div>
    <div className='letter-options'>
      {LETTER_OPTIONS.map((letterOption) => <div className={`letter ${letterOption === letter ? 'selected' : ''}`} onClick={() => setLetter(letterOption)}>{letterOption}</div>)}
    </div>
  </div>
}

Catalyst.init({
  pages: {
    '/*': function Home () {
      const [entries, setEntries] = React.useState([])

      useEffect(() => {
        (async () => {
          const entries = (await load()).responses
          setEntries(entries)
        }) ()
      })
      
      return <div className='home'>
        <h1>ליפוגרמות</h1>
        <TopBar />
      </div>
    }
  },
  theme: {
  }
})