import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 85px;
  .node-tree {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    padding: 1rem;
    height: calc(100% - 125.8px);

    @media only screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .form-element {
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 0 15px;
  }

  .tree-view {
    font-family: Arial, sans-serif;
    margin: 20px;
    color: #333;
    width: 100%;
  }

  .header {
    text-align: center;
    color: #4a90e2;
    margin-bottom: 10px;
  }

  .search-input {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .node-container {
    padding-left: 10px;
  }

  .node-group {
    margin-bottom: 15px;
  }
  .node-name {
    font-weight: 500;
    text-transform: capitalize;
    font-size: 1.15rem;
    font-family: Onest Variable, sans-serif;
    padding: 10px;
    &:hover {
      background-color: rgb(240, 240, 240);
    }
  }

  .node-group-title {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    border-bottom: 1px solid #ddd;
    padding-bottom: 5px;
  }
  .node-card {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px;
    outline: 0px;
    border-radius: 4px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    width: 100%;
    height: 100%;
    max-height: 500px;
    overflow: auto;
    h2 {
      font-weight: 700;
      text-transform: capitalize;
      text-align: center;
    }
  }

  .no-results {
    color: #e74c3c;
    text-align: center;
    margin-top: 20px;
  }
  li {
    margin: 0 20px;
  }
`;
