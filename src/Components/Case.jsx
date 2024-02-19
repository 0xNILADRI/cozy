import Card from "./Card";
import Item from "./Item";
import { data } from "../data";

function Case() {
  const addBreak = (a, b) => {
    if (a < b) {
      return <br />;
    }
    return;
  };
  return (
    <div>
      {data.map((item) => {
        return (
          <div key={Object.values(item)[0]}>
            <div style={{ textTransform: "capitalize" }}>
              {Object.keys(item)[1]}
            </div>
            <div style={{ backgroundColor: "#333", borderRadius: "20px" }}>
              {Object.values(item)[1].map((individual) => {
                return (
                  <div key={Object.values(individual)[0]}>
                    <Item
                      imgSrc={Object.values(individual)[1].imageLogo}
                      itemName={Object.keys(individual)[1]}
                      soundSrc={Object.values(individual)[1].soundSource}
                    ></Item>
                    {/* {addBreak(
                      Object.values(individual)[0],
                      individual[0].length
                    )} */}
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
