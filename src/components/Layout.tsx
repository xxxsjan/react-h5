import React from "react";
import Header from "~/components/Header";
import TabBar from "~/components/TabBar";

function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="bg-gradient-to-b from-white via-[#f5f5f5] via-28%">
      <Header></Header>
      <div className="h-[calc(100vh-100px)] overflow-y-scroll">{children}</div>
      <TabBar></TabBar>
    </div>
  );
}

export default Layout;
