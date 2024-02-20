import { useState } from "react";
import Item from "./Item";
import { data } from "../data";

function Case({ isPlaying, isLightMode }) {
  const addBreak = (a, b) => {
    if (a < b) {
      return (
        <hr className={isLightMode ? "divider-line-light" : "divider-line"} />
      );
    }
    return;
  };
  return (
    <div>
      {data.map((item) => {
        return (
          <div key={Object.values(item)[0]}>
            <div
              className={
                isLightMode ? "item-heading col-light" : "item-heading"
              }
            >
              {Object.keys(item)[1]}
            </div>

            <div
              className={
                isLightMode
                  ? "item-card-section bg-col-light"
                  : "item-card-section"
              }
            >
              {Object.values(item)[1].map((individual) => {
                return (
                  <div
                    className="items-iterator"
                    key={Object.values(individual)[0]}
                  >
                    <Item
                      isPlaying={isPlaying}
                      isLightMode={isLightMode}
                      imgSrc={Object.values(individual)[1].imageLogo}
                      itemName={Object.keys(individual)[1]}
                      soundSrc={Object.values(individual)[1].soundSource}
                    ></Item>
                    <div className="line-container">
                      {addBreak(
                        Object.values(individual)[0],
                        Object.values(
                          Object.values(Object.values(item).at(-1)).at(-1)
                        ).at(0)
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Case;
