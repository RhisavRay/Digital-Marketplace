import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Ghost, Leaf } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: "Instant Delivery",
    icon: ArrowDownToLine,
    desc: "Get your assets delivered to your email in seconds and download them right away."
  },
  {
    name: "Guaranteed Quality",
    icon: CheckCircle,
    desc: "Every asset on our platform is checked and verified by our team to maintain high quality standards. Not happy? We offer a 30-day money back guarantee, no questions asked."
  },
  {
    name: "For The Planet",
    icon: Leaf,
    desc: "We've pledged 1% of our sales to the preservation and restoration of the envioronment."
  }
]

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tighttext-gray-900 sm:text-6xl">
            Your marketplace for high-quality{" "}
            <span className="text-[#FAD12C]">digital assets</span>
            .
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to Digital Hippo. Every asset on our  platform is verified by a team of experts to ensure we meet the highest quality standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href='/products' className={buttonVariants()}>Browse Trending</Link>
            <Button variant={Ghost}>Our quality promise &rarr;</Button>
          </div>
        </div>

        {/* TODO: Add products */}
      </MaxWidthWrapper>

      <section className="border-t gorder-gray-200bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">

          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
