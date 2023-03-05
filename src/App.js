import Header from "./components/Header";
import IPDetails from "./components/IPDetails";
import { useState, useCallback, useEffect } from 'react';
import axios from "axios"
import Map from "./components/Map";

function App() {
  const [IPAddress, setIPAddress] = useState('');
  const [IPData, setIPData] = useState({});
  const [coordinates, setCoordinates] = useState([7.46614, 3.41838]);

  const changeIPAddress = (e) => {
    const { value } = e.target;
    setIPAddress(value);
  };

  const fetchIPDetails = useCallback(async () => {
    const data = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=at_xi3ViPi1hHqw49nWwDJUBT4t8IGt9&ipAddress=${IPAddress}`,)
      .then((res) => res.data);
    setIPData(data);

    if (data.location.lat) {
      setCoordinates([data?.location?.lat, data?.location?.lng]);
    }

  }, [IPAddress]);

  useEffect(() => {
    fetchIPDetails();
    // eslint-disable-next-line
  }, []);


  return (
    <div className="relative">
      <Header
        changeIPAddress={changeIPAddress}
        IPAddress={IPAddress}
        fetchIPDetails={fetchIPDetails}
      />
      <IPDetails
        IPAddress={IPAddress}
        IPData={IPData}
      />
      <Map IPData={IPData} coordinates={coordinates} />
    </div>
  )
}

export default App;
