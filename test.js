export const handler = async () => {
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Function working!', time: new Date().toISOString() })
    };
};