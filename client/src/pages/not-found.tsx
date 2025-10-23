import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="font-heading font-bold text-6xl md:text-7xl mb-4 text-primary">
          404
        </h1>
        <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">
          ページが見つかりません
        </h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          お探しのページは存在しないか、移動した可能性があります。
        </p>
        <Link href="/" data-testid="link-home">
          <Button size="lg">
            <Home className="mr-2 h-5 w-5" />
            ホームに戻る
          </Button>
        </Link>
      </div>
    </div>
  );
}
