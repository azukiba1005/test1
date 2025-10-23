import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData, products } from "@shared/schema";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      productInterest: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "送信完了",
        description: "お問い合わせありがとうございます。担当者より折り返しご連絡いたします。",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "送信失敗",
        description: "送信中にエラーが発生しました。もう一度お試しください。",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data);
  };

  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            お問い合わせ
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            製品に関するご質問やご相談は、下記フォームよりお気軽にお問い合わせください
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            {isSubmitted ? (
              <Card className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Send className="h-8 w-8 text-primary" />
                </div>
                <h2 className="font-heading font-bold text-2xl mb-3">
                  送信完了
                </h2>
                <p className="text-muted-foreground mb-6">
                  お問い合わせありがとうございます。<br />
                  担当者より2営業日以内にご連絡いたします。
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  data-testid="button-new-inquiry"
                >
                  新しいお問い合わせ
                </Button>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-8">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>お名前 *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="山田 太郎"
                                {...field}
                                data-testid="input-name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>メールアドレス *</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="example@email.com"
                                {...field}
                                data-testid="input-email"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="productInterest"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>お問い合わせ商品（任意）</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger data-testid="select-product">
                                  <SelectValue placeholder="商品を選択してください" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="all">すべての商品</SelectItem>
                                {products.map((product) => (
                                  <SelectItem
                                    key={product.id}
                                    value={product.id}
                                  >
                                    {product.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>お問い合わせ内容 *</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="お問い合わせ内容をご記入ください"
                                className="min-h-[150px] resize-none"
                                {...field}
                                data-testid="input-message"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full font-semibold"
                        disabled={mutation.isPending}
                        data-testid="button-submit"
                      >
                        {mutation.isPending ? "送信中..." : "送信する"}
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-8">
                <h2 className="font-heading font-semibold text-2xl mb-6">
                  お問い合わせ先
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">メール</h3>
                      <p className="text-sm text-muted-foreground">
                        info@sekiyou-sukusuku.co.jp
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">電話</h3>
                      <p className="text-sm text-muted-foreground mb-1">
                        03-1234-5678
                      </p>
                      <p className="text-xs text-muted-foreground">
                        受付時間: 平日 9:00〜17:00
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">所在地</h3>
                      <p className="text-sm text-muted-foreground">
                        〒150-0000<br />
                        東京都渋谷区〇〇 1-2-3<br />
                        セキヨウビル 5F
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t">
                  <h3 className="font-semibold mb-3">営業時間</h3>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>平日: 9:00 - 17:00</p>
                    <p>土日祝日: 休業</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
