/** @jsx h */
import { h } from 'preact'
import { useEffect, useState } from 'preact/hooks'

import { Button } from '../components/button.tsx'

export default function Dice() {
  const [diceNumber, setDiceNumber] = useState<null | number>()
  const [isDicing, setIsDicing] = useState(false)
  const [isForceUpdate, setIsForceUpdate] = useState(false)

  useEffect(() => {
    if (isDicing) {
      setTimeout(() => {
        setDiceNumber(Math.ceil(Math.random() * 6))
        setIsForceUpdate((prev) => !prev)
      }, 300)
      setTimeout(() => {
        setIsDicing(false)
      }, 3000)
    }
  }, [isDicing, diceNumber, isForceUpdate])

  return (
    <div class="dice">
      <p class="number" style={isDicing ? 'opacity: 0.5' : undefined}>
        {diceNumber ?? '_'}
      </p>
      <Button disabled={isDicing} onClick={() => setIsDicing(true)}>
        Würfeln
      </Button>
    </div>
  )
}
