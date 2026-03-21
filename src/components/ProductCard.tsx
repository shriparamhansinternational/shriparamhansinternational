import type { Product } from '../data/products';
import '../styles/Products.css';

interface Props {
  product: Product;
}

// ===== REUSABLE PRODUCT CARD =====
// To replace placeholder image with a real one:
//   1. Add your image to src/assets/
//   2. Import it in products.ts: import myImg from '../assets/my-product.jpg'
//   3. Set image: myImg in the product object
const ProductCard = ({ product }: Props) => {
  return (
    <div className="product-card">
      {/* Image */}
      <div className="product-card-img">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          onError={(e) => {
            // Fallback if image fails to load
            (e.currentTarget as HTMLImageElement).src =
              `https://placehold.co/400x260/0a1628/c9a84c?text=${encodeURIComponent(product.title)}`;
          }}
        />
        <div className="product-card-icon">{product.icon}</div>
      </div>

      {/* Body */}
      <div className="product-card-body">
        <h3>{product.title}</h3>
        <p>{product.desc}</p>

        {/* Sub-type tags (e.g. sticker varieties) */}
        {product.tags && product.tags.length > 0 && (
          <div className="product-tags">
            {product.tags.map(tag => (
              <span key={tag} className="product-tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
