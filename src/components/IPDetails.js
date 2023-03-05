const IPDetails = ({ IPData }) => {
    return (
        <article className="bg-white text w-[80vw] absolute top-[30%] z-[99999] left-[10%] mx-auto rounded-lg shadow-md sm:grid sm:grid-cols-2 md:h-28 md:flex md:justify-between md:items-center md:px-4 md:top-[35%]">
            <div className="py-3 md:pt-0 md:pl-1 flex-1 md:h-16">
                <h2 className="text-dark-gray text-center text-xs font-bold">IP ADDRESS</h2>
                <p className="text-veryDark-gray text-center font-bold">{IPData?.ip}</p>
            </div>
            <div className="pb-3 sm:pt-3 md:pt-0 md:border-l md:pl-1 flex-1 md:h-16">
                <h2 className="text-dark-gray text-center text-xs font-bold">LOCATION</h2>
                <p className="text-veryDark-gray text-center font-bold">{IPData?.location?.region}, {IPData?.location?.country} {IPData?.location?.postalCode}</p>
            </div>
            <div className="pb-3 md:border-l md:pl-1 flex-1 md:h-16">
                <h2 className="text-dark-gray text-center text-xs font-bold">TIMEZONE</h2>
                <p className="text-veryDark-gray text-center font-bold">UTC {IPData?.location?.timezone}</p>
            </div>
            <div className="pb-3 md:border-l md:pl-1 flex-1 md:h-16">
                <h2 className="text-dark-gray text-center text-xs font-bold">ISP</h2>
                <p className="text-veryDark-gray text-center font-bold">{IPData?.isp}</p>
            </div>
        </article>
    )
}

export default IPDetails;