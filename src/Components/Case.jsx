import { data } from "../data";

function Case() {
  return (
    <div>
      {data.map((item) => {
        return (
          <>
            <div style={{ textTransform: "capitalize" }}>
              {Object.keys(item)[0]}
            </div>
          </>
        );
      })}
      {/* <Card /> */}
    </div>
  );
}
export default Case;
