import {defineComponent,h,ref} from "@vue/runtime-core"

import startPageAsset from "../assets/start_page.jpg";
import startBtn from "../assets/startBtn.png";

import {PAGE}  from './index.js'
export default defineComponent({
    props:["onNextPage"],
    setup(props,ctx){
        const handleGoToGame=()=>{
             props.onNextPage(PAGE.game)
        }
        return {handleGoToGame}
    },
    render(ctx){
        return h("Container", [
            h("Sprite", {
              texture: startPageAsset,
              key: "1",
            }),
            h("Sprite", {
              x: 230,
              y: 515,
              texture: startBtn,
              key: "2",
              on: {
                pointertap: ctx.handleGoToGame,
              },
              interactive: true,
              buttonMode: true,
            }),
          ]);
    }
})