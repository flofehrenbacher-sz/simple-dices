/** @jsx h */
import { Fragment, h } from 'preact'
import Dice from '../islands/dice.tsx'
import { asset } from '$fresh/runtime.ts'

export default function Home() {
  return (
    <div class="container">
      <link href={asset('/index.css')} rel="stylesheet" />
      <Dice />
    </div>
  )
}
