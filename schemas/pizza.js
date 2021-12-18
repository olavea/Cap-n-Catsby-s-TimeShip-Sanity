import { MdLocalPizza as icon } from 'react-icons/md';

export default {
  // Computer Name
  name: 'pizza',
  // visible title
  title: 'Papa Piraty Pizzas',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Papa Piraty Pizza Name',
      type: 'string',
      description: 'Name of the Piraty Pizza',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
