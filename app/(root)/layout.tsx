// import { checkSubscription } from "@/lib/subscription";

import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  // const isPro = await checkSubscription();

  return (
    <div className="h-full">
      <Navbar
      //   isPro={"False"}
      />
      <div className="hidden md:flex mt-16 h-full w-20 flex-col fixed inset-y-0">
        <Sidebar
        //  isPro={"False"}
        />
      </div>
      <main className="md:pl-20 pt-16 h-full">{children}</main>
    </div>
  );
};

export default RootLayout;
