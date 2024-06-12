import useGeoLocation from "hooks/useGeoLocation";

const LocationZone = () => {
  const { country, region } = useGeoLocation();
  return (
    <div className="border-solid border-[1px] rounded-s-lg mt-12 p-5">
      <h2 className="text-2xl font-semibold">Lokatsiya </h2>
      <h3 className="text-lg font-semibold mb-1 mt-3">Manzil</h3>
      <p className="text-base">
        {region}, {country}
      </p>
      <h3 className="text-lg font-semibold mb-1 mt-3">Vaqt</h3>
      <p className="text-base">{new Date(Date.now()).toLocaleString()}</p>
    </div>
  );
};
export default LocationZone;
