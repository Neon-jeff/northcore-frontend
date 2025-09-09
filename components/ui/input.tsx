import * as React from "react";

import { cn } from "@/lib/utils";
import { Eye, EyeClosed } from "lucide-react";

function Input({
  className,
  type,
  isSecured = false,
  ...props
}: React.ComponentProps<"input"> & { isSecured?: boolean }) {
  const [securedEntry, setSecuredEntry] = React.useState(true);

  return (
    <div className="relative">
      <input
        type={(securedEntry && isSecured)? "password" : isSecured ? "text" : type }
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-xs placeholder:text-gray-400 selection:bg-green-700 selection:text-primary-foreground  border-gray-200 flex lg:h-12 h-10 w-full min-w-0 rounded-lg border bg-transparent px-3 py-1 text-xs focus:text-base transition-[color,border-color] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm text-zinc-600 file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "  focus-visible:border-primary focus:border-[1.2]",
          "aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
          className
        )}
        {...props}
      />
      {isSecured && <div className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
        {securedEntry ? (
          <Eye size={18} color="#000" onClick={() => setSecuredEntry(false)} />
        ) : (
          <EyeClosed size={18} color="#000" onClick={() => setSecuredEntry(true)} />
        )}
      </div>}
    </div>
  );
}

export { Input };
