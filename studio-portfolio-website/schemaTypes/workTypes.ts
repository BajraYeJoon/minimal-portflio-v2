import { defineField, defineType } from 'sanity';

export const workType = defineType({
  name: 'work',
  title: 'Work',
  type: 'document',
  fields: [
    defineField({
      name: 'index',
      title: 'Display Order',
      type: 'number',
      description:
        'Order in which this work should appear (e.g., 1 for first, 2 for second)',
      validation: (rule) => rule.required().integer().positive(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Name of the project',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Project screenshot or preview image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'services',
      title: 'Services',
      description:
        'List of technologies or services used (e.g., "UI Development", "Nextjs")',
      type: 'array',
      of: [
        {
          type: 'string',
          validation: (rule) => rule.required(),
        },
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'link',
      title: 'Project Link',
      type: 'url',
      description: 'Live project URL',
      validation: (rule) =>
        rule.required().uri({
          scheme: ['http', 'https'],
        }),
    }),
    defineField({
      name: 'size',
      title: 'Display Size',
      type: 'string',
      description: 'How the project should be displayed in the grid',
      options: {
        list: [
          { title: 'Normal (1 column)', value: 'normal' },
          { title: 'Large (2 columns)', value: 'large' },
        ],
        layout: 'radio',
      },
      initialValue: 'normal',
      validation: (rule) => rule.required(),
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'indexAsc',
      by: [{ field: 'index', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'services',
      media: 'image',
      index: 'index',
    },
    prepare(selection) {
      const { title, subtitle, media, index } = selection;
      return {
        title: `${index}. ${title}`,
        subtitle: Array.isArray(subtitle) ? subtitle.join(', ') : subtitle,
        media: media,
      };
    },
  },
});
