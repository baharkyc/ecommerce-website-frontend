const Stats = () => {
    const exampleData = [
        {
            "customers" : "15K",
            "visitors" : "150K",
            "countries" : "15",
            "partners" : "100+"
        }

    ]


    return (
        <div className="flex flex-col sm:px-16 px-12 items-center gap-y-16">
            <div className="flex flex-col sm:flex-row items-center w-full gap-y-4  sm:py-12">
                <div className="h-[120px] text-center w-full flex flex-col justify-center">
                    <span className="text-text-color text-4xl font-bold ">{exampleData[0].customers}</span>
                    <p className="mt-4 font-semibold text-second-text-color">Happy Customers</p>
                </div>
                <div className="h-[120px] text-center w-full flex flex-col justify-center">
                    <span className="text-text-color text-4xl font-bold ">{exampleData[0].visitors}</span>
                    <p className="mt-4 font-semibold text-second-text-color">Monthly Visitors</p>
                </div>
                <div className="h-[120px] text-center w-full flex flex-col justify-center">
                    <span className="text-text-color text-4xl font-bold ">{exampleData[0].countries}</span>
                    <p className="mt-4 font-semibold text-second-text-color">Countries Worldwide</p>
                </div>
                <div className="h-[120px] text-center w-full flex flex-col justify-center">
                    <span className="text-text-color text-4xl font-bold ">{exampleData[0].partners}</span>
                    <p className="mt-4 font-semibold text-second-text-color">Top Partners</p>
                </div>
            </div>
            <div>
                <video
                    className="max-w-[800px] w-full h-auto rounded-xl"
                    src="https://videos.pexels.com/video-files/4937168/4937168-uhd_2732_1440_24fps.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                />
            </div>
        </div>
    )
}

export default Stats;