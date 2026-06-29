import { NeoMinimalFooter } from "@/components/ui/neo-minimal-footer";
import { ArrowDown } from "lucide-react";

export default function DemoOne() {
  return (
    <div className="flex w-full overflow-x-hidden flex-col">
      {/* Fullscreen Hero Section */}
      <div className="h-screen flex flex-col justify-center items-center bg-background text-foreground">
        <p className="font-mono text-3xl text-center mb-8">
          Scroll Down
        </p>

        {/* Animated Arrow */}
        <ArrowDown className="w-10 h-10 animate-bounce text-cyan-500" />
      </div>

      {/* Footer Section */}
      <NeoMinimalFooter />
    </div>
  );
}
