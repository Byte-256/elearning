export default function ContactPage() {
  return (
    <div className="bg-[#1a1a1a] text-white min-h-screen flex flex-col items-center justify-between bottom-0">
      <div className="flex flex-col justify-center items-center lg:mt-[200px]">
        <div className="text-center py-10">
          <h1 className="text-4xl font- italic">Got Questions?</h1>
        </div>

        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 text-center gap-8">
          <div>
            <h2 className="text-[#c1e140] text-lg font-semibold">
              Mailing Address
            </h2>
            <p className="text-gray-300">123 Anywhere St. Any City, ST 12345</p>
          </div>

          <div>
            <h2 className="text-[#c1e140] text-lg font-semibold">
              Email Address
            </h2>
            <p className="text-gray-300">hello@reallygreatsite.com</p>
          </div>

          <div>
            <h2 className="text-[#c1e140] text-lg font-semibold">
              Phone Number
            </h2>
            <p className="text-gray-300">(123) 456-7890</p>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <iframe
        src="https://www.openstreetmap.org/export/embed.html?bbox=78.01082611083986%2C9.843715165303166%2C78.17733764648439%2C10.007227153809604&amp;layer=mapnik"
        className="border-1 border-black w-full h-96 relative bottom-0"
      ></iframe>
    </div>
  );
}
