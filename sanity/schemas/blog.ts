/* eslint-disable import/no-anonymous-default-export */

export default {
  name: "blog",
  type: "document",
  title: "Base de Conocimientos",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Titulo del Caso",
    },
    {
      name: "slug",
      type: "slug",
      title: "URL del Caso",
      options: {
        source: "title",
      },
    },
    {
      name: "titleImage",
      type: "image",
      title: "Titulo Imagen",
    },
    {
      name: "smallDescription",
      type: "text",
      title: "Descripción",
    },
    {
      name: "content",
      type: "array",
      title: "Solución",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
};
