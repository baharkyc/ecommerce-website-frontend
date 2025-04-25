import ClientLogo from "../buttons/ClientLogo";

const Clients = () => {

    return (
        
        <div className="flex flex-col items-center sm:flex-wrap sm:flex-row sm:justify-around filter grayscale pt-8 sm:px-24">
            <ClientLogo href="/" src="https://www.svgrepo.com/show/530601/hot-air-balloon.svg"/>
            <ClientLogo href="/" src="https://www.svgrepo.com/show/11283/fan.svg"/>
            <ClientLogo href="/" src="https://www.svgrepo.com/show/530595/hotel.svg"/>
            <ClientLogo href="/" src="https://www.svgrepo.com/show/530612/high-speed-rail.svg"/>
            <ClientLogo href="/" src="https://www.svgrepo.com/show/530598/building.svg"/>
            <ClientLogo href="/" src="https://www.svgrepo.com/show/530610/parasol.svg"/>
            
        </div>
    )
}

export default Clients;