import { ChangeEvent, type JSX, useMemo, useState } from "react";
import useClaims from "../../utils/useClaims";
import { filterRecursiveNodes } from "../../utils/appUtils";

import NodeItem from "../NodeItem/NodeItem";
import Spinner from "../../commons/spinner/Spinner";
import Input from "../../commons/Input/Input";
import { Wrapper } from "./NodeTree.styles";

const NodeTree = (): JSX.Element => {
  const [searchText, setSearchText] = useState("");
  const { isLoading: isLoadingClaims, data: claimsList } = useClaims();

  const filtredData = useMemo(() => {
    if (searchText.length === 0) return claimsList;

    return filterRecursiveNodes(claimsList, searchText);
  }, [claimsList, searchText]);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchText(event.target.value);
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
                  {Object.entries(nodes).map(
                    ([nodeKey, node]: [string, any]) => (
                      <NodeItem
                        key={nodeKey}
                        name={(node.marker && `Item- ${nodeKey}`) || nodeKey}
                        node={node}
                      />
                    )
                  )}
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
