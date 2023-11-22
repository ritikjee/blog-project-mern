function Blog() {
    return (
        <div className='flex justify-center sm:m-[70px] pb-10 items-center'>
            <div className='max-w-7xl w-full  pt-5 px-7 flex flex-col items-center justify-center'>
                <img src="https://10web-site.ai/24/wp-content/uploads/sites/27/2023/11/yoast_free_vs_premium_jAy0cqn8.webp" alt="Header-Image" className="sm:mx-[70px]" />
                <div>
                    <div className="text-[20px] sm:text-[35px] py-[35px] font-bold">
                        Creating High-Quality Content with Limited Resources
                    </div>
                </div>
                <div className="text-[13px] pb-[35px] font-bold">
                    No Comments
                </div>
                <div>
                    <div className="text-[16px] text-[#4D4D4D]">
                    Content marketing is a powerful tool for businesses to attract and retain customers. However, creating
                    high-quality content can be a challenge, especially for small businesses with limited resources. In this
                    post, we discuss the importance of content marketing and how businesses can create effective content with
                    limited resources.
                    <br/>
                    We provide tips on how to create a content strategy, how to repurpose content, and how to leverage user-generated
                    content. By following these tips, businesses can create high-quality content that will engage their audience and
                    drive conversions.
                    </div>
                </div>

                    <div className="text-[20px] pt-10 pb-5 font-bold">
                        More like this blog
                    </div>
                <div className="flex flex-col w-full items-center justify-around pb-16 sm:flex-row flex-wrap">
                    <div className="max-w-[300px]">
                        <img src="https://10web-site.ai/24/wp-content/uploads/sites/27/2023/11/AI_in_Marketing_jAy0cqn8.webp" alt="" />
                        <div className="text-[12px] py-5">
                        The Importance of Website Speed for Your Business
                        </div>
                        <div className="text-[13px] font-bold">
                            Website Speed
                        </div>
                    </div>
                    <div className="max-w-[300px]">
                        <img src="https://10web-site.ai/24/wp-content/uploads/sites/27/2023/11/AI_in_Marketing_jAy0cqn8.webp" alt="" />
                        <div className="text-[12px] py-5">
                        The Importance of Website Speed for Your Business
                        </div>
                        <div className="text-[13px] font-bold">
                            Website Speed
                        </div>
                    </div>
                    <div className="max-w-[300px]">
                        <img src="https://10web-site.ai/24/wp-content/uploads/sites/27/2023/11/AI_in_Marketing_jAy0cqn8.webp" alt="" />
                        <div className="text-[12px] py-5">
                        The Importance of Website Speed for Your Business
                        </div>
                        <div className="text-[13px] font-bold">
                            Website Speed
                        </div>
                    </div>
                </div>
                <div className="max-w-[800px]">
                    <textarea name="commemt" id="comment" className="w-full lg:w-[800px] h-[132px] p-5 text-[20px] font-bold" placeholder="Write a comment..."/>
                    <button className="bg-[#2270E2] py-[8px] px-[30px] rounded-sm text-[20px] font-bold">Post Comment</button>
                </div>
            </div>
        </div>
    )
}

export default Blog