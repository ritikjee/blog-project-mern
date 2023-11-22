import { useState } from "react"


function AddBlog() {
    const [show, setShow] = useState(false)
    const array = ["science", "maths", "technology", "fantasy", "horror", "education", "stories", "newton", "china", "india", "america", "aisa",]
    const arr = []
    const changeColor = (e) => {
        e.target.style.color = "white"
        e.target.style.backgroundColor = "#2270E2"
        arr.push(e.target.innerHTML)
        console.log(arr)
    }
    return (
        <>
            <div className='flex justify-center sm:mx-[70px] pb-10 items-center'>
                <div className='max-w-7xl w-full  pt-5 px-7 flex flex-col items-center justify-center'>
                    <div className="text-[20px] sm:text-[35px]  font-bold">
                        Add Blog
                    </div>
                    <div className=" flex flex-col">
                        <label htmlFor="title" className="py-3 text-[15px] font-bold text-gray-600">Title</label>
                        <input name="title" id="title" type="text" className="w-full lg:w-[800px] border-2 border-gray-300  h-[50px] p-5  text-[20px] font-bold" placeholder="Title" />
                    </div>
                    <div className="pb-3 flex flex-col">
                        <label htmlFor="snippet" className="py-3 text-[15px] font-bold text-gray-600"  >Snippet</label>
                        <input name="snippet" id="snippet" type="text" className="w-full lg:w-[800px] h-[50px] p-5 border-2 border-gray-300 text-[20px] font-bold" placeholder="Snippet" />
                    </div>
                    <div className="flex  flex-col">
                        <label htmlFor="comment" className="py-3 text-[15px] font-bold text-gray-600"  >Content</label>
                        <textarea name="commemt" id="comment" className="w-full lg:w-[800px] h-[400px] border-2 border-gray-300  p-5 text-[20px] font-bold" placeholder="Write blog content..." />
                    </div>
                    <div className="text-[20px] font-bold pt-10 pb-5">
                        Topics
                    </div>
                    {/* <div className="flex  gap-10">
                        {
                            array.map((item, index) => (
                                <button className="border-[1px] border-[#2270E2] p-1 rounded-2xl text-[#2270E2]" key={index} onClick={(e) => {
                                    changeColor(e)
                                }} >{item}</button>

                            ))
                        }
                    </div> */}
                    <p className="pt-10 pb-5 text-[15px]">Could not find your favourite topic?</p>
                    <button className="bg-[#2270E2] text-xl flex font-semibold text-white px-[18px] py-[8px] rounded-lg"
                        onClick={() => {
                            setShow(true)
                        }
                        }
                    >
                        Add Your Topic
                    </button>
                </div>
            </div>

            {show && <div className="h-screen w-screen z-50 bg-black bg-opacity-50  fixed inset-0 flex items-center justify-center">
                <div className=" flex flex-col  rounded-xl bg-white  p-24">
                    <label htmlFor="title1" className="py-3 text-[15px] font-bold text-gray-600">Title</label>
                    <input name="title1" id="title1" type="text" className="w-[300px] sm:w-[400px]  lg:w-[800px] border-2 border-gray-300  h-[50px] p-5  text-[20px] font-bold" placeholder="Title" />
                    <div className="py-5 flex items-center justify-center gap-5">
                        <button className="bg-[#2270E2] py-[8px] px-[18px] text-xl  font-semibold text-white  rounded-lg">
                            Add
                        </button>
                        <button className="py-[8px] px-[18px] text-xl font-semibold text-white  rounded-lg bg-red-600"
                            onClick={() => {
                                setShow(false)
                            }
                            }
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default AddBlog