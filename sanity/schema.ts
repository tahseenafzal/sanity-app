import { type SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
      name: "products",
      type: "document",
      title: "Products",
      fields: [
        {
          name: "name",
          type: "string",
          title: "Name",
        },
        {
          name: "category",
          type: "string",
          title: "Category",
        },
        {
          name: "price",
          type: "number",
          title: "Price",
        },
      ],
    },
  ],
};
