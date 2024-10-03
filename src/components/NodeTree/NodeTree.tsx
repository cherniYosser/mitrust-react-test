import { type JSX, useMemo, useState } from "react";
import useClaims from "../../utils/useClaims";
import NodeItem from "../NodeItem/NodeItem";
import Spinner from "../spinner/Spinner";
import { Wrapper } from "./NodeTree.styles";
import Input from "../Input/Input";
import { filterRecursiveNodes } from "../../utils/appUtils";

const NodeTree = (): JSX.Element => {
  const [searchText, setSearchText] = useState("");
  const { isLoading: isLoadingClaims, data: claimsList } = useClaims();

  const filtredData = useMemo(() => {
    if (searchText.length === 0) return claimsList;

    return filterRecursiveNodes(claimsList, searchText);
  }, [claimsList, searchText]);

  const handleSearch = (value: string): void => {
    setSearchText(value);
  };

  return (
    <Wrapper>
      {isLoadingClaims && <Spinner fullPage />}
      {filtredData && (
        <>
          <div className="form-element">
            <label>Search: </label>
            <Input
              onChange={handleSearch}
              value={searchText}
              aria-label="search"
            />
          </div>
          <div className="node-tree">
            {Object.entries(filtredData)?.map(([key, nodes]: [string, any]) => (
              <div key={key} className="node-card">
                <h2>{key}</h2>
                <ul>
                  {Object.entries(nodes).map(([nodeKey, node]) => (
                    <NodeItem
                      key={nodeKey}
                      // @ts-ignore
                      name={(node.marker && `Item- ${nodeKey}`) || nodeKey}
                      // @ts-ignore
                      node={node}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </>
      )}
    </Wrapper>
  );
};

export default NodeTree;
