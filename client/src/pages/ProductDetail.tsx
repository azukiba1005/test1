import { useRoute, Link } from "wouter";
import { products } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Check } from "lucide-react";
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

export default function ProductDetail() {
  const [, params] = useRoute("/products/:id");
  const product = products.find((p) => p.id === params?.id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading font-bold mb-4">
            商品が見つかりません
          </h1>
          <Link href="/products" data-testid="link-back-products">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              商品一覧に戻る
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id);

  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/products" data-testid="link-back">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            商品一覧に戻る
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-3">
            <div className="sticky top-24">
              <div className="bg-gradient-to-br from-accent/20 to-background rounded-md overflow-hidden aspect-square">
                <img
                  src={productImages[product.id]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  data-testid="img-product-detail"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div>
              <Badge className="mb-4" data-testid="badge-category">
                {product.category}
              </Badge>
              <h1 className="font-heading font-bold text-4xl md:text-5xl mb-3" data-testid="text-product-name">
                {product.name}
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                {product.nameRomaji}
              </p>
              <p className="text-lg leading-relaxed" data-testid="text-product-description">
                {product.description}
              </p>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="outline" data-testid="badge-age">
                    対象年齢
                  </Badge>
                  <span className="font-semibold">{product.ageRange}</span>
                </div>
              </CardContent>
            </Card>

            <div>
              <h2 className="font-heading font-semibold text-2xl mb-4">
                製品の特長
              </h2>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3"
                    data-testid={`feature-${index}`}
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-heading font-semibold text-2xl mb-4">
                詳細説明
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {product.detailDescription}
              </p>
            </div>

            <div className="pt-6 border-t">
              <Link href="/contact" data-testid="link-contact">
                <Button size="lg" className="w-full font-semibold">
                  お問い合わせ
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <section className="border-t pt-16">
            <h2 className="font-heading font-bold text-3xl mb-8">
              その他の商品
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.id}`}
                  data-testid={`link-related-${relatedProduct.id}`}
                >
                  <Card className="overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 group cursor-pointer h-full">
                    <CardContent className="p-0">
                      <div className="relative bg-gradient-to-br from-accent/20 to-background aspect-square overflow-hidden">
                        <img
                          src={productImages[relatedProduct.id]}
                          alt={relatedProduct.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-heading font-semibold text-lg mb-1">
                          {relatedProduct.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {relatedProduct.nameRomaji}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
