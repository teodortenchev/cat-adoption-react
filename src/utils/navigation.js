function getNavigation(isLoggedIn, isAdmin, appUser) {

    const authLinksUser = [
        {
            title: `Hello, ${appUser.displayName || 'friend!'}`,
            link: `/profile/`
        },
        {
            title: "Browse Kitties",
            link: '/cats/all'
        },
        {
            title: "My Adoptions",
            link: '/adoptions/'
        }
    ];

    //TO DO: Will complete after roles are added. 
    const authLinksAdmin = [
        {
            title: "Browse Kitties",
            link: '/cats/all'
        },
        {
            title: "Add Cat",
            link: '/cats/add'
        },
        {
            title: "Adoption Requests",
            link: `/requests/`
        },
        {
            title: `Hello, ${appUser.displayName} (admin)`,
            link: `/profile/`
        }
    ];

    const guestLinks = [
        {
            title: "Sign In",
            link: "/login"
        },
        {
            title: "Sign Up",
            link: "/register"
        },
        {
            title: "Browse Kitties",
            link: '/cats/all'
        }
    ]

    if (isAdmin) {
        return authLinksAdmin;
    }
    return isLoggedIn ? authLinksUser : guestLinks;
}


export default getNavigation;