import { LearnComponent } from "./Components/LearnComponent"
import { LearnJSX } from "./Components/LearnJSX"
import { LearnProps } from "./Components/LearnProps"
import { LearnEvent } from "./Components/LearnEvent"
import { LearnLiftingStateUp } from "./Components/LearnLiftingStateUp"
import { LearnState} from "./Components/LearnState"
import { CounterApp } from "./Components/Counter App"
import { LearnUseEffect } from "./Components/LearnUseEffect"
import { LearnUseMemo } from "./Components/LearnUseMemo"
import { LearnUseCallback } from "./Components/LearnUseCallback" 
import { LearnCustomHook } from "./Components/LearnCustomHook"
import { LearnConditionalRendering } from "./Components/LearnConditionalRendering"
import { LearnMap } from "./Components/LearnMap"
import { LearnInlineCSS } from "./Components/LearnInlineCSS"
import { LearnExternelCSS1 } from "./Components/LearnExternelCSS1"
import { LearnExternelCSS2 } from "./Components/LearnExternelCSS2"
import { LearnCSSModule1 } from "./Components/LearnCSSModule1"
import { LearnCSSModule2 } from "./Components/LearnCSSModule2"
import { LearnUseOfImage } from "./Components/LearnUseOfImage"
import { LearnForm } from "./Components/LearnForm"
import { LearnUsingENV } from "./Components/LearnUsingENV"



function App() {
  let roll = 1069          // roll for LearnProps------
  
  const getData = (data) => {     //getData function for LearnLiftingStateUp-----
    console.log(data);
  }
  return (
    <>
    <LearnComponent />
    <LearnJSX />
    <LearnProps name="Faiza Choudhry" roll={roll} />
    <LearnEvent />
    <LearnLiftingStateUp myClick={getData} />
    <LearnState />
    <CounterApp />
    <LearnUseEffect />
    <LearnUseMemo />
    <LearnUseCallback />
    <LearnCustomHook />
    <LearnConditionalRendering />
    <LearnMap />
    <LearnInlineCSS />
    <LearnExternelCSS1/>
    <LearnExternelCSS2 />
    <LearnCSSModule1 />
    <LearnCSSModule2 />
    <LearnUseOfImage />
    <LearnForm />
    <LearnUsingENV />
    </>
  )
}

export default App
