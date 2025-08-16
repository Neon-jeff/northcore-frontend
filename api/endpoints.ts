
export const endpoints = {
    auth:{
        login: 'api/auth/login',
        register: 'api/auth/register',
        verifyEmail: 'api/auth/verify-email-otp',
        resendOTP: 'api/auth/resend-otp',
        forgotPassword: 'api/auth/forgot-password',
        resetPassword: 'api/auth/reset-password',
        verifyOTP: 'api/auth/verify-email-otp',
        changePassword: 'api/auth/change-password',
        logout: 'api/auth/logout',
        getUser: 'api/auth/user',
        updateUser: 'api/auth/update-user',
        deleteUser: 'api/auth/delete-user',
        requestOTP: 'api/auth/request-email-otp',
    },
    server:{
        status:'api/server',
    },
    marketData: {
        getCryptocurrencies: 'api/markets/crypto',
        getAllMarketData: 'api/markets/all',
    },
    accounts: {
        transactions: 'api/accounts/transactions'
    },
    experts : {
        getAll: 'api/experts',
        getById: (id: number) => `api/experts/${id}`,
    }
}
