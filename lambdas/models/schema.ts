export default {
    type: "object",
    properties: {
      id: {type: 'string'},
      name: { type: 'string' },
      isActive: {type: 'boolean'},
      description: {type: 'string'},
      createDateTime: {type: 'Date'},
      createdby: {type: 'string'},
      lastChangedDateTime: {type: 'Date'},
      lastChangedBy: {type: 'string'}
    },
    required: ['id','name', 'isActive', 'createDateTime', 'createdby', 'lastChangedDateTime', 'lastChangedBy']
  } as const;