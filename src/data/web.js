export function webData() {
    const orgChart = {
        name: 'Online Business',
        children: [
            {
                name: 'Basic',
                attributes: {
                    id: '1',
                },
                children: [
                    {
                        name: 'Foreman',
                        attributes: {
                            id: '2',
                        },
                        children: [
                            {
                                name: 'Worker',
                            },
                        ],
                    },
                    {
                        name: 'Foreman',
                        attributes: {
                            department: 'Assembly',
                        },
                        children: [
                            {
                                name: 'Worker',
                            },
                        ],
                    },
                ],
            },
            {
                name: 'Backend',
                attributes: {
                    id: '1',
                },
                children: [
                    {
                        name: 'Foreman',
                        attributes: {
                            id: '2',
                        },
                        children: [
                            {
                                name: 'Worker',
                            },
                        ],
                    },
                    {
                        name: 'Foreman',
                        attributes: {
                            department: 'Assembly',
                        },
                        children: [
                            {
                                name: 'Worker',
                            },
                        ],
                    },
                ],
            },
            {
                name: 'Frontend',
                attributes: {
                    department: 'Production',
                },
                children: [
                    {
                        name: 'CSS',
                        attributes: {
                            department: 'X',
                        },
                        children: [
                            {
                                name: 'Worker',
                            },
                        ],
                    },
                    {
                        name: 'HTML',


                    },
                ],
            },
        ],
    }

    return orgChart
}

export function devData() {
    const devTree = {
        name: 'Web Development',
        attributes: {id: "0",},
        children: [
            {
                name: 'Basic',
                attributes: {
                    id: '1',
                },
                children: [
                    {
                        name: 'Git',
                        attributes: {
                            id: '3',
                        },
                    },

                    {
                        name: 'Internet',
                        attributes: {
                            id: '2',
                        },
                        children: [
                            {
                                name: '...',
                            },
                        ],
                    },
                ],
            },
            {
                name: 'Backend',
                attributes: {
                    id: '4',
                },
                children: [
                    {
                        name: 'OS',
                        attributes: {
                            id: '5',
                        },
                    },
                    {
                        name: 'Database',
                        attributes: {
                            id: '6',
                        },
                        children: [
                            {
                                name: 'GraphQL',
                                attributes: {
                                    id: '7',
                                },
                            },
                            {
                                name: 'SQL',
                                attributes: {
                                    id: '8',
                                },
                            },
                            {
                                name: '...',

                            },

                        ],
                    },
                ],
            },
            {
                name: 'Frontend',
                attributes: {
                    id: '12',
                },
                children: [
                    {
                        name: 'CSS',
                        attributes: {
                            id: '9',
                        },
                        children: [
                            {
                                name: '...',
                            },
                        ],
                    },
                    {
                        name: 'HTML',
                        attributes: {
                            id: '10',
                        },
                    },
                    {
                        name: 'Javascript',
                        attributes: {
                            id: '11',
                        },
                        children: [
                            {
                                name: '...',
                            },
                        ],
                    },
                ],
            },
        ],
    }

    return devTree
}




