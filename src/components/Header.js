import { ReactComponent as Arrow } from "../assets/icon-arrow.svg";

const Header = ({ changeIPAddress, IPAddress, fetchIPDetails }) => {
    return (
        <header className='bg-bgMobile xs:bg-bgDesktop h-[40vh]'>
            <h1 className="text-[white] text-center text-2xl font-medium pt-10">IP Address Tracker</h1>
            <div className="flex justify-center pt-4">
                <input
                    type="text"
                    placeholder="Search for any IP address or domain"
                    onChange={changeIPAddress}
                    value={IPAddress}
                    pattern="^((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])$"
                    className="h-10 rounded-l-lg w-[70vw] max-w-[500px] pl-4 cursor-pointer"
                />
                <button
                    type="button"
                    className="bg-veryDark-gray cursor-pointer hover:bg-dark-gray h-10 w-10 rounded-r-lg"
                    onClick={() => fetchIPDetails()}
                >
                    <Arrow className="mx-auto" />
                </button>
            </div>
        </header>
    )
}

export default Header;