import { MdLocalPizza as icon } from 'react-icons/md';

export default {
  type: 'document',
  name: 'pizza',
  icon,
  fields: [
    {
      type: 'string',
      name: 'name',
      title: 'Name',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      type: 'image',
      name: 'image',
      title: 'Image',
    },
    {
      name: 'toppings',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'topping' }] }],
    },
  ],
};
