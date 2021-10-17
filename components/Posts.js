import Post from './Post';

const dummydata = [
    { 
        id:"123",
        username :"Shayak",
        userimg : "https://links.papareact.com/3ke",
        img:"https://links.papareact.com/3ke",
        caption : "This is going to be an awesome project...!"
    }
]

function Posts() {
    return (
        <div>
            {dummydata && dummydata.map(item => (
                <>
                <Post key={item.id} 
                id={item.id} 
                username={item.username} 
                userimg={item.userimg}
                img={item.img}
                caption={item.caption}
                />
                <Post key={item.id} 
                id={item.id} 
                username={item.username} 
                userimg={item.userimg}
                img={item.img}
                caption={item.caption}
                />
                <Post key={item.id} 
                id={item.id} 
                username={item.username} 
                userimg={item.userimg}
                img={item.img}
                caption={item.caption}
                />
                </>
            ))}
           
        </div>
    )
}

export default Posts
