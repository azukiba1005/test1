import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "お名前を入力してください"),
  email: z.string().email("有効なメールアドレスを入力してください"),
  productInterest: z.string().optional(),
  message: z.string().min(10, "メッセージは10文字以上入力してください"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export type ContactFormResponse = {
  success: boolean;
  message: string;
};

export interface Product {
  id: string;
  name: string;
  nameRomaji: string;
  category: string;
  description: string;
  features: string[];
  ageRange: string;
  image: string;
  detailDescription: string;
}

export const products: Product[] = [
  {
    id: "sugoon",
    name: "すぐーん",
    nameRomaji: "Sugoon",
    category: "スプーン",
    description: "子どもの手にぴったりフィットする、成長を支えるスプーン",
    features: [
      "握りやすいエルゴノミックデザイン",
      "安全な丸みのある形状",
      "食洗機対応で衛生的",
      "滑りにくい素材使用"
    ],
    ageRange: "1歳〜5歳",
    image: "sugoon.png",
    detailDescription: "すぐーんは、お子様の小さな手にぴったり合うように設計された、成長を支えるスプーンです。人間工学に基づいたデザインで、初めてスプーンを使うお子様でも自然に握ることができます。安全性を最優先に考え、角がない丸みのある形状を採用。毎日使うものだから、食洗機対応で衛生的に保てます。"
  },
  {
    id: "hoku",
    name: "ほーく",
    nameRomaji: "Hoku",
    category: "フォーク",
    description: "安全性を追求した、初めてのフォーク体験をサポート",
    features: [
      "丸みのある安全な先端",
      "持ちやすいグリップ設計",
      "適度な重さで安定感抜群",
      "カラフルで楽しいデザイン"
    ],
    ageRange: "1歳〜5歳",
    image: "hoku.png",
    detailDescription: "ほーくは、お子様が安全にフォークを使えるように、先端を丸く設計した優しいフォークです。初めてフォークを使うお子様でも、怪我の心配なく食事を楽しめます。持ちやすいグリップと適度な重さで、食べ物をしっかり刺すことができ、自分で食べる楽しさを実感できます。"
  },
  {
    id: "chopstick",
    name: "ストップスリップチョップスティック",
    nameRomaji: "Stop Slip Chopstick",
    category: "お箸",
    description: "滑りにくい特殊加工で、お箸デビューを応援",
    features: [
      "滑り止め加工で掴みやすい",
      "正しい持ち方が身につく設計",
      "軽量で疲れにくい",
      "成長に合わせた3サイズ展開"
    ],
    ageRange: "3歳〜8歳",
    image: "chopstick.png",
    detailDescription: "ストップスリップチョップスティックは、お子様のお箸デビューを応援する、滑りにくい特殊加工を施したお箸です。握る部分に施された滑り止め加工により、初めてお箸を使うお子様でもしっかりと握ることができます。正しい持ち方が自然に身につくよう工夫された設計で、お箸の使い方をマスターするサポートをします。"
  },
  {
    id: "podishu",
    name: "ポディッシュ",
    nameRomaji: "Podishu",
    category: "お皿",
    description: "ひっくり返らない工夫で、楽しい食事タイムを実現",
    features: [
      "滑り止め底面でテーブルに固定",
      "深めの設計ですくいやすい",
      "丈夫で割れにくい素材",
      "電子レンジ・食洗機対応"
    ],
    ageRange: "6ヶ月〜5歳",
    image: "podishu.png",
    detailDescription: "ポディッシュは、底面に滑り止め加工を施した、ひっくり返りにくいお皿です。お子様が自分で食べようとする時、お皿が動いてしまうことを防ぎます。深めの設計で、スプーンやフォークですくいやすく、最後まで自分で食べる達成感を味わえます。丈夫で割れにくい素材を使用し、電子レンジや食洗機にも対応しています。"
  }
];
