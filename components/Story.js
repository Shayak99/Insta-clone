

function Story({img, username}) {

    // console.log("img", img)
    return (
        <div>
            <img className="h-14 w-14 rounded-full p-[1.5px] 
            border-2 border-red-500 cursor-pointer object-contain transition transform duration-200 ease-out " 
            src={img} alt="text" />
            <p className="text-xs w-14 truncate text-center">{username}</p>
        </div>
    )
}

export default Story
