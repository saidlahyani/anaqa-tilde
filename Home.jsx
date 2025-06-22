import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

export default function Home() {
  return (
    <div dir="rtl">
      <Header />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem" }}>
        {products.map((p, i) => <ProductCard key={i} product={p} />)}
      </div>
    </div>
  );
}