import { Box, Skeleton, Stack } from '@mui/material';
import Post from './Post';
import { useState } from 'react';

const posts = [
  {
    title: "Apartment prices rise on news of Dubai Creek Tower revamp",
    description: " Meant to be the centrepiece of Emaar's Dubai Creek Harbour development, work on Dubai Creek Tower never progressed beyond the foundations ",
    imageUrl: "post2.webp"
  },
  {
    title: "Dubai development awakens after a decade of lying dormant",
    description: " The new GJ Properties tower will open by Dubai's Sheikh Zayed Road and metro line ",
    imageUrl: "post1.webp"
  },
  {
    title: "Aldar plans European moves after unveiling record sales",
    description: "Aldar Properties is planning to expand into Europe after posting record sales for the year so far, its chairman said on Monday.Sales at the Abu Dhabi-based real estate developer reached nearly AED8 billion ($2.2 billion) in the third quarter, driving a 48 percent increase in net profit.For the year to September 30, sales hit AED19.4 billion, while 11 developments were launched during the period.",
    imageUrl: "post3.webp"
  }
]

export default function Feed() {
  const [loading, setLoading] = useState(true)
  setTimeout(() => {
    setLoading(false)
  }, 3000)
  return (
     <Box flex={4} sx={{ padding: "20px" }}>
      {loading 
          ? (
               posts.map(post => (
                <Stack>
                    <Skeleton variant="text" height={100}/>
                    <Skeleton variant="text" height={20}/>
                    <Skeleton variant="text" height={20}/>
                    <Skeleton variant="rectangular" height={300}/>
                </Stack>
                ))
            )
          : (
            posts.map(post => 
                          <Post post={post} key={post.title}/>
                      )
          )}
     </Box>
  );
}