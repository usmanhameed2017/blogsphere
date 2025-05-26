import React from 'react'
import Hero from '../components/hero';
import CardBS from '../components/card';

function Home() 
{
    return (
        <div>
            <Hero />
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>

                <CardBS 
                imgSrc="https://source.unsplash.com/random/400x300"
                title="A Journey Through React"
                description="Discover the power of React components and build stunning UIs."
                likes={120}
                comments={45}
                authorImg="https://i.pravatar.cc/150?img=5"
                authorName="John Doe" />

                <CardBS 
                imgSrc="https://source.unsplash.com/random/401x300"
                title="Express Your Ideas"
                description="Learn how to express yourself with a modern blogging platform."
                likes={98}
                comments={33}
                authorImg="https://i.pravatar.cc/150?img=7"
                authorName="Jane Smith" />

                <CardBS 
                imgSrc="https://source.unsplash.com/random/401x300"
                title="Express Your Ideas"
                description="Learn how to express yourself with a modern blogging platform."
                likes={98}
                comments={33}
                authorImg="https://i.pravatar.cc/150?img=7"
                authorName="Jane Smith" />              
            </div>            
        </div>
    );
}

export default Home;