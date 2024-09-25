import React from "react";
import Header from "~/components/Header";
import TabBar from "~/components/TabBar";

function Layout({ children }: React.PropsWithChildren) {
  return (
    <div>
      <Header></Header>
      <div className="h-[calc(100vh-100px)] overflow-y-scroll">{children}</div>
      <TabBar></TabBar>
    </div>
  );
}

export default Layout;
