export default {
    user() {
        let user = {
            login: 'duydd25031999',
            id: 45323184,
            node_id: 'MDQ6VXNlcjQ1MzIzMTg0',
            avatar_url: 'https://avatars2.githubusercontent.com/u/45323184?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/duydd25031999',
            html_url: 'https://github.com/duydd25031999',
            followers_url: 'https://api.github.com/users/duydd25031999/followers',
            following_url: 'https://api.github.com/users/duydd25031999/following{/other_user}',
            gists_url: 'https://api.github.com/users/duydd25031999/gists{/gist_id}',
            starred_url: 'https://api.github.com/users/duydd25031999/starred{/owner}{/repo}',
            subscriptions_url: 'https://api.github.com/users/duydd25031999/subscriptions',
            organizations_url: 'https://api.github.com/users/duydd25031999/orgs',
            repos_url: 'https://api.github.com/users/duydd25031999/repos',
            events_url: 'https://api.github.com/users/duydd25031999/events{/privacy}',
            received_events_url: 'https://api.github.com/users/duydd25031999/received_events',
            type: 'User',
            site_admin: false,
            name: 'Đỗ Đức Duy',
            company: null,
            blog: '',
            location: null,
            email: null,
            hireable: null,
            bio: null,
            public_repos: 4,
            public_gists: 0,
            followers: 0,
            following: 0,
            created_at: '2018-11-25T02:15:46Z',
            updated_at: '2019-10-27T02:43:04Z'
        }
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve(user)
            }, 100);
        })
    }
}