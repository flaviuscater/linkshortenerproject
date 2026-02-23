import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Link2, BarChart3, Zap, QrCode, Shield, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default async function Home() {
  const { userId } = await auth();
  if (userId) redirect('/dashboard');

  const features = [
    {
      icon: Link2,
      title: 'Shorten URLs Instantly',
      description: 'Transform long, unwieldy URLs into short, memorable links in seconds.',
    },
    {
      icon: BarChart3,
      title: 'Detailed Analytics',
      description: 'Track clicks, geographic data, and traffic sources for every link.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Ultra-fast redirects ensure your users get where they need to go instantly.',
    },
    {
      icon: QrCode,
      title: 'QR Code Generation',
      description: 'Automatically generate QR codes for easy offline sharing.',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime guarantee for your links.',
    },
    {
      icon: Sparkles,
      title: 'Custom Short Links',
      description: 'Create branded, memorable links that match your brand identity.',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-black">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 sm:py-32">
          <div className="flex flex-col items-center text-center">
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl">
              Shorten Your Links,
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                Amplify Your Reach
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Create powerful short links with advanced analytics and tracking.
              Perfect for marketers, businesses, and content creators who want to make every link count.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/dashboard">
                <Button size="lg" className="text-base">
                  Get Started Free
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-base">
                View Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Everything you need to manage your links
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Powerful features to help you create, track, and optimize your short links
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="border-zinc-200 dark:border-zinc-800">
                  <CardHeader>
                    <div className="mb-2 flex size-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-950">
                      <Icon className="size-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20">
          <Card className="border-zinc-200 bg-gradient-to-r from-blue-600 to-violet-600 dark:border-zinc-800">
            <CardContent className="flex flex-col items-center py-16 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to get started?
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-blue-100">
                Join thousands of users who trust us with their links.
                Start shortening URLs today, no credit card required.
              </p>
              <div className="mt-8">
                <Link href="/dashboard">
                  <Button size="lg" variant="secondary" className="text-base">
                    Create Your First Link
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
            © {new Date().getFullYear()} Link Shortener. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
