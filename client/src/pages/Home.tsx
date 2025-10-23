import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@shared/schema";
import { ArrowRight, Shield, Heart, Sparkles, Baby } from "lucide-react";
import heroImage from "@assets/generated_images/Hero_mealtime_scene_2d74508b.png";
import lifestyleImage from "@assets/generated_images/Children_eating_lifestyle_photo_e5a0e296.png";
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

export default function Home() {
  const benefits = [
    {
      icon: Shield,
      title: "安全性を最優先",
      description: "お子様が安心して使える、丸みのある優しいデザインと厳選された素材",
    },
    {
      icon: Heart,
      title: "成長をサポート",
      description: "年齢に応じた設計で、自分で食べる楽しさと達成感を育みます",
    },
    {
      icon: Sparkles,
      title: "毎日使いやすい",
      description: "食洗機・電子レンジ対応で、忙しい毎日でも衛生的に使えます",
    },
    {
      icon: Baby,
      title: "専門家監修",
      description: "小児科医と栄養士の助言のもと、子どもの発達に最適な設計",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight text-foreground">
              すくすくシリーズ
            </h1>
            <p className="text-lg md:text-xl text-foreground/90 mb-4 leading-relaxed">
              子どもの成長を支える、安全で使いやすい食器
            </p>
            <p className="text-base text-muted-foreground mb-8 leading-relaxed max-w-xl">
              毎日の食事時間を、もっと楽しく。もっと自信を持って。すくすくシリーズは、お子様の「自分で食べたい」を応援します。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products" data-testid="button-hero-products">
                <Button size="lg" className="font-semibold shadow-lg">
                  商品一覧を見る
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact" data-testid="button-hero-contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="font-semibold backdrop-blur-sm bg-background/60"
                >
                  お問い合わせ
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              すくすくシリーズの特長
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              お子様の成長段階に合わせて設計された、安全で使いやすい食器シリーズです
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-md hover-elevate active-elevate-2"
                data-testid={`card-benefit-${index}`}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              製品ラインナップ
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              すぐーん、ほーく、ストップスリップチョップスティック、ポディッシュの4つの製品で、お子様の食事をサポート
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

          <div className="text-center mt-12">
            <Link href="/products" data-testid="link-all-products">
              <Button size="lg" variant="outline" className="font-semibold">
                すべての商品を見る
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
                セキヨウ株式会社について
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                セキヨウ株式会社は、子どもたちの健やかな成長を願い、安全で使いやすい食器の開発に取り組んでいます。すくすくシリーズは、小児科医や栄養士の監修のもと、お子様の発達段階に合わせて設計されています。
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                「自分で食べる」という体験は、お子様の自立心と自信を育てます。私たちの製品が、ご家族の笑顔あふれる食事時間の一助となれば幸いです。
              </p>
              <Link href="/contact" data-testid="link-about-contact">
                <Button size="lg">
                  お問い合わせはこちら
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={lifestyleImage}
                alt="楽しく食事をする子どもたち"
                className="w-full rounded-md shadow-lg"
                data-testid="img-lifestyle"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
