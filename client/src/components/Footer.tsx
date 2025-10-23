import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">
              セキヨウ株式会社
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              すくすくシリーズは、お子様の成長を支える安全で使いやすい食器です。毎日の食事時間を楽しく、そして自立への一歩をサポートします。
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              製品情報
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" data-testid="link-footer-products">
                  <span className="text-muted-foreground hover:text-foreground transition-colors text-sm cursor-pointer">
                    商品一覧
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/products/sugoon" data-testid="link-footer-sugoon">
                  <span className="text-muted-foreground hover:text-foreground transition-colors text-sm cursor-pointer">
                    すぐーん
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/products/hoku" data-testid="link-footer-hoku">
                  <span className="text-muted-foreground hover:text-foreground transition-colors text-sm cursor-pointer">
                    ほーく
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/products/chopstick" data-testid="link-footer-chopstick">
                  <span className="text-muted-foreground hover:text-foreground transition-colors text-sm cursor-pointer">
                    ストップスリップチョップスティック
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/products/podishu" data-testid="link-footer-podishu">
                  <span className="text-muted-foreground hover:text-foreground transition-colors text-sm cursor-pointer">
                    ポディッシュ
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              お問い合わせ
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  info@sekiyou-sukusuku.co.jp
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  03-1234-5678
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  東京都渋谷区〇〇 1-2-3
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} セキヨウ株式会社 All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/contact" data-testid="link-footer-contact">
              <span className="text-muted-foreground hover:text-foreground transition-colors text-sm cursor-pointer">
                お問い合わせ
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
