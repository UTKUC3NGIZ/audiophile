export default function Home() {
  return (
    <main>
      {/* hero section */}
      <div className="flex flex-col items-center text-center font-sans">
        <h2 className="">New product</h2>
        <h1>XX99 Mark II Headphones</h1>
        <h3>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </h3>
        <button>See product</button>

        <img
          src="/assets/home/mobile/image-header.jpg"
          alt="Mobile Header"
          className="absolute -z-10"
        />
      </div>
    </main>
  );
}
