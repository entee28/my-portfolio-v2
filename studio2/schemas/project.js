export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
        },
        {
            name: 'date',
            type: 'datetime',
        },
        {
            name: 'description',
            type: 'text',
        },
        {
            name: 'projectType',
            title: 'Project type',
            type: 'string',
            options: {
                list: [
                    { value: 'Application', title: 'Application' },
                    { value: 'Website', title: 'Website' },
                ],
            },
        },
        {
            name: 'link',
            type: 'url',
        },
        {
            name: 'tags',
            type: 'array',
            of: [
                {
                    type: 'string',
                }
            ],
            options: {
                layout: 'tags',
            }
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ]
}