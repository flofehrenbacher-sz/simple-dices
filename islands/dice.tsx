/** @jsx h */
import { h } from 'preact'
import { useEffect, useState } from 'preact/hooks'

import { Button } from '../components/button.tsx'

export default function Dice() {
  const [diceNumber, setDiceNumber] = useState<null | number>()
  const [dicingCounter, setDicingCounter] = useState(0)
  const [hasTriggeredDicing, setHasTriggeredDicing] = useState(false)
  const [isForceUpdate, setIsForceUpdate] = useState(false)

  useEffect(() => {
    if (hasTriggeredDicing) {
      setTimeout(() => {
        if (dicingCounter <= 9) {
          setDiceNumber(Math.ceil(Math.random() * 6))
          setIsForceUpdate((prev) => !prev)
          setDicingCounter((prev) => prev + 1)
        } else {
          setHasTriggeredDicing(false)
          setDicingCounter(0)
        }
      }, 300)
    }
  }, [diceNumber, dicingCounter, hasTriggeredDicing, isForceUpdate])

  const isDicing = dicingCounter > 0

  return (
    <div class="dice">
      <p class="number" style={isDicing ? 'opacity: 0.5' : undefined}>
        {diceNumber ?? '_'}
      </p>
      <Button disabled={isDicing} onClick={() => setHasTriggeredDicing(true)}>
        Würfeln
      </Button>
    </div>
  )
}
