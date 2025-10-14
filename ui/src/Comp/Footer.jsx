import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="w-full bg-[#61894d] text-white py-12 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold tracking-wide">JShop</h2>
          <p className="text-sm text-white/80 mt-3 leading-relaxed">
            Bringing quality products to your doorstep with care and trust.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Quick Links</h3>
          <ul className="space-y-2 text-white/90 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Support</h3>
          <ul className="space-y-2 text-white/90 text-sm">
            <li>
              <a href="#" className="hover:underline">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Stay Updated</h3>
          <p className="text-sm text-white/80 mb-2">
            Subscribe for updates and special offers.
          </p>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input
              type="email"
              placeholder="Your email"
              className="bg-white text-black placeholder:text-gray-600"
            />
            <Button className="bg-white text-[#61894d] hover:bg-white/90">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      <Separator className="my-8 bg-white/20" />

      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row items-center justify-between text-sm text-white/80">
        <p>© {new Date().getFullYear()} JShop. All rights reserved.</p>
        <div className="flex space-x-4 mt-3 md:mt-0">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10"
          >
            <i className="ri-facebook-fill text-lg"></i>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10"
          >
            <i className="ri-instagram-line text-lg"></i>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10"
          >
            <i className="ri-twitter-x-line text-lg"></i>
          </Button>
        </div>
      </div>
    </footer>
  );
}
