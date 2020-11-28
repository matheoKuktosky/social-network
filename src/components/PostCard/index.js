import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import CardActionArea from '@material-ui/core/CardActionArea'
import FavoriteIcon from '@material-ui/icons/Favorite';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import MessageIcon from '@material-ui/icons/Message';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(2),
    },
    subheader: {
        display: 'flex',
        alignItems: 'center'
    },
    caption: {
        marginRight: theme.spacing(1)
    },
    message: {
        height: 'auto',
        marginBottom: theme.spacing(2),
        padding: '0 24px'
    },
    image: {
        height: 300,
        width: 'auto',
        maxWidth: '100%'
    },
    content: {
        padding: 0
    },
    cardArea: {
        display: 'flex'
    },
    favorite: {
        marginLeft: 'auto'
    }
}))

function PostCard({post}){
    const classes = useStyles();

    return(
        <Card className={classes.root}>
            <CardHeader
             avatar={<Avatar src={post.author.avatar} />}
             title={<Typography variant="h6">{post.title}</Typography>}
             subheader={
                 <div className={classes.subheader}>
                     <Typography variant="caption" className={classes.caption}>
                    {`Posted by`}
                    </Typography>
                    <Typography variant="subtitle2" className={classes.caption}>
                        {post.author.name}
                    </Typography>
                    <Typography variant="caption" className={classes.caption}>
                    {post.date}
                    </Typography>
                 </div>                
                 }
            />
            <CardContent className={classes.content}>
                    <Typography variant="body2" className={classes.message}>
                        {post.hashtags}
                    </Typography>
            </CardContent>
            <CardActionArea className={classes.cardArea}>
                <img src={post.image}  className={classes.image}/>
            </CardActionArea>
            <CardActions disableSpacing>
                <IconButton aria-label="like">
                    <FavoriteIcon/>
                    <Typography
                        style={{cursor: 'pointer'}}
                        color="textSecondary"
                        variant="body2"
                    >
                        {'10'}
                    </Typography>
                </IconButton>
                <IconButton aria-label="comment">
                    <MessageIcon/>
                    <Typography
                        className={classes.reactions}
                        color="textSecondary"
                        variant="body2"
                    >
                        {'30'}
                    </Typography>
                </IconButton>
                <IconButton aria-label="favorite" className={classes.favorite}>
                    <BookmarkIcon/>
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default PostCard;