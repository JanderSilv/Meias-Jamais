export function signIn() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                token: 'ghd146aiqwe554f5eavun48skdjgb646yskmwersn773habvy521id',
                user: {
                    name: 'Jander',
                    email: 'Jander.Silv@outlook.com',
                },
            });
        }, 1000);
    });
}
