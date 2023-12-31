import React, { useEffect, useState } from 'react'
import * as Catalyst from '@idanstark42/catalyst'

import './index.css'

// import { load } from './google-sheets-api'
import { COMING_SOON } from './topbar-texts'

const LETTER_OPTIONS = 'אבגדהוזחטיכלמנסעפצקרשת'.split('')

function LettersBar ({ selected = [], onSelect = () => {} }) {
  return <div className='letters-bar'>
    {LETTER_OPTIONS.map(letter => <div className={`letter ${selected.includes(letter) ? 'selected' : ''}`} onClick={() => onSelect(letter)}>{letter}</div>)}
  </div>
}

function TopBar () {
  const [text, setText] = useState('')
  const [letter, setLetter] = useState(LETTER_OPTIONS[Math.floor(Math.random() * LETTER_OPTIONS.length)])

  useEffect(() => {
    setText(COMING_SOON[letter])
  }, [letter])

  return <div className='top-bar'>
    <div className='text'>{text}</div>
    <LettersBar selected={[letter]} onSelect={setLetter} />    
  </div>
}

// function Lipogram ({ text = '', author = 'אנונימי' }) {
//   const missingLetters = 'אבגדהוזחטיכלמנסעפצקרשת'.split('').filter(letter => !text.includes(letter))

//   return <div className='lipogram'>
//     <div className='text'>{text}</div>
//     <div className='author'>מאת: {author}</div>
//     <LettersBar selected={missingLetters} />
//   </div>
// }

Catalyst.init({
  pages: {
    '/*': function Home () {
      // const [entries, setEntries] = React.useState([])

      // useEffect(() => {
        // (async () => {
          // const entries = (await load()).responses
          // setEntries(entries)
        // }) ()
      // })
      
      return <>
        <h1>ליפוגרמות</h1>
        <TopBar />
        <div className='button-container'>
          <a className='button' href='https://forms.gle/AEtYgghFXrVPP4gf8'>
            שלחו ליפוגרמות כאן
          </a>
        </div>
        {/* <div className='lipograms'>
          {entries.map(entry => <Lipogram text={entry['טקסט']} author={entry['שם']} />)}
        </div> */}
      </>
    }
  },
  theme: {
  }
})