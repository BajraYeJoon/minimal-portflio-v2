import { defineField, defineType } from 'sanity';

export const workType = defineType({
  name: 'work',
  title: 'Work',
  type: 'document',
  fields: [
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
        accept: 'image/*',
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
  preview: {
    select: {
      title: 'title',
      subtitle: 'services',
      media: 'image',
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title: title,
        subtitle: Array.isArray(subtitle) ? subtitle.join(', ') : subtitle,
        media: media,
      };
    },
  },
});
