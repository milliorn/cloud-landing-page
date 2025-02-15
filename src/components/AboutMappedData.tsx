/* data populated in the about section */
export function AboutMappedData({
  mappedData,
}: {
  mappedData[];
}) {
  return (
    <div className="grid md:grid-cols-3 gap-1 px-2 text-center">
      {mappedData}
    </div>
  );
}
