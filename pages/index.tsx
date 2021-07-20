import { List, ListItem, ListItemText, Typography, Link } from '@material-ui/core'
import React from 'react'
import { useStyles } from '../public/assets/styles/styles.web'
import PageBase from './PageBase'

const samples = [{ "title": "Hello World", "uri": "HelloWorld" },
{ "title": "Grid", "uri": "Grid" },
{ "title": "App Bar", "uri": "AppBar" },
{ "title": "Firestore sample", "uri": "FirestoreSample" }]
export default function Index() {
    const styles = useStyles()

    function content() {
        return (
            <div>
                <Typography className={styles.textColor}>
                    The sample codes for web page. You can see this with AIZero Training Platform<br />
                    You can see this as a sample of "List" too
                </Typography>
                <List>
                    {samples.map((item) =>
                        <ListItem key={item.title}>
                            <Link href={"/" + item.uri} color="inherit">
                                <ListItemText primary={item.title} className={styles.textColor} />
                            </Link>
                        </ListItem>
                    )}
                </List>
            </div>
        )
    }

    return <PageBase content={content()} />
}