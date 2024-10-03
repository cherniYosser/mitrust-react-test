import { NodeType } from "../type/claimsType";

export const isObject = (value: any): string | any => {
  return typeof value === "object" && value !== null;
};

export const filterRecursiveNodes = (
  node: Record<string, NodeType>,
  searchTerm: string
): Record<string, NodeType> => {
  return Object.entries(node).reduce(
    (acc: Record<string, NodeType>, [key, value]: [string, NodeType]) => {
      const matchesKey = key?.toLowerCase()?.includes(searchTerm.toLowerCase());
      if (matchesKey) {
        acc[key] = value;
      } else if (typeof value === "object" && value !== null) {
        const filteredChildren = filterRecursiveNodes(value, searchTerm);
        if (Object.keys(filteredChildren).length > 0) {
          acc[key] = filteredChildren;
        }
      }

      return acc;
    },
    {}
  );
};
