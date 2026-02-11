import { InfiniteRibbon } from "@/components/ui/infinite-ribbon"

export function InfiniteRibbonDemo() {
  return (
    <div className="relative flex h-[200px] sm:h-[350px] w-full items-center justify-center overflow-hidden">
      <InfiniteRibbon rotation={5} className="absolute">
        Broadcast, Automate, Engage, Sell - do everything with the AI-powered
      </InfiniteRibbon>
      <InfiniteRibbon reverse={true} rotation={-5}>
        WhatsApp Marketing & Engagement Platform. Powered by Official WhatsApp APIs⚡
      </InfiniteRibbon>
    </div>
  )
}
