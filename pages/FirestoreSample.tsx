import { List, ListItem, ListItemText, Typography, Link } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { useStyles } from '../public/assets/styles/styles.web'
import { Member } from '../types/Types'
import { getMembers } from '../api/request/DatabaseRequest'
import PageBase from './PageBase'

export default function Index() {
    const styles = useStyles()
    const [members, setMembers] = useState<Member[]>([])

    useEffect(() => {
        updateList()
    }, [])

    function updateList() {
        getMembers().then(list => {
            setMembers(list)
        })
    }

    function content() {
        return (
            <div>
                <Typography className={styles.textColor} variant="h3">
                    Firestore Sample
                </Typography>
                <List>
                    {members.map((item) =>
                        <ListItem key={item.name}>
                            <Link href={"/" + item.uri} color="inherit">
                                <ListItemText primary={item.name + ": " + item.role} className={styles.textColor} />
                            </Link>
                        </ListItem>
                    )}
                </List>
            </div>
        )
    }

    return <PageBase content={content()} />
}