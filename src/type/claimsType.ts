export interface NodeType {
  desc_2?: string;
  examples?: string[];
  claim_type?: string;
  [key: string]: any;
}
export type Data = {
  [key: string]: Node;
};

export type FilteredData = {
  [key: string]: {
    [nodeKey: string]: Node;
  };
};
