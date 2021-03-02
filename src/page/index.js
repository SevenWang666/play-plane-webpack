import StartPage from "./StartPage";
// import GamePage from "./GamePage";
// import EndPage from "./EndPage";

export const PAGE = {
  start: "startPage",
 
};

const pageMap = {
  [PAGE.start]: StartPage,

};

export const getPageComponent = (pageName)=>{
    return pageMap[pageName] 
}