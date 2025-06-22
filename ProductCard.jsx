export default function ProductCard({ product }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem", borderRadius: "8px" }}>
      <img src={product.image} alt={product.name} width="100%" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p><strong>{product.price} د.ج</strong></p>
      <button>إضافة إلى السلة</button>
    </div>
  );
}