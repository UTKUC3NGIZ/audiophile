import Button1 from "@/components/buttons/button1";
import Button2 from "@/components/buttons/button2";
import Button3 from "@/components/buttons/button3";
export default function Home() {
  return (
    <main className="bg-white">
      {/* hero section */}
      {/* <div className="flex flex-col items-center text-center font-sans">
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
      </div> */}
      <Button1 />
      <Button2 />
      <Button3 />
    </main>
  );
}
