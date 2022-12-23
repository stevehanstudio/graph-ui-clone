// import React, { useEffect, useId, useState } from "react";
import React, { useEffect, useState } from 'react'
import D3Tree, { TreeType, TreeOrientation } from "./D3Tree.tsx";
// import D3Tree, { TreeType, TreeOrientation } from './D3Tree.tsx'

interface Props {}

const TreeTester: React.FC<Props> = () => {
  function jsonOutput(): React.ReactNode {
    if (!selectedFiles || selectedFiles?.length < 0) {
      return <p>No file selected</p>;
    } else if (errorState !== "") {
      return <p>Error: {errorState}</p>;
    } else if (isFileLoading) {
      return <p>File is loading...</p>;
    } else {
      return (
        <div>
          <D3Tree
            data={fileJson}
            treeType={treeType}
            treeOrientation={treeOrientation}
            nodeWidth={nodeWidth}
            nodeHeight={nodeHeight}
            paddingRight={100}
            maxSvgViewboxDimensions={maxSvgViewboxDimensions}
          />
        </div>
      );
    }
  }

  const [selectedFiles, setSelectedFile] = useState<FileList | null>(null);
  const [isFileLoading, setIsFileLoading] = useState<boolean>(true);
  const [fileJson, setFileJson] = useState<any>(null);
  const [errorState, setErrorState] = useState<string>("");

  const [nodeWidth, setNodeWidth] = useState<number>(15);
  const [nodeHeight, setNodeHeight] = useState<number>(15);
  const [maxSvgViewboxDimensions, setMaxSvgViewboxDimensions] =
    useState<number>(500);
  const [treeType, setTreeType] = useState<TreeType>(TreeType.TidyTree);
  const [treeOrientation, setTreeOrientation] = useState<TreeOrientation>(
    TreeOrientation.Horizontal
  );
  // const treeTypeInputId: string = useId();
  // const horizontalTreeOrientationInputId: string = useId();
  // const verticalTreeOrientationInputId: string = useId();

  const treeTypeInputId: string = 'treeTypeInputId'
  const horizontalTreeOrientationInputId: string = "horizontalTreeOrientationInputId"
  const verticalTreeOrientationInputId: string = "verticalTreeOrientationInputId"

  useEffect(() => {
    async function loadFileJson() {
      setIsFileLoading(true);
      if (
        selectedFiles === null ||
        selectedFiles === undefined ||
        selectedFiles.length < 1
      ) {
        setErrorState("No files selected");
        return;
      }
      const firstFile: File | null = selectedFiles.item(0);
      if (firstFile === null) {
        setErrorState("Error loading file");
        return;
      }
      const fileText: string = await firstFile.text();
      setFileJson(JSON.parse(fileText));
      setIsFileLoading(false);
      setErrorState("");
    }

    loadFileJson();
  }, [selectedFiles]);

  return (
    <div>
      <label>
        {" "}
        Select a file
        <input
          type="file"
          accept=".json,.txt"
          placeholder="Select JSON file to display"
          onChange={(e) => {
            setSelectedFile(e.target.files);
            setIsFileLoading(true);
          }}
        />
      </label>
      <form>
        <label htmlFor={treeTypeInputId}>Tree type</label>
        <select
          id={treeTypeInputId}
          onInput={(e: React.FormEvent<HTMLSelectElement>) => {
            const target: HTMLSelectElement = e.target as HTMLSelectElement;
            setTreeType(parseInt(target.value));
          }}
        >
          <option value={TreeType.TidyTree}>Tidy tree</option>
          <option value={TreeType.Dendrogram}>Denodrogram</option>
        </select>
        <fieldset>
          <legend>Select tree direction</legend>
          <div>
            <input
              type="radio"
              name="treeOrientation"
              id={horizontalTreeOrientationInputId}
              onChange={() => {
                setTreeOrientation(TreeOrientation.Horizontal);
              }}
              checked={treeOrientation === TreeOrientation.Horizontal}
            />
            <label htmlFor={horizontalTreeOrientationInputId}>Horizontal</label>
          </div>
          <div>
            <input
              type="radio"
              name="treeOrientation"
              id={verticalTreeOrientationInputId}
              onChange={() => {
                setTreeOrientation(TreeOrientation.Vertical);
              }}
              checked={treeOrientation === TreeOrientation.Vertical}
            />
            <label htmlFor={verticalTreeOrientationInputId}>Vertical</label>
          </div>
        </fieldset>
        <fieldset>
          <label>Node Width</label>
          <input
            type="number"
            onChange={(e) => {
              setNodeWidth(parseInt(e.target.value));
            }}
            value={nodeWidth}
          />
          <label>Node Height</label>
          <input
            type="number"
            onChange={(e) => {
              setNodeHeight(parseInt(e.target.value));
            }}
            value={nodeHeight}
          />
        </fieldset>
        <fieldset>
          <label>Max SVG Viewbox dimensions</label>
          <input
            type="number"
            onChange={(e) => {
              setMaxSvgViewboxDimensions(parseInt(e.target.value));
            }}
            value={maxSvgViewboxDimensions}
          />
        </fieldset>
      </form>
      <div>{jsonOutput()}</div>
    </div>
  );
};

export default TreeTester;
