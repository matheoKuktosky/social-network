import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PostCard from '../../../components/PostCard'

const useStyles = makeStyles(theme =>({
    root: {

    }
}));

const posts = [
    { id: 1, 
      author: {
          id: 1,
          name: 'Oleg Korolenko',
          username: 'olegkorolenko',
          avatar: '/images/avatars/avatar_1.jpeg'
      },
      title: 'To my friend Ozob',
      date: 'April 7, 2020',
      description: 'Lets share a bottle of Krakovia!',
      hashtags: '#putin, #krakovia, #patati&patata',
      image: '/images/posts/post1.jpeg'
    },
    { id: 2, 
        author: {
            id: 1,
            name: 'Oleg Korolenko',
            username: 'olegkorolenko',
            avatar: '/images/avatars/avatar_1.jpeg'
        },
        title: 'Im lost, help me!',
        date: 'April 8, 2020',
        description: 'That damn Krakovia hit me hard! Now I´m even seeing Ozob inside a game!',
        hashtags: '#hangover, #krakovia, #Cyberpunk2077',
        image: '/images/posts/post2.jpeg'
    }
];

function Feed(){
    const classes = useStyles();

    return(
        <div className={classes.root}>
            {
                posts.map(post => (<PostCard key={post.id} post={post} />))
            }            
        </div>
    )
}

export default Feed;