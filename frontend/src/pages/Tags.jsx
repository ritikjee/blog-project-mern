import TagsCard from "../components/TagsCard"
import { useState, useEffect } from "react"


function Tags() {

    const [tags, setTags] = useState([])

   const fetchTags = async () => {
         const res = await fetch(`${import.meta.env.VITE_API_BASE_URI}/topics/`)
         const data = await res.json()
         setTags(data.topics)
         
    }

    useEffect(() => {
        fetchTags()
    },[])
  return (
    <>
    <div className="flex  justify-center items-center">
      <div className="max-w-7xl w-full pt-5  flex flex-col gap-10 items-center justify-center ">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[40px] font-bold">Tags</h1>
          <p className="text-[20px] font-bold">Explore articles by tags</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
        {
            tags.map((tag) => (
                <TagsCard key={tag._id} id={tag._id} tag={tag.name} articles={tag.blogs.length} />
            ))
        }
        </div>
      </div>
    </div>
    </>
  )
}

export default Tags