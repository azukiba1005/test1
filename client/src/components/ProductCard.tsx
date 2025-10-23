import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { Product } from "@shared/schema";

interface ProductCardProps {
  product: Product;
  imageSrc: string;
}

export function ProductCard({ product, imageSrc }: ProductCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 group h-full">
      <CardContent className="p-0 flex flex-col h-full">
        <div className="relative bg-gradient-to-br from-accent/20 to-background aspect-square overflow-hidden">
          <img
            src={imageSrc}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            data-testid={`img-product-${product.id}`}
          />
        </div>
        
        <div className="p-6 flex flex-col gap-4 flex-grow">
          <div>
            <div className="flex items-baseline gap-2 mb-2">
              <h3 className="font-heading font-bold text-xl" data-testid={`text-product-name-${product.id}`}>
                {product.name}
              </h3>
              <span className="text-sm text-muted-foreground">
                {product.nameRomaji}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              {product.category}
            </p>
            <p className="text-sm leading-relaxed" data-testid={`text-product-desc-${product.id}`}>
              {product.description}
            </p>
          </div>

          <Link href={`/products/${product.id}`} className="mt-auto" data-testid={`link-product-${product.id}`}>
            <Button variant="outline" className="w-full group/btn">
              詳細を見る
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
