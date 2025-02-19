import { defineField, defineType } from 'sanity';

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'number',
      title: 'Number',
      type: 'string',
      description: 'The testimonial number/identifier',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      description: 'The testimonial text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'object',
      validation: (rule) => rule.required(),
      fields: [
        defineField({
          name: 'name',
          title: 'Name',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'company',
          title: 'Company',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'position',
          title: 'Position',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          validation: (rule) => rule.required(),
        }),
      ],
    }),
  ],
});

export const schemaTypes = [testimonialType];
