import React, { useState } from "react";

interface Props {}

const DummyComp: React.FC<Props> = ({}) => {
  return <div>Hello</div>;
};

interface ComponentProps {
  name: string;
  number: number;
}

const Components: React.FC<ComponentProps> = ({ name, number }) => {
  const [value, setValue] = useState<number[]>([]);
  // var data = require("json!./SampleDataFiles/example.json");
  // console.log(data);
  // const value: string = "";
  const array: string[] = ["123", "", "67"];
  return (
    <div>
      <div>{name}</div>
      <div>{number}</div>
      <button
        onClick={() => {
          const copy = [...value];
          copy.push(0);
          setValue(copy);
        }}
      />
      <p>"id": "0001"</p>
      <p> "type": "donut"</p>
      <p>"dict": Object</p>
      {value.length === 10 && <Components name={"Dummy"} number={-1} />}
      {value.map((a) => (
        <DummyComp />
      ))}
    </div>
  );
  // return (
  //   <div
  //     style={{
  //       display: "flex",
  //       flexDirection: "row",
  //       width: "100%",
  //       height: "100%",
  //     }}
  //   >
  //     <div
  //       style={{
  //         display: "flex",
  //         alignItems: "center",
  //         justifyContent: "center",
  //         width: "20%",
  //         height: "100vh",
  //         borderRight: "solid",
  //       }}
  //     >
  //       List of Components
  //     </div>
  //     <div
  //       style={{
  //         display: "flex",
  //         flexDirection: "column",
  //         alignItems: "center",
  //         justifyContent: "center",
  //         width: "80%",
  //         minHeight: "100%",
  //       }}
  //     >
  //       <div
  //         style={{
  //           display: "flex",
  //           alignItems: "center",
  //           justifyContent: "center",
  //           width: "100%",
  //           minHeight: "20vh",
  //           borderTop: "solid",
  //         }}
  //       >
  //         Component-1
  //       </div>
  //       <div
  //         style={{
  //           display: "flex",
  //           alignItems: "center",
  //           justifyContent: "center",
  //           width: "100%",
  //           minHeight: "20vh",
  //           borderTop: "solid",
  //         }}
  //       >
  //         Component-2
  //       </div>
  //       <div
  //         style={{
  //           display: "flex",
  //           alignItems: "center",
  //           justifyContent: "center",
  //           width: "100%",
  //           minHeight: "20vh",
  //           borderTop: "solid",
  //         }}
  //       >
  //         Component-3
  //       </div>
  //       <div
  //         style={{
  //           display: "flex",
  //           alignItems: "center",
  //           justifyContent: "center",
  //           width: "100%",
  //           minHeight: "20vh",
  //           borderTop: "solid",
  //         }}
  //       >
  //         Component-4
  //       </div>
  //       <div
  //         style={{
  //           display: "flex",
  //           alignItems: "center",
  //           justifyContent: "center",
  //           width: "100%",
  //           minHeight: "20vh",
  //           borderTop: "solid",
  //         }}
  //       >
  //         Component-5
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Components;
