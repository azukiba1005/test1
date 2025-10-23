import { ProductCard } from "@/components/ProductCard";
import { products } from "@shared/schema";
import sugoonImage from "@assets/generated_images/Children's_spoon_product_photo_48fca03a.png";
import hokuImage from "@assets/generated_images/Children's_fork_product_photo_0e4b6d62.png";
import chopstickImage from "@assets/generated_images/Non-slip_chopsticks_product_photo_3b9ff042.png";
import podishuImage from "@assets/generated_images/Non-slip_bowl_product_photo_fc0a82bb.png";

const productImages: Record<string, string> = {
  sugoon: sugoonImage,
  hoku: hokuImage,
  chopstick: chopstickImage,
  podishu: podishuImage,
};

export default function Products() {
  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            商品一覧
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            すくすくシリーズの全製品をご覧いただけます。お子様の成長段階に合わせて、最適な製品をお選びください。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              imageSrc={productImages[product.id]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
