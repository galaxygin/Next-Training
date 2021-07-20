import { ImageList, ImageListItem, ImageListItemBar, Link } from '@material-ui/core'
import React from 'react'
import { useStyles } from '../public/assets/styles/styles.web'
import PageBase from './PageBase'

const founders = [{ "name": "Miguel", "role": "CEO", "img": "", "uri": "" },
{ "name": "Ginga", "role": "CTO", "img": "", "uri": "" }]
export default function GridSample() {
    const styles = useStyles()

    function content() {
        return (
            <ImageList>
                {founders.map((item) =>
                    <ImageListItem key={item.name}>
                        <img src={item.img} alt={item.name} />
                        <Link href={"/" + item.uri} color="inherit">
                            <ImageListItemBar title={item.name} subtitle={item.role} className={styles.textColor} />
                        </Link>
                    </ImageListItem>
                )}
            </ImageList>
        )
    }

    return <PageBase content={content()} />
}