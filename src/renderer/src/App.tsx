import { RootLayout, Content, SideBar, NavBar, PreviewList, Editor, Title } from "@/components";
import { Header } from "@/components";
import { useRef } from "react";

const App = () => {

  const contentContainerRef = useRef<HTMLDivElement>(null)

  const resetScroll = () => {
    contentContainerRef.current?.scrollTo(0, 0)
  }

  return (
    <>
    <RootLayout>
      <SideBar className="p-2">
        <Header className="flex justify-between mt-1" />
        <PreviewList className="mt-3 space-y-1" onSelect={resetScroll} />
      </SideBar>
      <Content ref={contentContainerRef} className="border-l bg-zinc-900/50 border-l-white/20">
        <Title className="pt-2" />
        <Editor />
      </Content>
    </RootLayout>
    </>
  )
}

export default App;