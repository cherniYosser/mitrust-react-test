import { useState, type JSX, type SyntheticEvent } from "react";
import { isObject } from "../../utils/appUtils";
import { Wrapper } from "./NodeItem.styles";

type NodeItemType = {
  name: any;
  node: any;
};

const NodeItem = ({ name, node }: NodeItemType): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggle = (event: SyntheticEvent<HTMLDetailsElement>) => {
    setIsExpanded(event.currentTarget.open);
  };

  return (
    <Wrapper>
      <details open={isExpanded} onToggle={toggle}>
        <summary className="node-name" title={name}>
          {name}
        </summary>
        {isObject(node) ? (
          <ul>
            {Object.entries(node).map(([key, value]) => (
              <NodeItem key={key} name={key} node={value} />
            ))}
          </ul>
        ) : (
          <div className="leaf-node">{node}</div>
        )}
      </details>
    </Wrapper>
  );
};

export default NodeItem;
