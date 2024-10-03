import styled from "styled-components";

export const Wrapper = styled.li`
  list-style-type: none;
  margin-left: 20px;

  .node-name {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    cursor: pointer;
  }

  .leaf-node {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-left: 20px;
  }
`;
