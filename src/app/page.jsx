import Cloudinary from "../components/Cloudinary";
import Hero from "../components/Hero";
import Products from "../components/Products";

export default function Home() {
  return (
    <div>
      <Cloudinary />
      <Hero />
      <Products />
    </div>
  );
}
