import { useStyles } from '../public/assets/styles/styles.web'
import { Typography, TextField, Button } from '@material-ui/core'
import React, { useState } from 'react'
import { useEffect } from 'react'
import PageBase from './PageBase'

export default function HelloWorld() {
  const styles = useStyles()
  const [text, setText] = useState("input something")
  const [height, setHeight] = useState(0)

  useEffect(() => {
    setHeight(window.innerHeight)
  }, [])

  function buttonPress() {
    alert(text)
  }

  function content() {
    return (
      <div className={styles.root} style={{ height: height }}>
        <div>
          <Typography className={styles.textColor} variant="h3">
            Hello World by class style
          </Typography><br />
          <Typography style={{ color: 'red' }} variant="h3">
            Hello World by manual styling
          </Typography>
          <Typography className={styles.textColor} variant="h3">
            {text}
          </Typography><br />
          <TextField style={{ backgroundColor: "white" }} onChange={(e: { target: { value: React.SetStateAction<string> } }) => setText(e.target.value)} />
          <Button style={{ backgroundColor: "red", marginLeft: 16 }} onClick={buttonPress}>Click</Button>
        </div>
      </div>
    )
  }

  return <PageBase content={content()} />
}
