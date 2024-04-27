import { useEffect, useState } from "react";

const useGeoLocation = () => {
  const [address, setAddress] = useState<{
    region: string;
    country: string;
  }>({ region: "", country: "" });
  const { region, country } = address;
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async function (position) {
          const { latitude, longitude } = position.coords;

          // Fetch address details using reverse geocoding
          const addressData = await fetchAddressData(latitude, longitude);
          setAddress({
            region: addressData.region,
            country: addressData.country,
          });
        },
        function (error) {
          console.error("Error fetching geolocation:", error.message);
        }
      );
    } else {
      console.log("Geolocation is not available in your browser.");
    }
  }, []);

  // Function to fetch address data using reverse geocoding
  const fetchAddressData = async (latitude: number, longitude: number) => {
    const response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
    );
    const data = await response.json();
    return {
      region: data.principalSubdivision,
      country: data.countryName,
    };
  };

  return { region, country };
};

export default useGeoLocation;
